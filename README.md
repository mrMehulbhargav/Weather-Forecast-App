
# Weather Forecast App

A weather application that provides current weather details and a 7-day forecast for any city worldwide. The app fetches real-time weather data using the WeatherAPI and displays it in a user-friendly interface, along with dynamic icons based on the weather conditions.

## Features

- **Current Weather Information**: Get up-to-date information on temperature, humidity, and wind speed.
- **7-Day Forecast**: View the upcoming weather for the week, including highs, lows, and condition-specific icons.
- **Responsive Design**: Optimized for both desktop and mobile use.
- **Easy-to-Use Interface**: A simple, clean, and intuitive layout for quick weather updates.

## Technologies Used

- **HTML**: Structure of the web app.
- **CSS (Bootstrap)**: Styling, including a custom color scheme and Bootstrap components.
- **JavaScript**: Fetches and displays weather data.
- **WeatherAPI**: Provides the weather data for the app.
- **Icons**: Custom weather icons to represent different weather conditions.

## Setup Instructions

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-username/Weather-Forecast-App.git
   ```
2. **Navigate to the Project Folder**:
   ```bash
   cd Weather-Forecast-App
   ```
3. **Install Dependencies** (Optional):
   - If you plan to extend the app using Node.js or add additional packages, set up `npm` in your project.
   
4. **Get Your WeatherAPI Key**:
   - Sign up on [WeatherAPI](https://www.weatherapi.com/) and obtain an API key.
   - Replace `YOUR_API_KEY` in `Script.js` with your WeatherAPI key:
     ```javascript
     const API_KEY = "YOUR_API_KEY";
     ```
   
5. **Run the App**:
   - Simply open `index.html` in your browser to view the app locally.

## File Structure

- `index.html` - Main HTML file with the layout and structure.
- `style/style.css` - Custom CSS file for styling and layout adjustments.
- `js/Script.js` - JavaScript file that fetches weather data and handles UI updates.
- `images/` - Folder containing weather condition icons (e.g., sunny, rainy, stormy).

## Usage

- **Enter a City Name**: Type the name of any city in the input field and press "Search".
- **View Current Weather**: See the temperature, humidity, wind speed, and current weather icon.
- **Weekly Forecast**: Scroll down to see the 7-day forecast with custom icons and temperature ranges.

## Screenshots

### Main Interface
![Main Interface](images/screenshot.png) <!-- Replace this with an actual screenshot file if available -->

## Contact

Developed by Mehul Bhargav

- **Website**: [mehulbhargav.ca](https://mehulbhargav.ca)
- **LinkedIn**: [mrmehulbhargav](https://www.linkedin.com/in/mrmehulbhargav)
- **GitHub**: [mrMehulbhargav](https://github.com/mrMehulbhargav)
- **LeetCode**: [mrmehulbhargav](https://leetcode.com/u/mrmehulbhargav/)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Icons are provided by the `images` folder for different weather conditions.
- Weather data powered by [WeatherAPI](https://www.weatherapi.com/).

---

Thank you for using the Weather Forecast App! Feel free to contribute or suggest improvements by creating issues or pull requests.
