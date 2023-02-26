var units = 'metric'; //user selection

function city_search() { //why have a function - rewrite
    var city_name = document.getElementById("city_name").value;

    if (!city_name || city_name.length === 0) {
        console.log('Please enter a city name');
    } else {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=f80a9e50afaa2c36d775ad54e6cc5025&units=${units}`)
            .then(response => {
                return response.json();
            }) //prettier .then(response => response.json())
            .then(temperature => {
                if (units == 'metric') {
                    document.getElementById("temperature").innerHTML += temperature.main.temp + ' ℃';
                    document.getElementById("city").innerHTML += city_name;
                } else {
                    document.getElementById("temperature").innerHTML = temperature.main.temp + ' ℉';
                }
            })
            .catch(error => console.log(error))
    }
}

//unnecessary complexity - remove
//document.getElementById("weather_window").style.visibility = "hidden";

document.getElementById("search").addEventListener('click', () => {
    city_search(); //what happens when search is clicked multiple times - fix
    //document.getElementById("main").style.visibility = "collapse";
    //document.getElementById("weather_window").style.visibility = "visible";
});

// const weatherIcon = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
// weatherIconElement.innerHTML = `<img src="${weatherIcon}" alt="${weatherDescription}">`;




















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