$('.promo__btn').on('click', function() {
    $('.overlay').fadeIn('slow');
});

$('.modal__exit').on('click', function() {
    $('.overlay').fadeOut('slow');
});

$('.modal__btn').on('click', function() {
    if($('input[name=name]').val() && $('input[name=phone]').val()) {
        $('.overlay').fadeOut('slow');
    };
});

$('.header__burger').on('click', function() {
    $('.header__mobile-wrapper').toggleClass('header__mobile-wrapper_active');
    $('.header__mobile').toggleClass('header__mobile_active');
});

$('.header__mobile-cross, .header__mobile-logo, .header__mobile>ul>li').on('click', function() {
    $('.header__mobile-wrapper').toggleClass('header__mobile-wrapper_active');
    $('.header__mobile').toggleClass('header__mobile_active');
});