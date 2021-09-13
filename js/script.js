// what we do toggle user-interface logic
$(document).ready(function(){
  $(".design").click(function(){
      $(".designimage").toggle();
      $(".description1").toggle();
  });
  $(".development").click(function(){
      $(".developmentimage").toggle();
      $(".description2").toggle();
  });
  $(".productmanagement").click(function(){
      $(".productmanagementimage").toggle();
      $(".description3").toggle();
  });
});


$('.work4').mouseover(function() {
  $('.work4-overlay').show();
}).mouseout(function() {
  $('.work4-overlay').hide();
});
$(".work3").mouseenter(function() {
  $(".work3-overlay").show();
}).mouseleave(function() {
  $(".work3-overlay").hide();
});
$(".work2").mouseenter(function() {
  $(".work2-overlay").show();
}).mouseleave(function() {
  $(".work2-overlay").hide();
});
$(".work1").mouseenter(function() {
  $(".work1-overlay").show();
}).mouseleave(function() {
  $(".work1-overlay").hide();
});
$(".work5").mouseenter(function() {
  $(".work5-overlay").show();
}).mouseleave(function() {
  $(".work5-overlay").hide();
});
$(".work6").mouseenter(function() {
  $(".work6-overlay").show();
}).mouseleave(function() {
  $(".work6-overlay").hide();
});
$(".work7").mouseenter(function() {
  $(".work7-overlay").show();
}).mouseleave(function() {
  $(".work7-overlay").hide();
});
$(".work8").mouseenter(function() {
  $(".work8-overlay").show();
}).mouseleave(function() {
  $(".work8-overlay").hide();
});
