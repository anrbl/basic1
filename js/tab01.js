$(function () {
    $('.tab_link li').on('click', function (event) {
        event.preventDefault();
        let idx = $(this).index(); //0,1,2
        /* $(this).index()를 idx라는 이름으로 묶었다. */

        $(this).addClass('on').siblings().removeClass('on');

        //siblings 사용
        $('.tab_content .con').eq(idx).addClass('on').siblings().removeClass('on');

        //siblings 미사용 - 방향 바꾸면 안됨
        /* $('.tab_content .con').removeClass('on');
        $('.tab_content .con').eq(idx).addClass('on') */

        console.log(event, event.target, event.currentTarget, $(this), $(this).index());
    });

    $('.tab_map_link li').on('click', function (e) {
        e.preventDefault();
        let idx = $(this).index();

        $('.tab_map_location li').eq(idx).addClass('on').siblings().removeClass('on');
    });
});