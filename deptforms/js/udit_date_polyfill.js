/**
 * NODEP DATE INPUT POLYFILL
 * Automatically adds datepickers to input[type=date] on IE, Firefox, and OS X Safari
 * @see https://github.com/brianblakely/nodep-date-input-polyfill
 */

var theDate = document.querySelector('input[type="date"]');
  theDate.addEventListener('change', function() {
    console.log('blank date input:', theDate.value);
  });
