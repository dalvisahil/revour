$(function() {
    $("#home-slider").owlCarousel({
        items: 1,
        margin: 20,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        dots: false,
        nav :true,
        navText: ['<','>'],
        // responsive: {
        //     0: {
        //         items: 1
        //     },
        //     480: {
        //         items: 2
        //     },
        //     720: {
        //         items: 2
        //     }
        // }
    });
})

$(function() {
    $("#products").owlCarousel({
        items: 1,
        margin: 20,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        dots: false,
        nav :true,
        navText: ['<','>'],
        // responsive: {
        //     0: {
        //         items: 1
        //     },
        //     480: {
        //         items: 2
        //     },
        //     720: {
        //         items: 2
        //     }
        // }
    });
})

$(function() {
    $("#products2").owlCarousel({
        items: 1,
        margin: 20,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        dots: false,
        nav :true,
        navText: ['<','>'],
        // responsive: {
        //     0: {
        //         items: 1
        //     },
        //     480: {
        //         items: 2
        //     },
        //     720: {
        //         items: 2
        //     }
        // }
    });
})

$(function() {
    $("#products3").owlCarousel({
        items: 1,
        margin: 20,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        dots: false,
        nav :true,
        navText: ['<','>'],
        // responsive: {
        //     0: {
        //         items: 1
        //     },
        //     480: {
        //         items: 2
        //     },
        //     720: {
        //         items: 2
        //     }
        // }
    });
})

$(function() {
    $("#products4").owlCarousel({
        items: 1,
        margin: 20,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        dots: false,
        nav :true,
        navText: ['<','>'],
        // responsive: {
        //     0: {
        //         items: 1
        //     },
        //     480: {
        //         items: 2
        //     },
        //     720: {
        //         items: 2
        //     }
        // }
    });
})
$(function() {
    $("#products5").owlCarousel({
        items: 1,
        margin: 20,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        dots: false,
        nav :true,
        navText: ['<','>'],
        // responsive: {
        //     0: {
        //         items: 1
        //     },
        //     480: {
        //         items: 2
        //     },
        //     720: {
        //         items: 2
        //     }
        // }
    });
})

$("#portfolio").magnificPopup({
        delegate: 'a', // child items selector, by clicking on it popup will open
        type: 'image',
        gallery: {
            enabled: true
        },
        zoom: {
            enabled: true
        },
//        overflowY: 'scroll'
        callbacks: {
            open: function(){
                $("html").css('margin-right','0');
            },
        }
    });