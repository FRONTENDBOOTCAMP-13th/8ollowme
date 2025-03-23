const hiddenContent = document.querySelector('.invisible');
let lastScrollY = window.scrollY;

window.addEventListener('scroll', () => {
  if (window.scrollY > 100) {
    // 100px 이상 스크롤 시
    hiddenContent.classList.add('show');
  } else {
    hiddenContent.classList.remove('show');
  }

  // 스크롤 방향에 따라 숨김/표시 (선택 사항)
  if (window.scrollY < lastScrollY && window.scrollY > 100) {
    hiddenContent.classList.add('show');
  } else if (window.scrollY > lastScrollY || window.scrollY < 100) {
    hiddenContent.classList.remove('show');
  }

  lastScrollY = window.scrollY;
});
