// jQuery for link scrolling up
$(document).ready(function() {
  $(".ir-arriba").click(function() {
    $("body, html").animate(
      {
        scrollTop: "0px"
      },
      1000
    );
  });

  $(window).scroll(function() {
    if ($(this).scrollTop() > 0) {
      $(".ir-arriba").slideDown(300);
    } else {
      $(".ir-arriba").slideUp(300);
    }
  });

  $(".logo-arriba").click(function() {
    $("body, html").animate(
      {
        scrollTop: "0px"
      },
      1000
    );
  });
});

var navbarItems = document.getElementsByClassName("navbar__item");

for (var i = 0; i < navbarItems.length; i++) {
  navbarItems[i].addEventListener("click", function(event) {
    var goTo = this.getElementsByTagName("a")[0].href.split("#");

    deleteActiveClass();
    this.classList.add("navbar__item--active");

    if (goTo.length === 2) {
      event.preventDefault();
      var sectionToGo = goTo[goTo.length - 1];
      var elementToGo = getElementToScroll(sectionToGo);
      scrollToElement(elementToGo);
    }
  });
}

function deleteActiveClass() {
  for (var i = 0; i < navbarItems.length; i++) {
    navbarItems[i].classList.remove("navbar__item--active");
  }
}

function getElementToScroll(id) {
  var elem;
  if (id === "") {
    elem = document.getElementsByClassName("header")[0];
  } else {
    elem = document.getElementById(id);
  }

  return elem;
}

function scrollToElement(element) {
  var jump = parseInt(element.getBoundingClientRect().top * 0.2);
  document.body.scrollTop += jump;
  document.documentElement.scrollTop += jump;

  if (!element.lastJump || element.lastJump > Math.abs(jump)) {
    element.lastJump = Math.abs(jump);
    setTimeout(function() {
      scrollToElement(element);
    }, 25);
  } else {
    element.lastJump = null;
  }
}

var acumulativeOffset = function(element) {
  var top = 0;

  do {
    top += element.offsetTop || 0;
    element = element.offsetParent;
  } while (element);

  return top - 50;
};

var quienSoyOffset = acumulativeOffset(document.getElementById("quien-soy"));
var equipoOffset = acumulativeOffset(document.getElementById("equipo"));
var transporteOffset = acumulativeOffset(document.getElementById("transporte"));

window.addEventListener("scroll", changeMenuStyle);

var previous;

function changeMenuStyle(event) {
  var pageOffset = window.pageYOffset;

  if (pageOffset >= 0 && pageOffset < quienSoyOffset) {
    if (!previous || previous !== 1) {
      previous = 1;
    } else {
      return false;
    }

    deleteActiveClass();
    setActiveItem("a[href='#']");
  } else if (pageOffset >= quienSoyOffset && pageOffset < equipoOffset) {
    if (!previous || previous !== 2) {
      previous = 2;
    } else {
      return false;
    }

    deleteActiveClass();
    setActiveItem("a[href$='quien-soy']");
  } else if (pageYOffset >= equipoOffset && pageYOffset < transporteOffset) {
    if (!previous || previous !== 3) {
      previous = 3;
    } else {
      return false;
    }

    deleteActiveClass();
    setActiveItem("a[href$='equipo']");
  }
}

function setActiveItem(selector) {
  document
    .querySelector(selector)
    .parentNode.classList.add("navbar__item--active");
}
