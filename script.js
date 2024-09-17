
// Tabbed Menu
function openMenu(evt, menuName) {
  var i, x, tablinks;
  x = document.getElementsByClassName("menu");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < x.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" w3-dark-grey", "");
  }
  document.getElementById(menuName).style.display = "block";
  evt.currentTarget.firstElementChild.className += " w3-dark-grey";
}
document.getElementById("myLink").click();

// slider
function initComparisons() {
  var x, i;
  /*find all elements with an "overlay" class:*/
  x = document.getElementsByClassName("img-comp-overlay");
  for (i = 0; i < x.length; i++) {
    /*once for each "overlay" element:
    pass the "overlay" element as a parameter when executing the compareImages function:*/
    compareImages(x[i]);
  }
  function compareImages(img) {
    var slider, img, clicked = 0, w, h;
    /*get the width and height of the img element*/
    w = img.offsetWidth;
    h = img.offsetHeight;
    /*set the width of the img element to 50%:*/
    img.style.width = (w / 2) + "px";
    /*create slider:*/
    slider = document.createElement("DIV");
    slider.setAttribute("class", "img-comp-slider");
    /*insert slider*/
    img.parentElement.insertBefore(slider, img);
    /*position the slider in the middle:*/
    slider.style.top = (h / 2) - (slider.offsetHeight / 2) + "px";
    slider.style.left = (w / 2) - (slider.offsetWidth / 2) + "px";
    /*execute a function when the mouse button is pressed:*/
    slider.addEventListener("mousedown", slideReady);
    /*and another function when the mouse button is released:*/
    window.addEventListener("mouseup", slideFinish);
    /*or touched (for touch screens:*/
    slider.addEventListener("touchstart", slideReady);
    /*and released (for touch screens:*/
    window.addEventListener("touchend", slideFinish);
    function slideReady(e) {
      /*prevent any other actions that may occur when moving over the image:*/
      e.preventDefault();
      /*the slider is now clicked and ready to move:*/
      clicked = 1;
      /*execute a function when the slider is moved:*/
      window.addEventListener("mousemove", slideMove);
      window.addEventListener("touchmove", slideMove);
    }
    function slideFinish() {
      /*the slider is no longer clicked:*/
      clicked = 0;
    }
    function slideMove(e) {
      var pos;
      /*if the slider is no longer clicked, exit this function:*/
      if (clicked == 0) return false;
      /*get the cursor's x position:*/
      pos = getCursorPos(e)
      /*prevent the slider from being positioned outside the image:*/
      if (pos < 0) pos = 0;
      if (pos > w) pos = w;
      /*execute a function that will resize the overlay image according to the cursor:*/
      slide(pos);
    }
    function getCursorPos(e) {
      var a, x = 0;
      e = (e.changedTouches) ? e.changedTouches[0] : e;
      /*get the x positions of the image:*/
      a = img.getBoundingClientRect();
      /*calculate the cursor's x coordinate, relative to the image:*/
      x = e.pageX - a.left;
      /*consider any page scrolling:*/
      x = x - window.pageXOffset;
      return x;
    }
    function slide(x) {
      /*resize the image:*/
      img.style.width = x + "px";
      /*position the slider:*/
      slider.style.left = img.offsetWidth - (slider.offsetWidth / 2) + "px";
    }
  }
}
initComparisons();

// Get the elements with class="column"
var elements = document.getElementsByClassName("column");

// Declare a loop variable
var i;

// Full-width images
function one() {
    for (i = 0; i < elements.length; i++) {
    elements[i].style.msFlex = "100%";  // IE10
    elements[i].style.flex = "100%";
  }
}

// Two images side by side
function two() {
  for (i = 0; i < elements.length; i++) {
    elements[i].style.msFlex = "50%";  // IE10
    elements[i].style.flex = "50%";
  }
}

// Four images side by side
function four() {
  for (i = 0; i < elements.length; i++) {
    elements[i].style.msFlex = "25%";  // IE10
    elements[i].style.flex = "25%";
  }
}

// Add active class to the current button (highlight it)
var header = document.getElementById("myHeader");
var btns = header.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

