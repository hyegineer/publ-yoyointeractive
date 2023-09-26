// ========================== 커스텀 셀렉트
$(".custom-select .opt").on("click", function () {
  $(this).siblings(".opt-list-wrap").addClass("active");
})

$(".opt-list-grp .opt-list").on("click", function () {
  var val = $(this).text();

  $(this).parents(".opt-list-wrap").removeClass("active");
  $(this).parents(".opt-list-wrap").siblings(".opt").text(val);
  $(this).parents(".custom-select").siblings(".inp").val(val);

  $(this).parents(".custom-select").siblings(".error-text").hide();
})
// ========================== 헤더 ) hover 시 서브메뉴 노출
$(".header .nav-wrap .nav-list").on("mouseover", function () {
  $(".header").addClass("active");
})

$(".header").on("mouseleave", function () {
  $(".header").removeClass("active");
})

// ========================== 헤더 ) 확장형 메뉴
$("#nav-open-btn").on("click", function () {
  $("#nav-page").addClass("active");
})

$("#nav-close-btn").on("click", function () {
  $("#nav-page").removeClass("active");
})

// ========================== 헤더 ) 마우스 오버시 효과
$(".snb-list").on("mouseover", function() {
  $(".snb-list").removeClass("active");
  $(this).addClass("active");

  $(".nav-link").removeClass("active");
  $(this).parent(".snb-list-grp").siblings(".nav-link").addClass("active");
})

$(".nav-list").on("mouseleave", function () {
  $(".nav-link").removeClass("active");
  $(".snb-list").removeClass("active");
})