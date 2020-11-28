$(document).ready(function () {
    $('.single-item').slick({
        accessibility: true,
        // autoplay:true,
        adaptiveHeight: true,
        dots: true,
    });
    $('.multiple-items').slick({
        accessibility: true,
        dots: true,
        infinite: true,
        arrows: true,
        // autoplay:true,
        speed: 1500,
        slidesToShow: 3,
        slidesToScroll: 3
    });
    $('.responsive').slick({
        dots: true,
        // autoplay:true,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });
});