$(".variable-width").slick({
  arrows: true,
  dots: true,
  infinite: true,
  autoplay: true,
  speed: 250,
  slidesToShow: 1,
  // centerPadding: "150px",
  // centerMode: true,
  nextArrow: $(".next"),
  prevArrow: $(".prev"),
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: false
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: false
      }
    }
  ]
});

$(document).ready(function() {
  $(".slick-slider").slick({});
});
