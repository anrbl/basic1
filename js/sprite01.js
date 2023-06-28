$(function () {
    $('.to_top').on('click', function () {
        $('html, body').animate({ scrollTop: 0 }, 500);
    });

    $('.mainLink .lnk li').on('mouseenter', function () {
        let idx = $(this).index();
        $('.mainVisual .bh').css({
            backgroundPositionX: -3600 - idx * 100
        });
    });
    $('.mainLink .lnk li').on('mouseleave', function () {
        $('.mainVisual .bh').css({
            backgroundPositionX: 0,
        });
    });
});