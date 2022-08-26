// home page section 3 ,,4th tab
$("#owl1").owlCarousel({
    pagination: true,
    items: 1,
    loop: true,
    margin: 0,
    autoplay: true,
    autoplayTimeout: 4000,
    autoplayHoverPause: true,
    dots: true,
});

$('.play').on('click', function () {
    owl.trigger('play.owl.autoplay', [0])
})
$('.stop').on('click', function () {
    owl.trigger('stop.owl.autoplay')
});


$("#owl2").owlCarousel({
    pagination: true,
    items: 7,
    loop: true,
    center:true,
    margin: 100,
    autoplay: true,
    autoplayTimeout: 4000,
    autoplayHoverPause: false,
    dots: false,
   
    autoWidth: true,
     stagePadding: 50,
    responsive: {
        0: {
            items: 1,
            nav: true,
            loop: true,
        },
        375: {
            items: 1,
            nav: true,
            loop: true,
        },
        450: {
            items: 2,
            nav: true,
            loop: true,
        },
        500: {
            items: 2,
            nav: true,
            loop: true,
        },
        768: {
            items: 7,
            nav: true,
            loop: true,
        },
        1000: {
            items: 7,
            nav: true,
            loop: true,
        }
    }
});






// $("#owl3").owlCarousel({
//     pagination: true,
//     items: 3,
//     loop: true,
//     margin: 0,
//     //                        autoplay: true,
//     autoplayTimeout: 6000,
//     autoplayHoverPause: false,
//     dots: true,
//     nav: false,
//     responsive: {
//         0: {
//             items: 1,
//             nav: true,
//             loop: true,
//         },
//         375: {
//             items: 1,
//             nav: true,
//             loop: true,
//         },
//         450: {
//             items: 2,
//             nav: true,
//             loop: true,
//         },
//         500: {
//             items: 2,
//             nav: true,
//             loop: true,
//         },
//         768: {
//             items: 3,
//             nav: true,
//             loop: true,
//         },
//         1000: {
//             items: 5,
//             nav: true,
//             loop: true,
//         }
//     }
// });




// $('.play').on('click', function() {
//     owl.trigger('play.owl.autoplay', [0])
// })
// $('.stop').on('click', function() {
//     owl.trigger('stop.owl.autoplay')
// });




// $("#owl4").owlCarousel({
//     pagination: true,
//     items: 3,
//     loop: true,
//     margin: 0,
//     //                        autoplay: true,
//     autoplayTimeout: 6000,
//     autoplayHoverPause: false,
//     dots: true,
//     nav: false,
//     responsive: {
//         0: {
//             items: 1,
//             nav: true,
//             loop: true,
//         },
//         375: {
//             items: 1,
//             nav: true,
//             loop: true,
//         },
//         450: {
//             items: 2,
//             nav: true,
//             loop: true,
//         },
//         500: {
//             items: 2,
//             nav: true,
//             loop: true,
//         },
//         768: {
//             items: 3,
//             nav: true,
//             loop: true,
//         },
//         1000: {
//             items: 4,
//             nav: true,
//             loop: true,
//         }
//     }
// });




 $('.play').on('click', function() {
     owl.trigger('play.owl.autoplay', [0])
 })
 $('.stop').on('click', function() {
     owl.trigger('stop.owl.autoplay')
 });
