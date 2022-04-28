$(document).ready(function() {
    $(".menu-btn").click(function() {
        $(".nav-right").toggleClass("show");
        $("body").toggleClass("stopScroll");
    })
    $('.navigation-bar').navpoints({
        speed: 1000
    });
    /*Iso Tope */
    $(".button-group li").on("click", function() {
        var selector = $(this).attr("data-filter");
        //alert(selector);
        $(".grid").isotope({
            filter: selector,
        });
    });
    $(".grid").isotope();

    // iso tope active classes
    var projectTitle = $(".button-group li");
    if (projectTitle.length) {
        $(".button-group li").on("click", function(event) {
            $(this).siblings(".active").removeClass("active");
            $(this).addClass("active");
            event.preventDefault();
        });
    }
    $("button.show-all").click(function() {
        $(".grid").toggleClass("show");
    });
    $(".client-section.owl-carousel").owlCarousel({
        items: 5,
        loop: true,
        nav: false,
        dots: false,
        autoplay: true,
        autoplayTimeout: 1000,
        autoplayHoverPause: true,
        responsiveClass: true,
        autowidth: true,
        responsive: {
            0: {
                items: 1,
            },
            783: {
                items: 3,
            },
            1000: {
                items: 5,
            },
        }
    });
    $(".up-key").on("click", function(event) {
        event.preventDefault();

        $("html, body").animate({
                scrollTop: 0,
            },
            200
        );
    });
})