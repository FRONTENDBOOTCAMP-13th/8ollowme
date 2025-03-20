const NAVER_CLIENT_ID = import.meta.env.VITE_NAVER_MAP_CLIENT_ID;

const imageUpload = document.getElementById('imageUpload');
const parent = document.getElementById('parent');
const map = document.getElementById('map');
const titleInput = document.getElementById('title-input');
const titleLength = document.getElementById('title-lenght');
const contentInput = document.getElementById('content-input');
const contentLength = document.getElementById('content-lenght');

if (titleInput) {
  titleInput.addEventListener('input', () => {
    titleLength.textContent = titleInput.value.length;
  });
}

if (contentInput) {
  contentInput.addEventListener('input', () => {
    contentLength.textContent = contentInput.value.length;
  });
}
if (imageUpload) {
  imageUpload.addEventListener('change', (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      parent.style.backgroundImage = `url(${imageUrl})`;
    }
  });
}

if (map) {
  const script = document.createElement('script');
  script.src = `https://oapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${NAVER_CLIENT_ID}`;
  script.async = true;
  document.head.appendChild(script);

  script.onload = function () {
    initMap();
  };

  function initMap() {
    const latitude = 37.56203989999999;
    const longitude = 126.9231569;

    const map = new naver.maps.Map('map', {
      center: new naver.maps.LatLng(latitude, longitude),
      zoom: 15,
    });

    const marker = new naver.maps.Marker({
      position: new naver.maps.LatLng(latitude, longitude),
      map: map,
      icon: {
        url: '/images/hotmess-bubble.png',
        size: new naver.maps.Size(100, 32),
        origin: new naver.maps.Point(0, 0),
        anchor: new naver.maps.Point(10, 32),
      },
    });
    document.getElementById('back-button').addEventListener('click', function () {
      map.setCenter(new naver.maps.LatLng(latitude, longitude));
      map.setZoom(15);
    });

    document.getElementById('zoom-in-button').addEventListener('click', function () {
      map.setZoom(map.getZoom() + 1);
    });

    document.getElementById('zoom-out-button').addEventListener('click', function () {
      map.setZoom(map.getZoom() - 1);
    });

    document.getElementById('location-button').addEventListener('click', function () {
      const currentType = map.getMapTypeId();
      map.setMapTypeId(currentType === naver.maps.MapTypeId.SATELLITE ? naver.maps.MapTypeId.NORMAL : naver.maps.MapTypeId.SATELLITE);
    });
  }
}

document.addEventListener('DOMContentLoaded', function () {
  const checkbox = document.getElementById('music-toggle');
  const icon = document.getElementById('music-icon');
  const audio = document.getElementById('bg-music');

  if (checkbox) {
    checkbox.addEventListener('change', function () {
      if (checkbox.checked) {
        icon.src = '../../assets/icons/music-on.svg';
        audio.play();
      } else {
        icon.src = '../../assets/icons/music-off.svg';
        audio.pause();
        audio.currentTime = 0;
      }
    });
  }
});
