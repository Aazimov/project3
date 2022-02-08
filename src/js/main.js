

let headerBtn = $(".header__button");
let overlay = $(".overlay");
let popupClose = $(".popup__close");
let popupFormBtn = $(".popup__form-btn")


headerBtn.on( "click", function () {
    overlay.fadeIn("slow")
} );


popupClose.on("click", function () {
    overlay.fadeOut("slow")

});
popupFormBtn.on("click", function (e) {
    e.preventDefault();
    overlay.fadeOut("slow")
});

overlay.on("click", function () {
    if (e.target.className ==="overlay"){
        overlay.fadeOut("slow")
    }

});

let ul = $('.review__list');

ul.on('click', 'li:not(.review__item_active)', function() {
    $(this)
        .addClass('review__item_active').siblings().removeClass('review__item_active')
        .closest('review__tabs').find('div.review__tabs-content').removeClass('review__tabs-content_active').eq($(this).index()).addClass('review__tabs-content_active');
});
