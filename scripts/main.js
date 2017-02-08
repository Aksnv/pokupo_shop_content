/* Выпадающее верхнее меню */

$(".page-header--bottom__platform-button").click(function() {

  if ($(this).hasClass("page-header--bottom__platform-button--open")) {
    $(this).removeClass("page-header--bottom__platform-button--open");
    $(this).addClass("page-header--bottom__platform-button--close");
    $(this).html("Свернуть");
    $(".page-header--bottom__platform-button").css("paddingLeft", "32px");
    $(".page-header--bottom__platform-button::before").css("transform", "rotate(180deg)");
    $(".page-header--top").show();
    $(".page-header--bottom").css("marginTop", 88);
    $(".page-header").css("borderTop", "none");
    $(".page-header").addClass("page-header--open");
  } else {
    $(this).removeClass("page-header--bottom__platform-button--close");
    $(this).addClass("page-header--bottom__platform-button--open");
    $(this).html("Платформа");
    $(".page-header--bottom__platform-button").css("paddingLeft", "20px");
    $(".page-header--top").hide();
    $(".page-header--bottom").css("marginTop", 0);
    $(".page-header").css("borderTop", "5px solid #fff");
    $(".page-header").removeClass("page-header--open");
  }
});


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


/* Меню кабинета пользователя */

$(".page-header--bottom__login").click(function() {
  $(".page-header--bottom__login-inner").toggleClass("page-header--bottom__login-inner--close");
  if ($(".page-header--bottom__login-inner").hasClass("page-header--bottom__login-inner--close")) {
    $(".page-header--bottom__login-logo").css("backgroundPosition", "-7px -7px");
  } else {
    $(".page-header--bottom__login-logo").css("backgroundPosition", "-120px -95px");
  }
});

$(".page-header--bottom__login").mouseover(function() {
  $(".page-header--bottom__login-logo").css("backgroundPosition", "-120px -95px");
});

$(".page-header--bottom__login").mouseout(function() {
  if ($(".page-header--bottom__login-inner").hasClass("page-header--bottom__login-inner--close")) {
    $(".page-header--bottom__login-logo").css("backgroundPosition", "-7px -7px");
  } else {
    $(".page-header--bottom__login-logo").css("backgroundPosition", "-120px -95px");
  }
});