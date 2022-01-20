// 헤더 부분 돋보기 및 통합검색 검색창 JS 코드
const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click', function (){
  searchInputEl.focus();
});

searchInputEl.addEventListener('focus', function (){
  searchEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder', '통합검색');
});

searchInputEl.addEventListener('blur', function (){
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder', '');
});



// 올해의 몇년도인지 계산해서 보여주는 코드
const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear(); // 올해의 숫자가 나오는 메소드
