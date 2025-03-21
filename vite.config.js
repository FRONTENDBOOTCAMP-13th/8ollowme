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
        coupon: 'src/components/coupon/coupon.html',
        review: 'src/components/review/review.html',
        reviewChoice: 'src/pages/review/review-choice.html',
        themeEnroll: 'src/pages/review/theme-enroll.html',
        map: 'src/pages/map/map.html',
      },
    },
  },
  appType: 'mpa', // fallback 사용안함
  server: {
    // open: 'src/pages/main/index.html', // 서버 시작 시 브라우저에서 지정페이지 자동으로 열기
  },
});
