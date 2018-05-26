// get y position

function getOffset(el) {
  var _x = 0;
  var _y = 0;
  while (el && !isNaN(el.offsetLeft) && !isNaN(el.offsetTop)) {
    _x += el.offsetLeft - el.scrollLeft;
    _y += el.offsetTop - el.scrollTop;
    el = el.offsetParent;
  }
  return { top: _y, left: _x };
}

//debounce

var elementTarget = document.getElementsByTagName("a");

function debounce(func, wait, immediate) {
  var timeout;
  return function() {
    var context = this,
      args = arguments;
    var later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

//change color of link

var myEfficientFn = debounce(function() {
  var i;
  for (i = 0; i < elementTarget.length; i++) {
    if (
      window.scrollY >
      getOffset(elementTarget[i]).top + elementTarget[i].offsetHeight
    ) {
      elementTarget[i].style.color = "green";
    }
  }
}, 250);

//window listener

window.addEventListener("scroll", myEfficientFn);
