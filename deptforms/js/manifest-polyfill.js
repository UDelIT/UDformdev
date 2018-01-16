/**
 * iOS MANIFEST POLYFILL
 * @see https://gist.github.com/tomayac/e603424468a298b0054a38ffa8582318
 */

    // (function() {
    //   var manifestEl = document.head.querySelector('link[rel="manifest"][href]');
    //   if (!manifestEl) {
    //     return;
    //   }

    //   var xhr = new XMLHttpRequest();
    //   xhr.onload = function() {
    //     addTags(xhr.response);
    //   };
    //   xhr.onerror = function() {
    //     return;
    //   };
    //   xhr.open('GET', manifestEl.href);
    //   xhr.responseType = 'json';
    //   xhr.send();

    //   var addTags = function(manifest) {

    //     var webAppCapable = document.createElement('meta');
    //     var webAppTitle = document.createElement('meta');
    //     var webAppStartUrl = document.createElement('meta');
    //     webAppCapable.setAttribute('name', 'apple-mobile-web-app-capable');
    //     var isWebAppCapable = /standalone|fullscreen/g.test(manifest.display) ? 'yes' : 'no';
    //     webAppCapable.setAttribute('content', isWebAppCapable);
    //     webAppTitle.setAttribute('name', 'apple-mobile-web-app-title');
    //     webAppTitle.setAttribute('content', (manifest.short_name || manifest.name) || '');

    //     webAppStartUrl.setAttribute('name', 'msapplication-starturl');
    //     webAppStartUrl.setAttribute("content", manifest['start_url'] || location.href);

    //     // Parse the icons.

    //     var icons = manifest.icons || [];

    //     for (var iconIdx = 0; iconIdx < icons.length; iconIdx++) {
    //       var icon = icons[iconIdx];
    //       var iconElement = document.createElement('link');
    //       iconElement.setAttribute('rel', 'apple-touch-icon');
    //       iconElement.setAttribute('href', icon.src);
    //       iconElement.setAttribute('sizes', icon.sizes);
    //       document.head.appendChild(iconElement);
    //     }
    //     document.head.appendChild(webAppCapable);
    //     document.head.appendChild(webAppTitle);
    //     document.head.appendChild(webAppStartUrl);
    //   }
    // })();

    // This all simulates the start URL.
    // (function() {
    //   var startUrlEl = document.querySelector("meta[name=msapplication-starturl]");
    //   if(!!startUrlEl === true && navigator.standalone === true) {
    //     var lastUrl = localStorage["navigate"];
    //     history.pushState({launched: (!!lastUrl == false && history.length === 1)}, undefined, lastUrl || startUrlEl.content);
    //     localStorage.removeItem("navigate");

    //     // Intercept all anchor clicks and keep fullscreen if in origin
    //     document.addEventListener("click", function(e) {
    //       var target = e.target;
    //       if(target.tagName === 'A') {

    //         var href = target.getAttribute("href");
    //         var linkedUrl = new URL(target.href);
    //         if(linkedUrl.origin === location.origin) {
    //           e.preventDefault();
    //           location.href = href;
    //         }
    //         else {
    //           // When we are navigating away store the state so we can resume.
    //           localStorage["navigate"] = location.href;
    //         }
    //       }
    //     });
    //   }
    // })();


/**
 * https://github.com/GoogleChromeLabs/pwacompat/blob/master/pwacompat.min.js
 * @return {[type]} [description]
 */
(function k(g,d,l){function e(a,b){if(!d[a]){if(!g[a]){var c="function"==typeof require&&require;if(!b&&c)return c(a,!0);if(f)return f(a,!0);c=Error("Cannot find module '"+a+"'");throw c.code="MODULE_NOT_FOUND",c;}c=d[a]={b:{}};g[a][0].call(c.b,function(b){var c=g[a][1][b];return e(c?c:b)},c,c.b,k,g,d,l)}return d[a].b}for(var f="function"==typeof require&&require,h=0;h<l.length;h++)e(l[h]);return e})({1:[function(m,g){g.b=function(d,g){function e(b,c){c&&f.push({name:"meta",a:{name:b,content:!0===
c?"yes":c}})}var f=[],h=d.icons||[];h.sort(function(b,c){return parseInt(c.sizes,10)-parseInt(b.sizes,10)});h.forEach(function(b){f.push({name:"link",a:{rel:"icon",href:b.src,sizes:b.sizes}});g||f.push({name:"link",a:{rel:"apple-touch-icon",href:b.src,sizes:b.sizes}})});if(g)return f;h=-1!==["standalone","fullscreen"].indexOf(d.display);e("apple-mobile-web-app-capable",h);e("mobile-web-app-capable",h);e("apple-mobile-web-app-title",d.short_name||d.name);e("msapplication-starturl",d.start_url||"/");
e("msapplication-TileColor",d.theme_color);var a;(d.related_applications||[]).filter(function(b){return"itunes"==b.platform}).forEach(function(b){b.id?a=b.id:(b=b.url.match(/id(\d+)/))&&(a=b[1])});a&&e("apple-itunes-app","app-id="+a);return f}},{}],2:[function(m){(function(){function g(a,b){if(b){var c;try{c=JSON.parse(window.localStorage["pwacompat.js"])}catch(n){}if(c){a(c);return}}var d=new XMLHttpRequest;d.onload=function(){var b=JSON.parse(d.responseText);try{window.localStorage["pwacompat.js"]=
d.responseText}catch(p){}a(b)};d.open("GET",f.href);d.send()}function d(a){m("./lib")(a,e).forEach(function(b){var c=document.createElement(b.name),a;for(a in b.a)c.setAttribute(a,b.a[a]);document.head.appendChild(c)});navigator.standalone&&l(a)}function l(a){document.addEventListener("click",function(a){"A"===a.target.tagName&&((new URL(a.target.href)).origin!==location.origin?window.localStorage["pwacompat.js:out"]=location.href:(a.preventDefault(),window.location=a.target.href))});if(window.sessionStorage&&
!window.sessionStorage.loaded){window.sessionStorage.loaded=!0;a=window.localStorage["pwacompat.js:out"]||a.start_url;delete window.localStorage["pwacompat.js:out"];var b=window.location.href+window.location.search;a&&a!=b&&(a.replace(/#.*$/,"")==b?window.location.hash=a.substr(a.indexOf("#")):window.location=a)}}var e=!!navigator.serviceWorker;if(!document.head.querySelector('link[type|="icon"]')||!e){var f=document.head.querySelector('link[rel="manifest"]');if(f&&f.href){var h=window.performance&&
1!==window.performance.navigation.type;g(d,navigator.standalone||h)}else console.warn('pwacompat.js can\'t operate: no <link rel="manifest" ... /> found')}})()},{"./lib":1}]},{},[2]);

