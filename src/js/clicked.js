const typeBtn = document.getElementsByClassName('clickable-btn');
const Heart = document.getElementsByClassName('Heart');

for (let i = 0; i < typeBtn.length; i++) {
  typeBtn[i].addEventListener('click', function () {
    // 현재 버튼에 active 클래스 토글(추가/제거)
    this.classList.toggle('clicked');
  });
}

for (let i = 0; i < Heart.length; i++) {
  Heart[i].addEventListener('click', function () {
    const currentFill = this.getAttribute('fill');
    if (currentFill == '#171F31') {
      this.setAttribute('fill', '#ff0000');
    } else {
      this.setAttribute('fill', '#171F31');
    }
  });
}
