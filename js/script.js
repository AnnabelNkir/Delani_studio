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

  $('.work4').mouseover(function () {
    $('.work4overlay').show();
}).mouseout(function () {
    $('.work4overlay').hide();
});
$('.work3').mouseover(function () {
    $('.work3overlay').show();
}).mouseout(function () {
    $('.work3overlay').hide();
});
$('.work2').mouseover(function () {
    $('.work2overlay').show();
}).mouseout(function () {
    $('.work2overlay').hide();
});
$('.work1').mouseover(function () {
    $('.work1overlay').show();
}).mouseout(function () {
    $('.work1overlay').hide();
});
$('.work5').mouseover(function () {
    $('.work5overlay').show();
}).mouseout(function () {
    $('.work5overlay').hide();
});
$('.work6').mouseover(function () {
    $('.work6overlay').show();
}).mouseout(function () {
    $('.work6overlay').hide();
});
$('.work7').mouseover(function () {
    $('.work7overlay').show();
}).mouseout(function () {
    $('.work7overlay').hide();
});
$('.work8').mouseover(function () {
    $('.work8overlay').show();
}).mouseout(function () {
    $('.work8overlay').hide();
});
});