$(function () {
    $('#header .gnb>ul>li').on('click', function (e) {
        if ($('#header .gnb').hasClass('on')) {
            e.preventDefault();
            $(this).addClass('on').siblings().removeClass('on');

        }
    });

    $('#header .mopen').on('click', function () {
        $('#header .gnb').toggleClass('on');
        $('#header').toggleClass('on');
    });

});