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
  $(".product").click(function(){
      $(".producmanagementimage").toggle();
      $(".description3").toggle();
  });
});