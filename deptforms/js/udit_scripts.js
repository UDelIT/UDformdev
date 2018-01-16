/**
 * TOGGLE DIV VANILLA JS
 */
document.addEventListener('DOMContentLoaded',function() {
    document.querySelector('select[name="affiliation"]').onchange=changeEventHandler;
},false);

function changeEventHandler(event) {
  switch (true) {
    case this.value == 'Faculty':
    document.getElementById('Room_building').classList.toggle('toggle');
    break;
    // case this.value == 'Staff':
    // $('#Other_Affl').slideUp('fast');
    // $('#other_affl').val('');
    // $('#Room_building').slideDown('fast');
    // break;
    // case this.value == 'Student':
    // $('#Other_Affl').slideUp('fast');
    // $('#other_affl').val('');
    // $('#Room_building').slideDown('fast');
    // break;
    // case this.value == 'Retiree':
    // $('#Other_Affl').slideUp('fast');
    // $('#other_affl').val('');
    // $('#Room_building').slideUp('fast');
    // $('#room_building').val('');
    // $('#dept').val('');
    // break;
    // case this.value == 'Spouse':
    // $('#Other_Affl').slideUp('fast');
    // $('#other_affl').val('');
    // $('#Room_building').slideUp('fast');
    // $('#room_building').val('');
    // $('#dept').val('');
    // break;
    // case this.value == 'Other':
    // $('#Room_building').slideUp('fast');
    // $('#Other_Affl').slideDown('fast');
    // $('#other_affl').val('');
    // $('#room_building').val('');
    // $('#dept').val('');
    //break;
  }
  // You can use event.target instead of this to refer to the selected element.
  // if(!this.value) alert('Please Select One');
  // else alert('You like ' + this.value + ' ice cream.');
}




