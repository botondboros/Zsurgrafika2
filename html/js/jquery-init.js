/*------------------------------------------------------------------

@Author: CodeoStudio
@URL:    http://codeostudio.hr/

[Table of contents]

1. Sticky sidebar
2. Support for touch screens
3. Toggle primary nav
4. Clone stuff to offcanvas
5. Off-canvas menu sub-menus
6. Fit video
7. Main slider
8. Parallax page title
9. Magnific lightbox
10. Accordions
11. Tabs
12. Footer reveal
13. Sticky header 
14. Post slider
15. Load isotope filter

-------------------------------------------------------------------*/   

// Executes when the HTML document is loaded.
$(document).ready(function () {
    "use strict";
    // 1. Sticky sidebar
    $(".cs-sticky-sidebar").theiaStickySidebar({
        additionalMarginTop: 130
    });
    // 2. Support for touch screens for mobile menu
    $(".cs-primary-nav nav li:has(ul)").doubleTapToGo();
    // 3. Toggle primary nav
    $(".cs-toggle-nav, .cs-offcanvas-wrap .close").on("click", function () {
        $(".cs-offcanvas-wrap").toggleClass("active");
    });
    // 4. Clone stuff to offcanvas
    $(".cs-primary-nav nav").clone().appendTo(".cs-offcanvas-nav");
    $(".cs-top-info nav").clone().appendTo(".cs-offcanvas-info");
    $(".cs-top-social nav").clone().appendTo(".cs-offcanvas-social");
    // 5. Off-canvas menu sub-menus
    $(".cs-offcanvas-nav .menu-item-has-children a").on("click", function () {
        event.stopPropagation();
        location.href = this.href;
    });
    $(".cs-offcanvas-nav .menu-item-has-children").on("click", function () {
        $(this).children("ul").toggle();
        $(".cs-offcanvas-nav nav").resize();
        $(this).toggleClass("show-sub-menu");
        return false;
    });
    // 6. Fit video
    $("body").fitVids();
    // 7. Main slider
    $("#cs-main-slider").layerSlider({
        skin: "v6",
        skinsPath: '../goodtaste/layerslider/skins/',
        type: "fullsize",
        fullSizeMode: "hero",
        globalBGColor: "#000",
        autoStart: true,
        showCircleTimer: false,
        allowFullscreen: true,
        pauseOnHover: false,
        navButtons: true,
        thumbnailNavigation: "disabled",
        navStartStop: false
    });
    // 8. Parallax page title
    var s = skrollr.init({forceHeight: false});
    if (s.isMobile()) {s.destroy();}
    // 9. Magnific lightbox
    $(".cs-lightbox-image").magnificPopup({type:"image"}); 
    // 10. Accordions
    $(".cs-accordion-group").accordion({
        heightStyle: "content",
        collapsible: true,
        icons: false
    });
    // 11. Tabs
    $(".cs-tab-group").tabs();
    // 12. Footer reveal
    $("#cs-footer").footerReveal({shadow: false,zIndex: -101});
    // 13. Sticky header 
    var initMenuPosition = $(".cs-header-inner").offset().top;
    var headerHeightPx = $("#cs-header").height();
    $(window).scroll(function () {
        if ($(window).scrollTop() > initMenuPosition){
            $(".cs-header-inner-sticky").addClass("active");
            $(".cs-header-inner-fill").css("height", headerHeightPx);
        } else {
            $(".cs-header-inner-sticky").removeClass("active");
            if($(window).width() < 800){
                $(".cs-header-inner-fill").css("height", 0);
            }
        }
    });
    // 14. Post slider
    $(".cs-post-slider").layerSlider({
        skin: "v6",
        skinsPath: '../goodtaste/layerslider/skins/',
        globalBGColor: "#000",
        autoStart: true,
        showCircleTimer: false,
        pauseOnHover: false,
        navButtons: true,
        thumbnailNavigation: "disabled",
        navStartStop: false
    });
});

// Executes when all sub-elements of HTML have been completely loaded.
$(window).load(function () {
    "use strict";
    // 15. Load isotope filter
    var $grid = $('.cs-restaurant-items-grid.filterable, .cs-restaurant-items-overlay.filterable ').isotope();
    $('.filter-button-group').on( 'click', 'button', function() {
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({ filter: filterValue });
    });
    $('.button-group').each( function( i, buttonGroup ) {
        var $buttonGroup = $( buttonGroup );
        $buttonGroup.on( 'click', 'button', function() {
            $buttonGroup.find('.is-checked').removeClass('is-checked');
            $( this ).addClass('is-checked');
        });
    });
});