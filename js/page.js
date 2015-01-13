jQuery(document).ready(function() {
  $('#popup-btn').click(function (){
    $( "#popUp" ).show();
    $( ".popUp__close" ).click(function(){
      console.log("hey Folks");
      $( "#popUp" ).hide();
    });
  }) // End button click
})
