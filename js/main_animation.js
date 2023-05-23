$(function () {

    const model = ['ioniq6', 'The all-new KONA Electric', 'sonata the edge', 'casper'];

    $('.main_slide').on('init afterChange', function (e, s, c) {
        let _this = $(this).find('.slick-current');
        _this.addClass('on').siblings().removeClass('on');
        $('#main_visual .num').text(c ? c + 1 : 1);
        $('#main_visual .model').text(c ? model[(c) % model.length] : model[0]);
    });

    $('.main_slide').slick({
        arrows: false,
        autoplay: true,
        autoplatSpeed: 3000,
        pauseOnHover: false,
        pauseOnFocus: false,
    });

    $('#main_visual .model').on('click', function () {
        $('.main_slide').slick('slickNext');
    });
});