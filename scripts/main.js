/* Нажатие на кнопку Платформа */

$(".page-header--bottom__platform-button").click(function() {

  if ($(this).hasClass("page-header--bottom__platform-button--open")) {
    $(this).removeClass("page-header--bottom__platform-button--open");
    $(this).addClass("page-header--bottom__platform-button--close");
    $(this).html("Свернуть");
    $(".page-header--bottom__platform-button::before").css("transform", "rotate(180deg)");
    $(".page-header--top").show();
    $(".page-header--bottom").css("marginTop", 88);
    $(".page-header--bottom").css("borderTop", "none");
  } else {
    $(this).removeClass("page-header--bottom__platform-button--close");
    $(this).addClass("page-header--bottom__platform-button--open");
    $(this).html("Платформа");
    $(".page-header--top").hide();
    $(".page-header--bottom").css("marginTop", 0);
    $(".page-header--bottom").css("borderTop", "5px solid #fff");
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