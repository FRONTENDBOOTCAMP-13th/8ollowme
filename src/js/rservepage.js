// DOM이 완전히 로드된 후 실행
document.addEventListener('DOMContentLoaded', function () {
  // 모든 탭 버튼 선택
  const tabButtons = document.querySelectorAll('.tab-button');

  // 모든 콘텐츠 영역
  const contentAreas = {
    all: document.getElementById('content-all'),
    beauty: document.getElementById('content-beauty'),
    hospital: document.getElementById('content-hospital'),
    ticket: document.getElementById('content-ticket'),
  };

  // 탭 버튼 클릭 이벤트 설정
  tabButtons.forEach((button) => {
    button.addEventListener('click', function () {
      const tabName = this.getAttribute('data-tab');

      // 모든 탭 버튼 비활성화 (스타일 변경)
      tabButtons.forEach((btn) => {
        btn.classList.remove('bg-primary-color', 'text-white');
        btn.classList.add('bg-gray-100', 'text-gray-800');
      });

      // 클릭한 버튼 활성화 (스타일 변경)
      this.classList.remove('bg-gray-100', 'text-gray-800');
      this.classList.add('bg-primary-color', 'text-white');

      // 모든 콘텐츠 영역 숨기기
      Object.values(contentAreas).forEach((area) => {
        area.classList.add('hidden');
      });

      // 해당 탭의 콘텐츠만 표시
      if (contentAreas[tabName]) {
        contentAreas[tabName].classList.remove('hidden');
      }
    });
  });

  // 필터링 기능 대신 각 탭에 직접 콘텐츠를 미리 준비해두는 방식 사용
});
