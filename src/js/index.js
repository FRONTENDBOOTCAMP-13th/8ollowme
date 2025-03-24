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
  y: '70vh',
  ease: 'none',
  scrollTrigger: {
    trigger: 'body',
    start: 'top top',
    end: 'bottom bottom',
    scrub: 1,
    markers: false,
  },
});

// 망곰이 통통 튀는 효과
gsap.to('.mangom-container', {
  y: '+=10',
  duration: 0.5,
  yoyo: true,
  repeat: -1,
  ease: 'power1.inOut',
});

// 말풍선 살짝 흔들리는 효과
gsap.to('.speech-bubble', {
  rotation: 5,
  duration: 1,
  yoyo: true,
  repeat: -1,
  ease: 'none',
});

// 스크롤 위치에 따라 말풍선 텍스트 변경
ScrollTrigger.create({
  trigger: 'body',
  start: 'top top',
  end: 'bottom bottom',
  onUpdate: (self) => {
    const progress = self.progress;
    const speechBubble = document.querySelector('.speech-bubble');

    if (progress < 0.3) {
      speechBubble.textContent = '날 따라와라!';
    } else if (progress < 0.6) {
      speechBubble.textContent = '이렇게 내려가면 돼!';
    } else {
      speechBubble.textContent = '거의 다 왔어!';
    }
  },
});
