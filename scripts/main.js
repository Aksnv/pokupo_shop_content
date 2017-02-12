/* Пагинация для баннера */

$(".banner-gallery__paginator-item").click(function() {
  for (var i = 1; i < $(".banner-gallery__paginator-item").length + 1; i++) {
    $(".banner-gallery__paginator-item--" + i).removeClass("banner-gallery__paginator-item--active");
    if ($(this).hasClass("banner-gallery__paginator-item--" + i)) {
      var paginatorItemNumber = i;
    }
  }
  $(this).addClass("banner-gallery__paginator-item--active");

  for (var j = 1; j < $(".banner-gallery__image").length + 1; j++) {
    if (j == paginatorItemNumber) {
      $(".banner-gallery__image--" + j).show();
    } else {
      $(".banner-gallery__image--" + j).hide();
    }
  } 
});


/* Выпадающее меню кабинета пользователя */

$(".page-header__login").click(function() {
  $(".page-header__login-inner").toggleClass("page-header__login-inner--close");
  if ($(".page-header__login-inner").hasClass("page-header__login-inner--close")) {
    $(".page-header__login-logo").css("backgroundPosition", "-7px -7px");
  } else {
    $(".page-header__login-logo").css("backgroundPosition", "-120px -95px");
  }
});

$(".page-header__login").mouseover(function() {
  $(".page-header__login-logo").css("backgroundPosition", "-120px -95px");
});

$(".page-header__login").mouseout(function() {
  if ($(".page-header__login-inner").hasClass("page-header__login-inner--close")) {
    $(".page-header__login-logo").css("backgroundPosition", "-7px -7px");
  } else {
    $(".page-header__login-logo").css("backgroundPosition", "-120px -95px");
  }
});


/* Выпадающая корзина */

$(".page-header__cart").click(function() {
  $(".page-header__cart-inner").toggleClass("page-header__cart-inner--close");
  $(".page-header__cart-logo").toggleClass("page-header__cart-logo--open");
  if ($(".page-header__cart-inner").hasClass("page-header__cart-inner--close")) {
    $(".page-header__cart-logo").css("backgroundPosition", "-32px -7px");
  } else {
    $(".page-header__cart-logo").css("backgroundPosition", "-151px -8px");
  }
});

$(".page-header__cart").mouseover(function() {
  $(".page-header__cart-logo").css("backgroundPosition", "-151px -8px");
});

$(".page-header__cart").mouseout(function() {
  if ($(".page-header__cart-inner").hasClass("page-header__cart-inner--close")) {
    $(".page-header__cart-logo").css("backgroundPosition", "-32px -7px");
  } else {
    $(".page-header__cart-logo").css("backgroundPosition", "-151px -8px");
  }
});


/* Шапка при скролле страницы */

/*(function () {

  var body = document.querySelector("body");
  var containerStyle = getComputedStyle(document.querySelector(".container"));
  var pageHeader = document.querySelector(".page-header");

  var pageHeader2 = document.querySelector(".page-header--2");

  var pageHeaderLogo = document.querySelector(".page-header__logo");
  var pageHeaderHeader = document.querySelector(".page-header__header");
  var pageHeaderCart = document.querySelector(".page-header__cart");
  var pageHeaderLogin = document.querySelector(".page-header__login");

  window.addEventListener("scroll", function(event) {

      var bodyCoordinates = body.getBoundingClientRect();
      
      if (bodyCoordinates.top < -140) {
        if (pageHeader.classList.contains("page-header--2")) {
          pageHeader.classList.add("page-header--scroll--2");
        }
        pageHeader.classList.remove("page-header");
        pageHeader.classList.add("page-header--scroll");
        pageHeaderLogo.classList.add("page-header__logo--scroll");
        pageHeaderHeader.classList.add("page-header__header--scroll");
        pageHeaderCart.classList.add("page-header__cart--scroll");
        pageHeaderLogin.classList.add("page-header__login--scroll");
        document.querySelector(".page-header__menu").style.display = "none";
      } else {
        pageHeader.classList.add("page-header");
        pageHeader.classList.remove("page-header--scroll");
        if (pageHeader.classList.contains("page-header--scroll--2")) {
          pageHeader.classList.remove("page-header--scroll--2");
        }
        pageHeaderLogo.classList.remove("page-header__logo--scroll");
        pageHeaderHeader.classList.remove("page-header__header--scroll");
        pageHeaderCart.classList.remove("page-header__cart--scroll");
        pageHeaderLogin.classList.remove("page-header__login--scroll");
        document.querySelector(".page-header__menu").style.display = "block";
      }

      if (containerStyle.width != "978px") {
        document.querySelector(".page-header__menu").style.display = "none";
      }
  });

}());*/