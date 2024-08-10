(function($){
  $(function(){

    $('.sidenav').sidenav();

    // pour le slider
      $('.slider').slider({
        fullwidth:true,
        indicators:false,
        heigth:500,
      });
    //les trois points sur le slider
      $(document).ready(function(){
        $('.slider').slider();
  
      });


      //pour le scrollspy

      $(document).ready(function(){
        $('.scrollspy').scrollSpy();
      });
  }); // end of document ready
})(jQuery); // end of jQuery name space
