/**
 * SKIP TO CONTENT POLYFILL
 * Fixing “Skip to content” links for Safari and Chrome
 * @see https://www.nczonline.net/blog/2013/01/15/fixing-skip-to-content-links/
 */
 window.addEventListener("hashchange", function(event) {
  var element = document.getElementById(location.hash.substring(1));
  if (element) {
    if (!/^(?:a|select|input|button|textarea)$/i.test(element.tagName)) {
      element.tabIndex = -1;
    }
    element.focus();
  }
}, false);
