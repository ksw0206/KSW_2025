const apiKey = '5a17fe9418ffceaaa059cb7e7ef3c000';

const getWeatherBtn = document.getElementById('getWeatherBtn');
const cityInput = document.getElementById('cityInput');
const weatherResult = document.getElementById('weatherResult');

// 버튼 클릭 시 날씨 조회
getWeatherBtn.addEventListener('click', () => {
  const city = cityInput.value.trim();
  if (city === '') {
    weatherResult.innerHTML = '도시명을 입력해주세요.';
    return;
  }
  fetchWeather(city);
});

// 날씨 API 호출
function fetchWeather(city) {
  const apiUrl =
    `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${apiKey}&units=metric&lang=kr`;

  fetch(apiUrl)
    .then(response => {
      if (!response.ok) {
        throw new Error('도시를 찾을 수 없습니다.');
      }
      return response.json();
    })
    .then(data => {
      displayWeather(data);
    })
    .catch(error => {
      weatherResult.innerHTML = error.message;
      // 에러일 땐 배경 초기화
      document.body.classList.remove('sunny', 'rainy', 'snowy', 'cloudy');
    });
}

// 날씨에 따라 body 클래스 변경
function updateBackgroundByWeather(weatherMain) {
  document.body.classList.remove('sunny', 'rainy', 'snowy', 'cloudy');

  if (weatherMain === 'Clear') {                // 맑음
    document.body.classList.add('sunny');
  } else if (weatherMain === 'Rain' || weatherMain === 'Drizzle') { // 비
    document.body.classList.add('rainy');
  } else if (weatherMain === 'Snow') {          // 눈
    document.body.classList.add('snowy');
  } else if (weatherMain === 'Clouds') {        // 구름 많음
    document.body.classList.add('cloudy');
  }
}

// 화면에 날씨 출력 + 배경 변경
function displayWeather(data) {
  const { name, main, weather, wind } = data;
  const weatherMain = weather[0].main; // Clear, Rain, Snow, Clouds ...

  // 배경 이미지 변경
  updateBackgroundByWeather(weatherMain);

  // 텍스트 출력
  weatherResult.innerHTML = `
    <h2>${name}의 현재 날씨</h2>
    <p>날씨: ${weather[0].description}</p>
    <p>온도: ${main.temp}°C</p>
    <p>습도: ${main.humidity}%</p>
    <p>풍속: ${wind.speed}m/s</p>
  `;
}