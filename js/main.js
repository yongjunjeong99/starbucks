// 오른쪽 뱃지 부분 하단으로 내려가면 사라지는 설정
// 뱃지 선언
const badgeEl = document.querySelector('header .badges');
// 페이지 상단으로 올라가는 버튼 선언
const toTopEl = document.querySelector('#to-top');

window.addEventListener('scroll', _.throttle(function(){
  console.log(window.scrollY);
  if(window.scrollY > 500){
    //배지 숨기기
    // gsap.to(요소, 지속시간, 옵션);
    gsap.to(badgeEl, 0.6, {
      opacity: 0,
      display: 'none'
    });
    //버튼 보이기!
    gsap.to(toTopEl, 0.2, {
      x: 0,
    });
  } else{
    //배지 보이기
    gsap.to(badgeEl, 0.6, {
      opacity: 1,
      display: 'block'
    });
    //버튼 숨기기!
    gsap.to(toTopEl, 0.2, {
      x: 100,
    });
  }
}, 300));
// .throttle(함수, 시간(milesecond 단위)) 

// 페이지 상단으로 이동하게 하는 버튼을 눌렀을 때 동작하는 JSC
toTopEl.addEventListener('click', function(){
  gsap.to(window, 0.7, {
    scrollTo: 0
  });
});


// 첫번째 섹션 점차 보이는 애니메이션 기능 설정
const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function (fadeEl, index){
  // gsap.to(요소, 지속시간, 옵션);
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * 0.7, //0.7 1.4 2.1 2.7 
    opacity: 1
  });
});


//공지사항 이벤트 안내 애니메이션 기능
// new Swiper(선택자, 옵션)
new Swiper('.notice-line .swiper-container', {
  direction: 'vertical', // 수직 슬라이드
  autoplay: true, // 자동 재생 여부
  loop: true // 반복 재생 여부
})
// 프로모션 자동 변경
new Swiper('.promotion .swiper-container', {
  // direction: 'horizontal', -> 기본값이라 생략 가능
  slidesPerView: 3, // 한번에 보여줄 슬라이드 개수
  spaceBetween: 10, // 슬라이드 사이 여백
  centeredSlides: true, // 1번 슬라이드가 가운데 보이기
  loop: true,
  autoplay: {
    delay: 3000
  },
  pagination: {
    el: '.promotion .swiper-pagination', //페이지 번호 요소 선택자
    clickable: true, //사용자의 페이지 번호 요소 제어 가능 여부
  },
  // 이전 다음 기호 클릭해서 넘어가기
  navigation: {
    prevEl: '.promotion .swiper-prev',
    nextEl: '.promotion .swiper-next'
  }
});

// 10번째 섹션 어워드 부분 슬라이드 변경 시작 Code
new Swiper('.awards .swiper-container', {
  autoplay: true,
  loop: true,
  spaceBetween: 30,
  slidesPerView: 5,
  navigation: {
    prevEl: '.awards .swiper-prev',
    nextEl: '.awards .swiper-next'
  }
});

//프로모션 토글 버튼 클릭시 프로모션 이벤트 생성 및 취소
const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false; //프로모션이 보이고 있다는 뜻
promotionToggleBtn.addEventListener('click', function (){
  isHidePromotion = !isHidePromotion //프로모션이 안 보인다는 뜻
  if(isHidePromotion){
    // 숨김 처리
    promotionEl.classList.add('hide');
  } else{
    // 보임 처리
    promotionEl.classList.remove('hide');
  }
})

// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}
// 유튜브 위에 있는 아이콘 설정
function floatingObject(selector, delay, size){
  // gsap.to(요소, 시간, 옵션);
  gsap.to(
    selector, //선택자 
    random(1.5, 2.5), //애니메이션 동작 시간
    { //옵션
    y: size,
    repeat: -1, //무한대 반복
    yoyo: true,
    ease: Power1.easeInOut,
    delay: random(0, delay)
  });
}
floatingObject('.floating1', 1, 15);
floatingObject('.floating2', 0.5, 15);
floatingObject('.floating3', 1.5, 20);


// ScrollMagic cdn 적용 JS code 시작
const spyEls = document.querySelectorAll('section.scroll-spy');
spyEls.forEach(function (spyEl) {
  new ScrollMagic
    .Scene({
      triggerElement: spyEl, //보여짐 여부를 감시할 요소를 지정
      triggerHook: 0.8 // viewport의 수치상 0.8위치에 hook를 지정하여 감시
    })
    .setClassToggle(spyEl, 'show')
    .addTo(new ScrollMagic.Controller());
  // Scene 메소드는 scrollmagic이라는 것을 통해서 특정한 요소를 감시하는 옵션을 지정하는 메소드
  // setClassToggle 메소드는 클래스를 지정하여 제어하는 역할
  // addTo 메소드는 자바스크립트 라이브러리에 필요한 컨트롤러
});