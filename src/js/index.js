import AOS from 'aos';
import 'aos/dist/aos.css';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// AOS 초기화
AOS.init({
  duration: 1000,
  once: true,
});

// GSAP ScrollTrigger 등록
gsap.registerPlugin(ScrollTrigger);

// 아코디언 기능
document.querySelectorAll('.accordion-header').forEach((header) => {
  header.addEventListener('click', () => {
    const item = header.parentElement;
    const isActive = item.classList.contains('active');

    // 다른 모든 아코디언 아이템 닫기
    document.querySelectorAll('.accordion-item').forEach((accItem) => {
      accItem.classList.remove('active');
      const content = accItem.querySelector('.accordion-content');
      content.style.maxHeight = null;
    });

    // 클릭된 아이템 토글
    if (!isActive) {
      item.classList.add('active');
      const content = item.querySelector('.accordion-content');
      content.style.maxHeight = content.scrollHeight + 'px';
    }
  });
});

// 목업 애니메이션
gsap.utils.toArray('.mockup-left').forEach((mockup) => {
  gsap.from(mockup, {
    x: -100,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
      trigger: mockup,
      start: 'top 80%',
      end: 'top 30%',
      scrub: 1,
      toggleActions: 'play none none reverse',
    },
  });
});

gsap.utils.toArray('.mockup-right').forEach((mockup) => {
  gsap.from(mockup, {
    x: 100,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
      trigger: mockup,
      start: 'top 80%',
      end: 'top 30%',
      scrub: 1,
      toggleActions: 'play none none reverse',
    },
  });
});

// 텍스트 페이드인 애니메이션
gsap.utils.toArray('.feature-text').forEach((text) => {
  gsap.from(text, {
    y: 50,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
      trigger: text,
      start: 'top 80%',
      end: 'top 50%',
      scrub: 1,
      toggleActions: 'play none none reverse',
    },
  });
});

// 부드러운 스크롤
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
      });
    }
  });
});

// GSAP 애니메이션
gsap.registerPlugin(ScrollTrigger);

// 초기 상태 설정
gsap.set('.mangom-container', { opacity: 0, y: -50 });
gsap.set('.title-follow', { opacity: 0, y: -30 });

// 초기 등장 애니메이션
gsap.to('.mangom-container', {
  opacity: 1,
  y: 0,
  duration: 1,
  ease: 'power2.out',
});

gsap.to('.title-follow', {
  opacity: 1,
  y: 0,
  duration: 1,
  delay: 0.3,
  ease: 'power2.out',
});

// 스크롤 기반 망곰이 하강 애니메이션
gsap.to('.mangom-container', {
  y: 70,
  ease: 'none',
  scrollTrigger: {
    trigger: 'body',
    start: 'top top',
    end: 'bottom bottom',
    scrub: 1,
    markers: false,
  },
});

// // 망곰이 통통 튀는 효과
// gsap.to('.mangom-container', {
//   y: '+=10',
//   duration: 0.5,
//   yoyo: true,
//   repeat: -1,
//   ease: 'power1.inOut',
// });

// 말풍선 살짝 흔들리는 효과
gsap.to('.speech-bubble', {
  rotation: 5,
  duration: 1,
  yoyo: true,
  repeat: -1,
  ease: 'none',
});

// 스크롤 위치에 따라 망곰이 말풍선 텍스트 변경
gsap.registerPlugin(ScrollTrigger);
let shown = false;
ScrollTrigger.create({
  trigger: 'body',
  start: 'top top',
  end: 'bottom bottom',
  onUpdate: (self) => {
    const progress = self.progress;
    const speechBubble = document.querySelector('.speech-bubble');
    const link = document.getElementById('re8laceLink');

    if (progress < 0.3) {
      speechBubble.textContent = '나를 따라와!💛';
      shown = false;
      gsap.to(link, { opacity: 0, duration: 0.3, ease: 'power2.in' });
    } else if (progress < 0.6) {
      speechBubble.textContent = '잘 따라오고 있지?';
      shown = false;
      gsap.to(link, { opacity: 0, duration: 0.3, ease: 'power2.in' });
    } else if (progress < 0.9) {
      speechBubble.textContent = '거의 다 왔어!';
      shown = false;
      gsap.to(link, { opacity: 0, duration: 0.3, ease: 'power2.in' });
    } else {
      speechBubble.textContent = '이제 떠나볼까?✨';

      if (!shown) {
        shown = true;
        gsap.to(link, {
          opacity: 1,
          duration: 1,
          ease: 'power2.out',
        });
      }
    }
  },
});

gsap.to('.hero', {
  scale: 0.5,
  y: window.innerHeight * 0.25,
  borderRadius: '20px', // 점점 둥글어짐
  ease: 'power1.out',
  scrollTrigger: {
    trigger: '.video-section',
    scrub: 1,
    start: 'top top',
    end: 'bottom',
  },
});
// 프로젝트 소개 이미지 모달
document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('imageModal');
  const modalImage = document.getElementById('modalImage');

  window.openImageModal = function (src) {
    modalImage.src = src;
    modal.classList.remove('hidden');
  };

  window.closeImageModal = function () {
    modal.classList.add('hidden');
  };
});

// 타임라인 토글 스크립트
document.querySelectorAll('.timeline-toggle').forEach((button) => {
  button.addEventListener('click', () => {
    const step = button.getAttribute('data-toggle');
    const content = document.getElementById(`content-${step}`);
    const icon = document.getElementById(`icon-${step}`);

    const isOpen = !content.classList.contains('hidden');

    // 모두 닫기
    document.querySelectorAll("[id^='content-']").forEach((el) => el.classList.add('hidden'));
    document.querySelectorAll("[id^='icon-']").forEach((el) => el.classList.remove('rotate-180'));

    // 클릭한 것만 열기
    if (!isOpen) {
      content.classList.remove('hidden');
      icon.classList.add('rotate-180');
    }
  });
});
