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

  // Hover effect on portfolio
 
$('.work4').hover(function () {
  $(this).css("opacity", "0.6"); 
  $('.hoverwork4').removeClass('hover'); 
      }, function () {
          $(this).css("opacity", "1"); 
          $('.hoverwork4').addClass('hover'); 
  });
     


$('.work3').hover(function () {
  $(this).css("opacity", "0.6");
  $('.hoverwork3').removeClass('hover');
      }, function () {
          $(this).css("opacity", "1");
          $('.hoverwork3').addClass('hover');
  });



$('.work2').hover(function () {
  $(this).css("opacity", "0.6");
  $('.hoverwork2').removeClass('hover');
      }, function () {
          $(this).css("opacity", "1");
          $('.hoverwork2').addClass('hover');
  });



$('.work1').hover(function () {
  $(this).css("opacity", "0.6");
  $('.hoverwork1').removeClass('hover');
      }, function () {
          $(this).css("opacity", "1");
          $('.hoverwork1').addClass('hover');
  });

$('.work5').hover(function () {
  $(this).css("opacity", "0.6");
  $('.hoverwork5').removeClass('hover');
      }, function () {
          $(this).css("opacity", "1");
          $('.hoverwork5').addClass('hover');
  });



$('.work6').hover(function () {
  $(this).css("opacity", "0.6");
  $('.hoverwork6').removeClass('hover');
      }, function () {
          $(this).css("opacity", "1");
          $('.hoverwork6').addClass('hover');
  });



$('.work7').hover(function () {
  $(this).css("opacity", "0.6");
  $('.hoverwork7').removeClass('hover');
      }, function () {
          $(this).css("opacity", "1");
          $('.hoverwork7').addClass('hover');
  });



$('.work8').hover(function () {
  $(this).css("opacity", "0.6");
  $('.hoverwork8').removeClass('hover');
      }, function () {
          $(this).css("opacity", "1");
          $('.hoverwork8').addClass('hover');
  });

// Form validation and message

$("form#form1").on('submit',function(event){
  event.preventDefault();
  var name = $("input#name").val();
  var email = $("input#email").val();
  var message = $("textarea#message").val();

  if ($("input#name").val() && $("input#email").val() && $("input#message").val() ){
      alert ("Hello " + name + ", Thank you for reaching out, we'll get back to you shortly...");
  }
  else if($("input#name").val() && $("input#email").val()){
      alert(" Hey " + name + ".Thank you for reaching us. Getting back to you shortly...");
  }
 else{
   alert("Please provide correct name or email")
 }
});

});
