document
  .getElementById("get-weather-btn")
  .addEventListener("click", function () {
    let city = document.getElementById("city-input").value.trim();
    let apiKey = "bffc2a4e4587f6bae12795ea3fdb6c15"; // Use your actual API key here
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    // Show loading effect (you could add a loader here)
    document.getElementById("weather-info").classList.add("hidden");
    document.getElementById("error-message").classList.add("hidden");

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        if (data.cod === 200) {
          // Show weather info
          document.getElementById(
            "location"
          ).textContent = `${data.name}, ${data.sys.country}`;
          document.getElementById(
            "temperature"
          ).textContent = `${data.main.temp}°C`;
          document.getElementById("description").textContent =
            data.weather[0].description;
          document.getElementById("weather-info").classList.remove("hidden");
        } else {
          // Show error message if city is not found
          document.getElementById("error-message").classList.remove("hidden");
        }
      })
      .catch((error) => {
        console.error("Error fetching weather data:", error);
        document.getElementById("error-message").classList.remove("hidden");
      });
  });
