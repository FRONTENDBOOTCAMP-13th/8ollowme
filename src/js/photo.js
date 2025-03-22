document.addEventListener('DOMContentLoaded', () => {
  // DOM 선택 부분
  const showDialogButton = document.querySelector('.show-dialog');
  const closeDialogButton = document.querySelector('.close-dialog');
  const dialog = document.querySelector('.panel-dialog');
  const fileInput = document.getElementById('fileInput');
  const preview = document.getElementById('preview');
  const fileStatus = document.getElementById('fileStatus');

  // 함수 구현 부분
  const showDialog = () => dialog.showModal();
  const closeDialog = () => dialog.close();

  // 사진 미리보기 함수
  const displayPreview = (files) => {
    preview.innerHTML = ''; // 기존 미리보기 내용 삭제
    if (files.length === 0) {
      fileStatus.textContent = '선택된 파일 없음'; // 파일이 없을 때
      return;
    }
    fileStatus.textContent = `${files.length}개의 파일 선택됨☺️`; // 파일이 있을 때
    for (const file of files) {
      const img = document.createElement('img');
      img.src = URL.createObjectURL(file);
      img.className = 'w-20 h-20 object-cover rounded'; // 스타일 추가
      preview.appendChild(img);
    }
  };

  // 사진 선택 시 미리보기
  fileInput.addEventListener('change', (event) => {
    const files = event.target.files;
    if (files.length > 20) {
      alert('최대 20장까지 선택할 수 있습니다.');
      fileInput.value = ''; // 입력값 초기화
      preview.innerHTML = ''; // 미리보기 초기화
      fileStatus.textContent = '선택된 파일 없음'; // 상태 초기화
      return;
    }
    displayPreview(files);
  });

  // 이벤트 바인딩 부분
  showDialogButton.addEventListener('click', showDialog);
  closeDialogButton.addEventListener('click', closeDialog);
});
