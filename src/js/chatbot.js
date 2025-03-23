import store, { sendMessages, resetMessages } from '../store/chatbot';

// DOM 요소 가져오기
const chatList = document.getElementById('chatList');
const chatInput = document.getElementById('chat-input');
const sendButton = document.getElementById('sendButton');

// 메시지 리스트 업데이트 함수
const renderMessages = () => {
  chatList.innerHTML = store.state.messages
    .map((msg) => {
      const isUser = msg.role === 'user';
      const iconSrc = '/images/follow-me.svg'; // 챗봇 메시지 아이콘

      return `
        <li class="py-2 px-4 rounded-xl relative ${isUser ? 'bg-gray-100 text-black self-end rounded-br-sm max-w-4/5' : 'bg-secondary-color rounded-tl-sm text-white self-start'}">
          ${
            !isUser
              ? `<div class="icon-box-34 overflow-hidden rounded-full absolute bottom-[calc(100%+4px)] -left-2.5">
                  <img src="${iconSrc}" alt="메시지 아이콘" class="icon" />
                </div>`
              : ''
          }
          ${msg.content}
        </li>
      `;
    })
    .join('');
};

// 메시지 전송 함수
const sendMessage = async () => {
  if (chatInput.value.trim() === '' || store.state.loading) return;

  store.state.chatText = chatInput.value;
  await sendMessages();
  chatInput.value = ''; // 입력 필드 초기화
  renderMessages(); // UI 업데이트
};

// 버튼 클릭 시 메시지 전송
sendButton.addEventListener('click', sendMessage);

// 엔터 키로 메시지 전송
chatInput.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    sendMessage();
  }
});

// 초기 렌더링
renderMessages();

const chatStarterEl = document.getElementById('chat-starter');
const chatContainer = document.getElementById('chat-container');
const chatIcon = document.getElementById('chat-icon');

chatStarterEl?.addEventListener('click', () => {
  const isOpen = chatContainer.classList.contains('opacity-100');
  event.stopPropagation();

  if (isOpen) {
    chatContainer.classList.remove('opacity-100', 'visible');
    chatContainer.classList.add('opacity-0', 'invisible');
    chatIcon.src = '/images/follow-me.svg'; // 원래 아이콘으로 변경
  } else {
    // 열기
    chatContainer.classList.remove('opacity-0', 'invisible');
    chatContainer.classList.add('opacity-100', 'visible');
    chatIcon.src = '/images/close.svg'; // 닫기 아이콘으로 변경
    setTimeout(() => {
      chatInput?.focus();
    }, 300); // 100ms 정도 지연
  }
});
