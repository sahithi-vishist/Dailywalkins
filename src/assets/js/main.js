"use strict";
jQuery(document).ready(function ($) {

    $("#loading").fadeOut();
//for Preloader

    // $(window).load(function () {
    //     $("#loading").fadeOut();
    // });


    /*---------------------------------------------*
     * Mobile menu
     ---------------------------------------------*/
    $('#navbar-menu').find('a[href*=#]:not([href=#])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: (target.offset().top - 70)
                }, 1000);
                if ($('.navbar-toggle').css('display') != 'none') {
                    $(this).parents('.container').find(".navbar-toggle").trigger("click");
                }
                return false;
            }
        }
    });



    /*---------------------------------------------*
     * WOW
     ---------------------------------------------*/

    var wow = new WOW({
        mobile: false // trigger animations on mobile devices (default is true)
    });
    wow.init();

// magnificPopup

    // $('.popup-img').magnificPopup({
    //     type: 'image',
    //     gallery: {
    //         enabled: true
    //     }
    // });

    // $('.video-link').magnificPopup({
    //     type: 'iframe'
    // });



// slick slider active Home Page Tow
//    $(".hello_slid").slick({
//        dots: true,
//        infinite: false,
//        slidesToShow: 1,
//        slidesToScroll: 1,
//        arrows: true,
//        prevArrow: "<i class='icon icon-chevron-left nextprevleft'></i>",
//        nextArrow: "<i class='icon icon-chevron-right nextprevright'></i>",
//        autoplay: true,
//        autoplaySpeed: 2000
//    });




//---------------------------------------------
// Scroll Up 
//---------------------------------------------

    $('.scrollup').click(function () {
        $("html, body").animate({scrollTop: 0}, 1000);
        return false;
    });





//Team Skillbar active js

    jQuery('.teamskillbar').each(function () {
        jQuery(this).find('.teamskillbar-bar').animate({
            width: jQuery(this).attr('data-percent')
        }, 6000);
    });

    //End

});


(function ($) {
    "use strict";
  
    $.fn.placeholderTypewriter = function (options) {

        // Plugin Settings
        var settings = $.extend({
          delay: 50,
          pause: 2000,
          text: []
        }, options);
    
        // Type given string in placeholder
        function typeString($target, index, cursorPosition, callback) {
          // Get text
          var text = settings.text[index];
          // Get placeholder, type next character
          var placeholder = $target.attr('placeholder');
          $target.attr('placeholder', placeholder + text[cursorPosition]);
          // Type next character
          if (cursorPosition < text.length - 1) {
            setTimeout(function () {
              typeString($target, index, cursorPosition + 1, callback);
            }, settings.delay);
            return true;
          }
          // Callback if animation is finished
          callback();
        }
    
        // Delete string in placeholder
        function deleteString($target, callback) {
          // Get placeholder
          var placeholder = $target.attr('placeholder');
          var length = placeholder.length;
          // Delete last character
          $target.attr('placeholder', placeholder.substr(0, length - 1));
          // Delete next character
          if (length > 1) {
            setTimeout(function () {
              deleteString($target, callback)
            }, settings.delay);
            return true;
          }
          // Callback if animation is finished
          callback();
        }
    
        // Loop typing animation
        function loopTyping($target, index) {
          // Clear Placeholder
          $target.attr('placeholder', '');
          // Type string
          typeString($target, index, 0, function () {
            // Pause before deleting string
            setTimeout(function () {
              // Delete string
              deleteString($target, function () {
                // Start loop over
                loopTyping($target, (index + 1) % settings.text.length)
              })
            }, settings.pause);
          })
        }
    
        // Run placeholderTypewriter on every given field
        return this.each(function () {
          loopTyping($(this), 0);
        });
    
    }; 
  
  }(jQuery));