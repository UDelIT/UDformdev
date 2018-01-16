/**
  * HASHTAG JUMPING LINK FIX
  * Prevent # links from firing
  * @see  http://stackoverflow.com/questions/30004365/jquery-prevent-jump-on-a-tag-if-href-only-contains
 */
$('a[href="#"]').on('click', function (e) {
  e.preventDefault();
});
/**
  * TODAY'S DATE
  * Display date in field
*/
 var newDate = new Date();
 var formattedString = [newDate.getMonth()+1,newDate.getDate(),newDate.getFullYear()].join("/");
 $('#todays_date').val((formattedString)); //Result : mm/d/yyyy
/**
 * OPEN PDF's IN NEW WINDOW
 */
$(document).on('click', 'a[href$=".pdf"]', function() {
  $(this).attr('target', "_blank");
});
/**
 * COMBINE MULTIPLE CHECKBOX VALUES
 * Using same name and unique id's, this merges the checkbox array so all selected values in a group
 * display in email receipt.
 */
function Populate(){
  var cbArray = [];
    vals = $('#cb_type_id input[type="checkbox"]:checked').map(function() {
        return this.value;
    }).get().join(',');
    console.log(vals);
    $('#record_type_array').val(vals);
    console.log('asdf: ' + $('#record_type_array').val());
}

$('#cb_type_id input[type="checkbox"]').on('change', function() {
    Populate()
}).change();
/********************************************************************************************************
 	JQUERY UI SNIPPETS
 ********************************************************************************************************/
/**
 * JQUERY UI DATEPICKER
 * onSelect added to validate field after date is chosen.
 */
var minDate = new Date(1990,0,1);
var maxDate = new Date(2017,11,31);
$(document).ready(function(){
  $(".date-pick").datepicker({
    yearRange: '1990:2017',
    constrainInput: true,
    beforeShowDay: nonWorkingDates,
    numberOfMonths: 1,
    minDate: minDate,
    maxDate: maxDate,
    firstDay: 0,
    changeMonth: true,
    changeYear: true,
    onClose: function() {
      if ($(this).val() != '') {
        $(this).removeClass('mui--is-empty').addClass('mui--is-not-empty');
      }
    },
    onSelect: function () {
      $(this).trigger("focus").trigger("blur");
    },
  });
 });
/**
 * DISABLE CLOSED DAYS
 */
function nonWorkingDates(date){
  var day = date.getDay(), Sunday = 0, Monday = 1, Tuesday = 2, Wednesday = 3, Thursday = 4, Friday = 5, Saturday = 6;
  var closedDates = [[]]; //var closedDates = [[9, 15, 2012], [9, 16, 2012]];
  var closedDays = [[]]; //var closedDays = [[Sunday], [Saturday]];
  for (var i = 0; i < closedDays.length; i++) {
    if (day == closedDays[i][0]) {
      return [false];
    }
  }
  for (i = 0; i < closedDates.length; i++) {
    if (date.getMonth() == closedDates[i][0] - 1 &&
      date.getDate() == closedDates[i][1] &&
      date.getFullYear() == closedDates[i][2]) {
        return [false];
      }
    }
  return [true];
}
/* assumes date format MM/DD/YYYY */
function checkPickedDate(datefield) {
  var str = datefield.value.split("/");
  var d = new Date(str[2],str[0]-1,str[1],0,0,0,0);
  if ( d < minDate || d > maxDate || (nonWorkingDates(d)=="false") ) {
    alert(datefield.value + ' is not available. Choose another date.');
    return false;
  }
  return true;
}

function checkAllDates(form) {
  var elements = form.elements;
  for ( var e=0; e < elements.length; e++ ) {
    var el = elements[e];
      if ( el.id != null && el.id.indexOf("DEPDOB") == 0 )
        if ( !checkPickedDate(el) )
          return false;
  }
  return true;
}
