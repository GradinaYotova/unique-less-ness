$(document).ready(function() { 

            $('.indexTrigger').addClass("active");

            $('.aboutTrigger').click(function() {
                $(this).addClass("active");
                $(this).siblings().removeClass("active");
                $('.aboutView').addClass("active");
                $('.index').removeClass("active");
            });


             $('.indexTrigger').click(function() {
                $(this).addClass("active");
                $(this).siblings().removeClass("active");
                $('.index').addClass("active");
                $('.aboutView').removeClass("active");
            });
        }); 

let swiper = new Swiper('.swiper-container', {
    observer: true,
    observeParents: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    effect: 'fade'
});