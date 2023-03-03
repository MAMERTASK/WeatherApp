var units = "metric";
var cityName = "";

function city_search() {

    storeInput();

    if (!cityName) {
        return;
    }
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=f80a9e50afaa2c36d775ad54e6cc5025&units=${units}`)
        .then(response => {
            return response.json();
        })
        .then(weatherData => {

            const weatherIcon = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
            const weatherDescription = weatherData.weather[0].description;
            const temperature = weatherData.main.temp;
            const weatherCode = weatherData.weather[0].id;

            if (weatherCode >= 200 && weatherCode < 600) {
                document.body.className = "rainy";
            } else if (weatherCode >= 600 && weatherCode < 700) {
                document.body.className = "snowy";
            } else if (weatherCode == 800 || weatherCode == 801) {
                document.body.className = "sunny";
            } else {
                document.body.className = "cloudy";
            }

            if (units == 'metric') {
                document.getElementById("temperature").innerHTML = `${temperature.toFixed(1)} &deg;C`;
            } else {
                document.getElementById("temperature").innerHTML = `${temperature.toFixed(1)} &deg;F`;
            }

            document.getElementById("city").innerHTML = cityName.charAt(0).toUpperCase() + cityName.slice(1);
            document.getElementById("icon").innerHTML = `<img src="${weatherIcon}">`;
            document.getElementById("description").innerHTML = weatherDescription;
        })
        .catch(error => console.log(error))
}

document.getElementById("search-button").addEventListener('click', () => {

    document.getElementById("temperature").innerHTML = "";
    document.getElementById("city").innerHTML = "";
    document.getElementById("icon").innerHTML = "";
    document.getElementById("description").innerHTML = "";

    city_search();
});