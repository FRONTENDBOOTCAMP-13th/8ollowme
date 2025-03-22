import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const NAVER_CLIENT_ID = import.meta.env.VITE_NAVER_MAP_CLIENT_ID;
const map = document.getElementById('map');

document.addEventListener('DOMContentLoaded', () => {
  const bottomSheet = document.getElementById('bottomSheet');
  const dragHandle = document.getElementById('dragHandle');

  dragHandle.addEventListener('click', () => {
    bottomSheet.classList.toggle('h-[10vh]');
    bottomSheet.classList.toggle('h-[50vh]');
  });
});

if (map) {
  const script = document.createElement('script');
  script.src = `https://oapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${NAVER_CLIENT_ID}`;
  script.async = true;
  document.head.appendChild(script);

  script.onload = function () {
    initMap();
  };
}
function initMap() {
  const latitude = 37.5709958592808;
  const longitude = 126.978914477333;

  const map = new naver.maps.Map('map', {
    center: new naver.maps.LatLng(latitude, longitude),
    zoom: 15,
  });

  const locations = [
    { lat: 37.5709958592808, lng: 126.978914477333 }, // 위치 1
    { lat: 37.5698677620456, lng: 126.977657083792 }, // 위치 2
    { lat: 37.5716468397392, lng: 126.983516239836 }, // 위치 2
  ];

  locations.forEach((location) => {
    new naver.maps.Marker({
      position: new naver.maps.LatLng(location.lat, location.lng),
      map: map,
      icon: {
        url: '/images/map-pin.png',
        size: new naver.maps.Size(42, 48),
        origin: new naver.maps.Point(0, 0),
        anchor: new naver.maps.Point(21, 48), // 마커의 하단 중앙을 기준점으로 설정
      },
    });
  });

  const backButton = document.getElementById('back-button');
  if (backButton) {
    backButton.addEventListener('click', function () {
      map.setCenter(new naver.maps.LatLng(latitude, longitude));
      map.setZoom(15);
    });
  }

  const zoomInButton = document.getElementById('zoom-in-button');
  if (zoomInButton) {
    zoomInButton.addEventListener('click', function () {
      map.setZoom(map.getZoom() + 1);
    });
  }

  const zoomOutButton = document.getElementById('zoom-out-button');
  if (zoomOutButton) {
    zoomOutButton.addEventListener('click', function () {
      map.setZoom(map.getZoom() - 1);
    });
  }
  const locationButton = document.getElementById('location-button');
  if (locationButton) {
    locationButton.addEventListener('click', function () {
      const currentType = map.getMapTypeId();
      map.setMapTypeId(currentType === naver.maps.MapTypeId.TERRAIN ? naver.maps.MapTypeId.NORMAL : naver.maps.MapTypeId.TERRAIN);
    });
  }
}

document.querySelectorAll('.swiper').forEach((swiperEl) => {
  const prevButton = swiperEl.querySelector('.custom-prev');
  const nextButton = swiperEl.querySelector('.custom-next');

  const swiper = new Swiper(swiperEl, {
    modules: [Navigation],
    navigation: {
      nextEl: nextButton,
      prevEl: prevButton,
    },
    spaceBetween: 10,

    on: {
      init: function () {
        updateNavButtons(this, prevButton, nextButton);
      },
      slideChange: function () {
        updateNavButtons(this, prevButton, nextButton);
      },
    },
  });

  function updateNavButtons(swiper, prevButton, nextButton) {
    prevButton.classList.toggle('!hidden', swiper.isBeginning);
    nextButton.classList.toggle('!hidden', swiper.isEnd);
  }
});
