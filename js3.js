$(document).ready(function() {
    var oneAtTime = true; // if only want one open at a time
    $(".nat-accordion-button").click(function() {
      $(".nat-accordion-button").removeClass("active");
      if ( $(this).next(".nat-accordion-content").is(":visible") ) {
        $(this).next(".nat-accordion-content").slideUp();
      }
      else {
        if (oneAtTime == true) {
          $(".nat-accordion-content").slideUp().delay(300);
        }
        $(this).next(".nat-accordion-content").slideDown();
        $(this).addClass("active");
      }
    });
    
    $("#showall").click(function() {
      $(".nat-accordion-content").slideDown();
    });
    
    $("#hideall").click(function() {
      $(".nat-accordion-content").slideUp();
    });
    
  });