$(function(){

    let eleWidth = $('.frame li').innerWidth(); //패디을 포함한 위드
    let state = false; // li의 동작 상태를 관리하기 위한 변수
    let playOn = false; // 배너 슬라이더의 동작 상태를 관리하는 변수
    let bannerAuto; //셋인털벌이라는 함수를 제어하기 위한 변수로 사용함

    function play() {
        if(!playOn) {
            playOn = true;
            bannerAuto = setInterval(function(){
                if(direction == 'left') {
                    $('.left').click();
                } else{
                    $('.right').click();
                }
            }, 2000);
        }

        if(playOn){
            $('.frame li a').mouseover(function(){
                stop();
            });
        }
    } // play end!

    function stop() {
        if(playOn) {
            playOn = false;
            clearInterval(bannerAuto);
        }
        $('.frame li a').mouseout(function(){
            play();
        });
        $('.frame la a').click(function(){
            location.href;
        });
    } // stop() end!

    function left(){
        stop();
        direction = 'left';
        $('.frame ul').animate({left:eleWidth * -1}
            ,500, function(){
                //디스는 객체만 받음
                $(this).children('li:first').insertAfter($(this).children("li:last"));
                $(this).css('left', 0);
                state = false;
                play();
            });
    } // left end!

    function right() {
        stop();
        direction = 'right';
        $('.frame>ul>li:last').insertBefore($('.frame li:first'));

        $('.frame ul').css('left', eleWidth*-1);
        $('.frame ul').animate({left:0}, 500,
        function(){state = false;
            play();
        });
    } // right() end!

    $('.left').click(function(){
        if(!state){
            state= true;
            left();
        }
    })

    $('.right').click(function(){
        if(!state){
            state= true;
            right();
        }
    })

    $('.stop').click(function(){
        stop();
    })

    $('.play').click(function(){
        play();
    })

    $('.play').click();
});