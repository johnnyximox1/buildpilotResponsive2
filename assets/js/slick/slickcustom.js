   $(function () {
       $('.slick-center').slick({
           infinite: true,
           autoplay: false,
           centerMode: true,
           //      dots: true,
           centerPadding: '40%',
           responsive: [
               {
                   breakpoint: 992,
                   settings: {
                       centerPadding: '30%',
                   }
      },
               {
                   breakpoint: 500,
                   settings: {
                       slidesToShow: 1,
                       centerMode: false
                   }
      },
    ]
       });

   });
