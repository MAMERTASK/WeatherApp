const pressEnter = document.querySelectorAll("#city-name");

function handlePress(event) {
    if (event.type == "keypress" && event.key == "Enter") {
        document.getElementById("temperature").innerHTML = "";
        document.getElementById("city").innerHTML = "";
        document.getElementById("icon").innerHTML = "";
        document.getElementById("description").innerHTML = "";

        citySearch();
    }
}

pressEnter.forEach(pressEnter => {
    pressEnter.addEventListener("keypress", handlePress)
});