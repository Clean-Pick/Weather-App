const input = document.getElementById("weather__currentCity")
const button = document.getElementById("weather__submitButton")
const output = document.getElementById("test")
const datalist = document.getElementById("weather__cities")

button.addEventListener("click", getCity);
input.addEventListener("keypress", (k) => {
    if (k.key === "Enter") {
        getCity();
    }
})

function getCity() {
    const city = input.value.trim()

    if (city) {
        fetchCityInfo(city);
    } else {
        output.textContent = `Please specify a city.`
    }
}

function fetchCityInfo(city) {
    window.fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}s&limit=5&appid=c343c77ded86ff06ef049f41e5f28bf9`)
        .then(res => res.json())
        .then(
            resJson => {
                console.log(resJson)

                const lat = resJson[0].lat
                const lon = resJson[0].lon

                displayData(lat, lon)
            }
        )
}