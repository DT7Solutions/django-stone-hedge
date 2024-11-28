/*
Template: Marblex - Marble & Tiles HTML Template
Author: peacefulqode.com
Version: 1.0
Design and Developed by: PeacefulQode

*/

/*================================================
[  Table of contents  ]
==================================================

==> Page Loader
==> Search Button
==> Accordion
==> Sidebar Toggle
==> Sticky Header
==> Owl Carousel
==> Back To Top
==> Isotope
==> Counter
==> WOW
==> Map


==================================================
[ End table content ]
================================================*/


(function (jQuery) {
    "use strict";
    jQuery(window).on('load', function (e) {


        /*==================================================
        [ Page Loader ]
        ==================================================*/
        jQuery("#pq-loading").fadeOut();
        jQuery("#pq-loading").delay(0).fadeOut("slow");

        var Scrollbar = window.Scrollbar;


        /*==================================================
        [ Search Button ]
        ==================================================*/
        jQuery('#pq-seacrh-btn').on('click', function () {
            jQuery('.pq-search-form').slideToggle();
            jQuery('.pq-search-form').toggleClass('pq-form-show');
            if (jQuery('.pq-search-form').hasClass("pq-form-show")) {
                jQuery(this).html('<i class="ti-close"></i>');
            } else {
                jQuery(this).html('<i class="ti-search"></i>');
            }
        });


        /*==================================================
        [ Accordion ]
        ==================================================*/
        jQuery('.pq-accordion-block .pq-accordion-box .pq-accordion-details').hide();
        jQuery('.pq-accordion-block .pq-accordion-box:first').addClass('pq-active').children().slideDown('slow');
        jQuery('.pq-accordion-block .pq-accordion-box').on("click", function () {
            if (jQuery(this).children('div.pq-accordion-details').is(':hidden')) {
                jQuery('.pq-accordion-block .pq-accordion-box').removeClass('pq-active').children('div.pq-accordion-details').slideUp('slow');
                jQuery(this).toggleClass('pq-active').children('div.pq-accordion-details').slideDown('slow');
            }
        });


        /*==================================================
        [ Sidebar Toggle ]
        ==================================================*/
        jQuery("#pq-toggle-btn").on('click', function () {
            jQuery('#pq-sidebar-menu-contain').toggleClass("active");
        });

        jQuery('.pq-toggle-btn').click(function () {
            jQuery('body').addClass('pq-siderbar-open');

        });

        jQuery('.pq-close').click(function () {
            jQuery('body').removeClass('pq-siderbar-open');
        });


        /*==================================================
        [ Sticky Header ]
        ==================================================*/
        var view_width = jQuery(window).width();
        if (!jQuery('header').hasClass('pq-header-default') && view_width >= 1023) {
            var height = jQuery('header').height();
            jQuery('.pq-breadcrumb').css('padding-top', height * 2.1);
        }
        if (jQuery('header').hasClass('pq-header-default')) {
            jQuery(window).scroll(function () {
                var scrollTop = jQuery(window).scrollTop();
                if (scrollTop > 90) {
                    jQuery('.pq-bottom-header').addClass('pq-header-sticky animated fadeInDown animate__faster');
                } else {
                    jQuery('.pq-bottom-header').removeClass('pq-header-sticky animated fadeInDown animate__faster');
                }
            });
        }
        if (jQuery('header').hasClass('pq-has-sticky')) {
            jQuery(window).scroll(function () {
                var scrollTop = jQuery(window).scrollTop();
                if (scrollTop > 90) {
                    jQuery('.pq-bottom-header').addClass('pq-header-sticky animated fadeInDown animate__faster');
                } else {
                    jQuery('.pq-bottom-header').removeClass('pq-header-sticky animated fadeInDown animate__faster');
                }
            });
        }

        /*==================================================
        [ Portfolio Tab ]
        ==================================================*/

        jQuery('.protfolio-tabs-item a').on({
            mouseenter: function () {
                jQuery('.protfolio-tabs-item a.active').removeClass('active');
                jQuery(this).addClass('active');
            },
            mouseleave: function (e) {
                var $clid = jQuery('.protfolio-tabs-item a').eq('2')[0];
                jQuery($clid).addClass('active');
                if (e.currentTarget == $clid) {
                    jQuery($clid).addClass('active');
                } else {
                    jQuery(this).removeClass('active');
                }
            }
        });

        /*==================================================
        [ Service List ]
        ==================================================*/
    
        jQuery('.pq-service-box-4-list .item:first-child .pq-service-box').addClass("active");
        jQuery('.pq-service-box-4-list .item').on({
            mouseenter: function() {
              jQuery('.pq-service-box-4-list .pq-service-box').removeClass('active');
              jQuery(this).find(".pq-service-box").addClass('active');
            },
        });

        /*==================================================
        [ Slick Slider ]
        ==================================================*/

        if (jQuery('.slick-slider-main').length) {
            var $slider = jQuery('.slick-slider-main').slick({
                slidesToShow: 1,
                infinite: false,
                arrows: true,
                autoplay: false,
                dots: false,
                lazyLoad: 'ondemand',
                autoplaySpeed: 3000,
                loop: true,
                asNavFor: '.slick-slider-thumb'
            });
            var $slider2 = jQuery('.slick-slider-thumb').slick({
                slidesToShow: 1,
                infinite: false,
                lazyLoad: 'ondemand',
                asNavFor: '.slick-slider-main',
                autoplay: false,
                dots: false,
                Default: '50px',
                arrows: false,
                centerMode: false,
                loop: true,
                focusOnSelect: true
            });
        }

        /*==================================================
        [ Owl Carousel ]
        ==================================================*/
        jQuery('.owl-carousel').each(function () {
            var app_slider = jQuery(this);
            app_slider.owlCarousel({
                items: app_slider.data("desk_num"),
                loop: app_slider.data("loop"),
                margin: app_slider.data("margin"),
                nav: app_slider.data("nav"),
                dots: app_slider.data("dots"),
                autoplay: app_slider.data("autoplay"),
                autoplayTimeout: app_slider.data("autoplay-timeout"),
                navText: ["<i class='ion-ios-arrow-back'></i><span></span>", "<span></span><i class='ion-ios-arrow-forward'></i>"],
                responsiveClass: true,
                responsive: {
                    // breakpoint from 0 up
                    0: {
                        items: app_slider.data("mob_sm"),
                        nav: false
                    },
                    // breakpoint from 480 up
                    480: {
                        items: app_slider.data("mob_num"),
                        nav: false
                    },
                    // breakpoint from 786 up
                    786: {
                        items: app_slider.data("tab_num")
                    },
                    // breakpoint from 1023 up
                    1024: {
                        items: app_slider.data("lap_num")
                    },
                    1199: {
                        items: app_slider.data("desk_num")
                    }
                }
            });
        });

        /*==================================================
        [ Progressbar ]
        ==================================================*/

        jQuery(".pq-progressbar-content .show-progress").each(function () {
            jQuery(this).animate({
                width: jQuery(this).attr("data-width") + "%",
            },
                2000
            );
        });
    });

    /*==================================================
    [ Back To Top ]
    ==================================================*/
    jQuery('#back-to-top').fadeOut();
    jQuery(window).on("scroll", function () {
        if (jQuery(this).scrollTop() > 250) {
            jQuery('#back-to-top').fadeIn(1400);
        } else {
            jQuery('#back-to-top').fadeOut(400);
        }
    });
    jQuery('#top').on('click', function () {
        jQuery('top').tooltip('hide');
        jQuery('body,html').animate({
            scrollTop: 0
        }, 800);
        return false;
    });


    /*==================================================
    [ Isotope ]
    ==================================================*/

    jQuery('.pq-masonry').isotope({
        itemSelector: '.pq-masonry-item',
        layoutMode: 'fitRows',
        masonry: {
            columnWidth: '.grid-sizer',
            isFitWidth: true,
            percentPosition: true,
        }
    });

    jQuery('.pq-grid').isotope({
        itemSelector: '.pq-grid-item',
    });

    jQuery('.pq-filter-button-group').on('click', '.pq-filter-btn', function () {
        var filterValue = jQuery(this).attr('data-filter');
        // console.log(filterValue);
        jQuery('.pq-masonry').isotope({
            filter: filterValue
        });
        jQuery('.pq-grid').isotope({
            filter: filterValue
        });
        jQuery('.pq-filter-button-group .pq-filter-btn').removeClass('active');
        jQuery(this).addClass('active');
    });

    var initial_items = 5;
    var next_items = 3;

    if (jQuery('.pq-masonry').length > 0) {
        var initial_items = jQuery('.pq-masonry').data('initial_items');
        var next_items = jQuery('.pq-masonry').data('next_items');
    }

    if (jQuery('.pq-grid').length > 0) {
        var initial_items = jQuery('.pq-grid').data('initial_items');
        var next_items = jQuery('.pq-grid').data('next_items');
    }

    if (jQuery('.pq-masonry').length > 0) {
        jQuery('.pq-masonry').isotope('layout');
    }

    if (jQuery('.pq-grid').length > 0) {
        jQuery('.pq-grid').isotope('layout');
    }

    /*==================================================
    [ counter ]
    ==================================================*/
    jQuery('.timer').countTo();

    /*==================================================
    [ Timeline ]
    ==================================================*/

    function Timeline() {
        jQuery('.cntl').each(function () {
            jQuery(this).cntl({
                revealbefore: 300,
                anim_class: 'cntl-animate',
                onreveal: function (e) {
                    console.log(e);
                }
            });
        });
    }

    if (jQuery('.cntl').length > 0) {
        Timeline();
    }

    /*==================================================
    [ wow ]
    ==================================================*/

    new WOW().init();


    /*==================================================
    [ Magnific Popup ]
    ==================================================*/
    jQuery(document).ready(function () {
        jQuery('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
            disableOn: 700,
            type: 'iframe',
            mainClass: 'mfp-fade',
            removalDelay: 160,
            preloader: false,
            fixedContentPos: false
        });

        jQuery('.gallery').each(function () { // the containers for all your galleries
            jQuery(this).magnificPopup({
                delegate: 'a', // the selector for gallery item
                type: 'image',
                gallery: {
                    enabled: true
                }
            });
        });
    });

})(jQuery);


