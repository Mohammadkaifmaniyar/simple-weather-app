// Function to get weather data
async function getWeather(location = 'Bangalore') {
    const apiKey = 'YOUR_API_KEY_HERE'; // Replace with your actual API key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.cod === '404') {
            document.getElementById('weather-result').innerHTML = `<p>Location not found. Please try again.</p>`;
            return;
        }

        const weatherInfo = `
            <div class="weather-item">
                <p><strong>Temperature:</strong> ${data.main.temp}°C</p>
            </div>
            <div class="weather-item">
                <p><strong>Weather:</strong> ${data.weather[0].description}</p>
            </div>
            <div class="weather-item">
                <p><strong>Humidity:</strong> ${data.main.humidity}%</p>
            </div>
            <div class="weather-item">
                <p><strong>Wind Speed:</strong> ${data.wind.speed} m/s</p>
            </div>
        `;

        document.getElementById('weather-result').innerHTML = weatherInfo;
    } catch (error) {
        document.getElementById('weather-result').innerHTML = `<p>An error occurred. Please try again.</p><br>Have you updated the api key (refer readme.md)? `;
    }
}

// Fetch and display Bangalore weather by default on page load
window.onload = function() {
    getWeather();
};

// Add event listener for the button click
document.getElementById('search-button').addEventListener('click', function() {
    const location = document.getElementById('city-input').value;
    getWeather(location);
});
