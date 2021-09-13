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


$('.work4').mouseover(function () {
  $('.work4-overlay').show();
}).mouseout(function() {
  $('.work4-overlay').hide();
});
$(".work3").mouseover(function () {
  $(".work3-overlay").show();
}).mouseout(function() {
  $(".work3-overlay").hide();
});
$(".work2").mouseover(function () {
  $(".work2-overlay").show();
}).mouseout(function() {
  $(".work2-overlay").hide();
});
$(".work1").mouseover(function () {
  $(".work1-overlay").show();
}).mouseout(function() {
  $(".work1-overlay").hide();
});
$(".work5").mouseover(function () {
  $(".work5-overlay").show();
}).mouseout(function() {
  $(".work5-overlay").hide();
});
$(".work6").mouseover(function () {
  $(".work6-overlay").show();
}).mouseout(function() {
  $(".work6-overlay").hide();
});
$(".work7").mouseover(function() {
  $(".work7-overlay").show();
}).mouseout(function() {
  $(".work7-overlay").hide();
});
$(".work8").mouseover(function() {
  $(".work8-overlay").show();
}).mouseout(function() {
  $(".work8-overlay").hide();
});