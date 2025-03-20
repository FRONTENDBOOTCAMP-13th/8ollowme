import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [tailwindcss()],
  build: {
    rollupOptions: {
      input: {
        index: 'index.html', // 기본 index.html
        common: 'src/components/common/common.html',
        topbar: 'src/components/common/components/top-bar.html',
        placeselector: 'src/components/common/components/place-selector.html',
        typeselector: 'src/components/common/components/type-selector.html',
        bottombar: 'src/components/common/components/bottom-bar.html',
        card: 'src/components/common/components/card.html',
        profile: 'src/components/common/components/profile.html',
        event: 'src/components/event/event.html',
        feed: 'src/components/feed/feed.html',
        login: 'src/components/login/login.html',
        reserve: 'src/components/reserve/reserve.html',
        visit: 'src/components/visit/visit.html',
        visitpage: 'src/pages/visit.html',
        visitbakerypage: 'src/pages/visit-bakery.html',
        reviewguidelines: 'src/components/visit/review-w-guidelines.html',
        coupon: 'src/components/coupon/coupon.html',
        review: 'src/components/review/review.html',
        reviewChoice: 'src/pages/review/review-choice.html',
        themeEnroll: 'src/pages/review/theme-enroll.html',
        loginPage1: '/src/pages/login-page/login-page-1',
        loginPage2: '/src/pages/login-page/login-page-2',
        loginPage3: '/src/pages/login-page/login-page-3',
        follow1: '/src/pages/follow-page/follow-1',
        follow2: '/src/pages/follow-page/follow-2',
        follow3: '/src/pages/follow-page/follow-3',
        settingPage1: '/src/pages/setting-page/setting-1',
        settingPage2: '/src/pages/setting-page/setting-2',
        settingPage3: '/src/pages/setting-page/setting-3',
      },
    },
  },
  appType: 'mpa', // fallback 사용안함
  server: {
    // open: 'src/pages/main/index.html', // 서버 시작 시 브라우저에서 지정페이지 자동으로 열기
  },
});
