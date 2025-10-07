/*----------------------------------------------------------------------------------- 

Template Name: Bistly - Restaurant & Cafe HTML Template
URI: pixelfit.agency
Description: Bistly is a clean, modern, and fully responsive HTML template designed specifically for restaurants, cafes, bakeries, coffee shops, and food-related businesses. Crafted with attention to detail and built using the latest web technologies, Bistly ensures an exceptional user experience on all devices.
Author: Pixelfit
Author URI: https://themeforest.net/user/pixelfit
Version: 1.0 


------------------------------------------------------
   CSS INDEX
-----------------------------------------------------

    # Components
        # Base CSS
        # Common CSS
        # Preloader CSS
        # Offcanvas CSS
        # Animation CSS
        # Button CSS
        # Header CSS
        # Footer CSS
-------------------------------------------------------    */

(function($) {
    'use strict';
    if ($('.hero-slider').length) {
        $('.hero-slider').slick({
            dots: false,
            arrows: false,
            infinite: true,
            speed: 800,
            fade: true,
            cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)',
            autoplay: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            prevArrow: '<div class="prev"><i class="far fa-arrow-left"></i></div>',
            nextArrow: '<div class="next"><i class="far fa-arrow-right"></i></div>'
        });
    }

    if ($('.testimonial-slider').length) {
        $('.testimonial-slider').slick({
            dots: false,
            arrows: false,
            infinite: true,
            speed: 600,
            autoplay: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            prevArrow: '<div class="prev"><i class="fal fa-angle-left"></i></div>',
            nextArrow: '<div class="next"><i class="fal fa-angle-right"></i></div>'
        });
    }

})(window.jQuery);