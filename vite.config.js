import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [tailwindcss()],
  build: {
    rollupOptions: {
      input: {
        index: "index.html", // 기본 index.html
        common: "src/components/common/common.html",
        event: "src/components/event/event.html",
        feed: "src/components/feed/feed.html",
        login: "src/components/login/login.html",
        reserve: "src/components/reserve/reserve.html",
        review: "src/components/review/review.html",
        visit: "src/components/visit/visit.html",
      },
    },
  },
  appType: "mpa", // fallback 사용안함
  server: {
    // open: 'src/pages/main/index.html', // 서버 시작 시 브라우저에서 지정페이지 자동으로 열기
  },
});
