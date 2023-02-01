// $(function(){
//     const lnbLi = $('.lnb>li');
//     const ul = $('.lnb>li>ul');
//     const headerMin = $('.inner_header').height();
//     const headerMax = headerMin + ul.innerHeight();
//     /*이너하이트 
//     순수컨텐츠는 하이트로 잡는다.*/
//     let state = false; /*임의로 만든 변수 제어용
//     마우스상태가 변화가 되었다면 이렇게 해라.
//     마우스로 풀따운으로 떨어졌다고 하면
//     조건을쓸수는없다. 메누기딸아쟜디먄 ㅇ;ㅍ,문으로구혀ㅑㅁㄴ모샇ㄹ떼상태변화가있다면상태변화가없다면
//     스테이트 불린데이터 펄스가 기본값 선언해도 펄스고 안해도 펄스다
//     어떠한 이벤트ㅏ일어나서 상태가변화가 되었다면*/

//     lnbLi.mouseenter(function() {
//         if(!state) { //마우스의 상태변화가 일어났다면
//             $('inner_header').stop().animate({
//                 height: headerMax
//             },150, function(){
//                 ul.stop().fadeIn(150);
//             })
//             state = true;
//         } // if블럭
//         $(this).find('ul').addClass('on');
    
//     }) // lnbLi 마우스 엔터 이벤트

// })

$(function() {

    ​
    
      const lnbLi = $('.lnb>li');
    
      const ul = $('.lnb>li>ul');
    
      const headerMin = $('.inner_header').height();
    
      const headerMax = headerMin + ul.innerHeight();
    
      let state = false;
    
    ​
    
      lnbLi.mouseenter(function() {
    
        if(!state) {
    
          $('.inner_header').stop().animate({
    
            height: headerMax
    
          }, 150, function(){
    
            ul.stop().fadeIn(150);
    
          })
    
          state = true;
    
        } //if_block
    
        $(this).find('ul').addClass('on');
    
    ​
    
      }) //lnbLi mouseenter_event

      lnbLi.mouseleave(function() {
        $(this).find('ul').removeClass('on');
      }) //lnbLi mouseleave_event
    
      $('.header').mouseleave(function(){

        ul.stop().fadeOut(150, function(){
            $('inner_header').stop().animate({
                height:headerMin
            }, 150)   
        })
      }) //header mouseleave_evvent​
      state = false;
    
    })