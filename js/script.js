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