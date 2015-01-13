jQuery(document).ready(function() {
  $('#popup-btn').click(function (){
    $( "#popUp" ).fadeIn();
    $( ".popUp__close" ).click(function(){
      console.log("hey Folks");
      $( "#popUp" ).fadeOut();
    });
  }) // End button click
})
