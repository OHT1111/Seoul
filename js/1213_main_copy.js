  /* tob_btn */
  
  const topBtn = document.querySelector('.top_btn')

  topBtn.addEventListener('click', () => { //to(요소, 시간, {애니메이션})
  
    gsap.to(window, 0.5, {
  
      scrollTo: 0
  
    }) 
  
  })

  window.addEventListener('scroll', () => {
  
    if(window.scrollY > 200) {
  
      gsap.to(topBtn, 0.3, {
  
        opacity: 1
  
      })
  
    } else {
  
      gsap.to(topBtn, 0.3, {
  
        opacity: 0
  
      })
  
    }
  
  })

  /* img_box */
  
  const imgEls = document.querySelectorAll('.img_box div')

  imgEls.forEach((imgEl, index) => {
  
    gsap.to(imgEl, 1.5, {
  
      delay: index * 0.5,
  
      opacity: 1
  
    })
  
  })

  /* txt_box */
  
  const txtEls = document.querySelectorAll('.txt_box div')

  window.addEventListener('scroll', () => {
  
    if(window.scrollY > 300) {
  
      gsap.to(txtEls[0], 0.5, {
  
        opacity: 1
  
      })
  
      gsap.to(txtEls[1], 0.5, {
  
        delay: 0.5,
  
        opacity: 1
  
      })
  
      gsap.to(txtEls[2], 0.5, {
  
        delay: 1,
  
        opacity: 1
  
      })
  
    }
  
  })

/* notice_box */

const noticeEls = document.querySelectorAll('.notice_box')

noticeEls.forEach((noticeEl) => {

  new ScrollMagic.Scene({

    triggerElement: noticeEl,

    triggerHook: 0.5})

    .setClassToggle(noticeEl, 'show')

    .addTo(new ScrollMagic.Controller())

})