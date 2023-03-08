const clickButton = document.querySelectorAll("#search-button");

function handleClick(event) {
    if (event.type == "click") {
        document.getElementById("temperature").innerHTML = "";
        document.getElementById("city").innerHTML = "";
        document.getElementById("icon").innerHTML = "";
        document.getElementById("description").innerHTML = "";

        citySearch();
    }
}

clickButton.forEach(clickButton => {
    clickButton.addEventListener("click", handleClick);
});