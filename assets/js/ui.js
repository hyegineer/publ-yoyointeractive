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
  $("#hd-search").slideUp();
})

$(".header").on("mouseleave", function () {
  $(".header").removeClass("active");
})

// ========================== 헤더 ) 검색버튼 클릭시
$("#search-open-btn").on("click", function () {
  $(".header").removeClass("active"); 
  $("#hd-search").slideDown();
})

$("#hd-search").on("mouseleave", function () {
  $("#hd-search").slideUp();
})

// ========================== 헤더 ) 확장형 메뉴
$("#nav-open-btn").on("click", function () {
  $("#nav-page").addClass("active");
  if ($("#main-cursor")) {
    $("#main-cursor").removeClass("show");
  }
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
// ========================== 팝업
function showPopup(id) {
  $('.popup-container').addClass('active');
  $('#' + id).addClass('active');
  $('#' + id).children('.popup-backdrop').show();
  $('#' + id).children('.popup').show();
}

function closeAllPopup() {
  $('.popup-container').removeClass('active');
  $('.popup-wrapper').removeClass('active');
}

function clickBackdrop(id) {
  $('#' + id).removeClass('active');
}
// ========================== 헤더 ) hover 시 서브메뉴 노출
$(function(){
  var $header = $('.header'); //헤더를 변수에 넣기
  var $page = $('.scroll-change'); //색상이 변할 부분
  var $window = $(window);
  var pageOffsetTop = $page.offset().top;//색상 변할 부분의 top값 구하기
  
  $window.on('resize', function(){ //반응형을 대비하여 리사이즈시 top값을 다시 계산
    pageOffsetTop = $page.offset().top;
  });
  
  $window.on('scroll', function(){ //스크롤시
    var scrolled = $window.scrollTop() >= pageOffsetTop; //스크롤된 상태; true or false
    $header.toggleClass('bg-white', scrolled); //클래스 토글
  });
});