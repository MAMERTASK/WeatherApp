var metric = 'metric'; //userselect

function city_search() {
    let city_name = document.getElementById("city_name").value;

    if (!city_name || city_name.length === 0) {
        console.log('Please enter a city name');
    } else {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=f80a9e50afaa2c36d775ad54e6cc5025&units=${metric}`)
            .then(response => {
                return response.json();
                // return response.json(); // ??
            })
            // .then(json => temperature = json) ??
            .then(temperature => {
                console.log(temperature);
                console.log(temperature.main.temp);
            })
            .catch(error => console.log(error))
    }
}

document.getElementById("search").addEventListener('click', city_search);
document.getElementById("main").style.visibility = "hidden";



















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