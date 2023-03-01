var units = 'metric';

function city_search() {
    var city_name = document.getElementById("city_name").value;

    if (!city_name) {
        console.log('Please enter a city name');
        return;
    }
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=f80a9e50afaa2c36d775ad54e6cc5025&units=${units}`)
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

            document.getElementById("city").innerHTML = city_name.charAt(0).toUpperCase() + city_name.slice(1);
            document.getElementById("icon").innerHTML = `<img src="${weatherIcon}">`;
            document.getElementById("description").innerHTML = weatherDescription;
        })
        .catch(error => console.log(error))
}

function updateUnits() {
    units = document.getElementById("units").value;
    city_search();
}

document.getElementById("search_btn").addEventListener('click', () => {
    //clear existing data
    document.getElementById("temperature").innerHTML = "";
    document.getElementById("city").innerHTML = "";
    document.getElementById("icon").innerHTML = "";
    document.getElementById("description").innerHTML = "";

    city_search();
});




















//------------------------------------------------------------------------------------------------
//`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=f80a9e50afaa2c36d775ad54e6cc5025&units=${metric}`
//`https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=f80a9e50afaa2c36d775ad54e6cc5025&units=${metric}`

//------------------------------------------------------------------------------------------------
//var units;
// var city_name = 'vilnius'; //userselect

// var request = new Request(, {
//     method: 'GET',
// headers: new Headers({ ??
//     xxxx: 'yyyy'
// })
// });

//------------------------------------------------------------------------------------------------
// button.addEventListener('click', () => {
//     calculator.appendNumber(button.innerText)
//     calculator.updateDisplay()
// })














// var request = new Request('https://api.openweathermap.org/data/2.5/weather?lat=46&lon=54&appid=f80a9e50afaa2c36d775ad54e6cc5025', {
//             method: 'GET',
//             headers: new Headers({
//                 'Content-Type': 'application/json'
//             })
//         });

// const options = {
//     method: 'GET',
//     headers: {
//         Accept: 'application/json'
//     }
// };

// fetch('https://api.tomorrow.io/v4/locations?apikey=hUty4xh88m7lZEnNPJxdVcfjOfJP9STt', options)
//     .then(response => response.json())
//     .then(response => console.log(response))
//     .catch(err => console.error(err));