function getWeather() {
    const apiKey = '179076db6f5fe0fba32559993f4839a0';
    const cityInput = document.getElementById('city-input');
    const city = cityInput.value;

    if (city.trim() === '') {
        alert('Please enter a city name');
        return;
    }

    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            if (data.cod === '404') {
                alert('City not found');
            } else {
                displayWeather(data);
            }
        })
        .catch(error => console.error('Error fetching weather data:', error));
}

function displayWeather(data) {
    const weatherInfo = document.getElementById('weather-info');
    const cityName = data.name;
    const temperature = data.main.temp;
    const description = data.weather[0].description;

    weatherInfo.innerHTML = `
        <p>City: ${cityName}</p>
        <p>Temperature: ${temperature} &#8451;</p>
        <p>Description: ${description}</p>
    `;
}
