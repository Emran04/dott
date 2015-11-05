(function( $ ) {

    //Function to animate slider captions 
    function doAnimations( elems ) {
        //Cache the animationend event in a variable
        var animEndEv = 'webkitAnimationEnd animationend';
        
        elems.each(function () {
            var $this = $(this),
                $animationType = $this.data('animation');
            $this.addClass($animationType).one(animEndEv, function () {
                $this.removeClass($animationType);
            });
        });
    }
    
    //Variables on page load 
    var $myCarousel = $('#main-slider'),
        $firstAnimatingElems = $myCarousel.find('.item:first').find("[data-animation ^= 'animated']");
        
    //Initialize carousel 
    $myCarousel.carousel();
    
    //Animate captions in first slide on page load 
    doAnimations($firstAnimatingElems);
    
    //Pause carousel  
    $myCarousel.carousel('pause');
    
    
    //Other slides to be animated on carousel slide event 
    $myCarousel.on('slide.bs.carousel', function (e) {
        var $animatingElems = $(e.relatedTarget).find("[data-animation ^= 'animated']");
        doAnimations($animatingElems);
    });

})(jQuery);

$(document).ready(function() {
    $( '.dropdown' ).hover(
        function(){
            $(this).children('.sub-menu').slideDown(200);
        },
        function(){
            $(this).children('.sub-menu').slideUp(200);
        }
    );

    
    var options = {
      useEasing : true, 
      useGrouping : true, 
      separator : ',', 
      decimal : '.', 
      prefix : '', 
      suffix : '' 
    };

    var numAnim = new CountUp("prj-count", 0, 3541, 0, 5, options);
    var numAnim2 = new CountUp("prj-count-2", 0, 4689, 0, 5, options);
    var numAnim3 = new CountUp("prj-count-3", 0, 2349, 0, 5, options);





    var $count = $(".count");
    $count.waypoint(function (direction) {
        if (direction === 'down') {
            numAnim.start();
            numAnim2.start();
            numAnim3.start();
        }
        else {
          numAnim.reset();
          numAnim2.reset();
          numAnim3.reset();
          //$menu.removeClass('stuck');
        }

    }, { offset: '50%' });

    var sticky = new Waypoint.Sticky({
      element: $('.main-menu')[0]
    });
}); // end ready


(function($){
    var $promo = $(".single-promo");
    $promo.waypoint(function (direction) {
        if (direction === 'down') {
            $promo.css('opacity', '1').addClass("animated fadeInUp");
            // $(".single-promo:first-child").addClass("animated fadeInLeft");
            // $(".single-promo:last-child").addClass("animated fadeInRight");
        }
        else {
            $promo.removeClass("animated fadeIn");
        }

    }, { offset: '90%' });
})(jQuery);