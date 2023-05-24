$(function () {
    $('#bgndVideo').YTPlayer({
        videoURL: 'https://youtu.be/5QEnmD8MDe0',
        containment: '#main_visual',
        autoPlay: true,
        mute: true,
        showControls: false,
        playOnlyIfVisible: true
    });

    $('#main_visual .pause').on('click', function () {
        $('#bgndVideo').YTPPause();
    });
    $('#main_visual .play').on('click', function () {
        $('#bgndVideo').YTPPlay();
    });


    $('#conVideo1').YTPlayer({
        videoURL: 'DsZhTIwJV5E',
        containment: '#bgm1',
        autoPlay: true,
        mute: true,
        showControls: false,
        startAt: 1,
        playOnlyIfVisible: true
    });

    $('#conVideo2').YTPlayer({
        videoURL: 'DsZhTIwJV5E',
        containment: '#bgm2',
        autoPlay: true,
        mute: true,
        showControls: false,
        startAt: 1,
        playOnlyIfVisible: true
    });

    $('#conVideo3').YTPlayer({
        videoURL: 'DsZhTIwJV5E',
        containment: '#bgm3',
        autoPlay: true,
        mute: true,
        showControls: false,
        startAt: 1,
        playOnlyIfVisible: true
    });

});