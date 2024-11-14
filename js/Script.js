const API_KEY = "539c51cc8d3f4191a87192708241411"; // Replace with your API key from WeatherAPI

async function getWeatherByCity() {
    const city = document.getElementById("city-input").value.trim();
    if (city === "") {
        alert("Please enter a city name");
        return;
    }

    const url = `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${city}&days=7&aqi=no&alerts=no`;
    try {
        const response = await fetch(url);
        const data = await response.json();

        if (response.ok) {
            // Update current weather
            document.getElementById("city-name").innerText = `${data.location.name}, ${data.location.country}`;
            document.getElementById("temperature").innerText = `${data.current.temp_c}°C`;
            document.getElementById("humidity").innerText = `Humidity: ${data.current.humidity}%`;
            document.getElementById("wind-speed").innerText = `Wind: ${data.current.wind_kph} km/h`;
            document.getElementById("weather-icon").src = `images/${getWeatherIcon(data.current.condition.text)}`;

            // Update weekly forecast
            const weeklyForecast = document.getElementById("weekly-forecast");
            weeklyForecast.innerHTML = ""; // Clear previous data

            data.forecast.forecastday.forEach(day => {
                const forecastDiv = document.createElement("div");
                forecastDiv.className = "weekday-forecast";

                const dayName = new Date(day.date).toLocaleDateString("en-US", { weekday: 'short' });
                forecastDiv.innerHTML = `
                    <p>${dayName}</p>
                    <img src="images/${getWeatherIcon(day.day.condition.text)}" alt="${day.day.condition.text}" style="width: 40px;">
                    <p>${day.day.maxtemp_c}° / ${day.day.mintemp_c}°</p>
                `;
                weeklyForecast.appendChild(forecastDiv);
            });
        } else {
            alert("City not found. Please enter a valid city name.");
        }
    } catch (error) {
        console.error("Error fetching weather data:", error);
        alert("Error fetching data. Please try again later.");
    }
}

// Helper function to map weather descriptions to images
function getWeatherIcon(condition) {
    if (condition.includes("cloud")) return "cloudy.png";
    if (condition.includes("rain")) return "rain.png";
    if (condition.includes("snow")) return "snow.png";
    if (condition.includes("storm")) return "storm.png";
    if (condition.includes("stratus")) return "stratuscumulus.png";
    if (condition.includes("sun") || condition.includes("clear")) return "sun.png";
    return "sun.png"; // Default icon
}
