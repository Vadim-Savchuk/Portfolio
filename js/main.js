// ===========Slider=one===============

new Swiper('.slider-container', {
    navigation: {
        nextEl: '.button-prev',
        prevEl: '.button-next'
    },

    slidesPerView: 2.5,

    spaceBetween: 30,

    loop: true, 
});

// ===========Slider=two===============

new Swiper('.testimonials-swiper', {
    navigation: {
        nextEl: '.button-prev',
        prevEl: '.button-next'
    },

    slidesPerView: 1,

    spaceBetween: 30,

    loop: true, 
});

// ===========FAQ===accordeon===============

$('.acc-head').click(function(){
    $(this).toggleClass('active');
    $(this).next().toggleClass('active');
    $(this).next().slideUp(500);
   
    if( $('.acc-body.active') ){
     $('.acc-body.active').slideDown(500);
    }
   });