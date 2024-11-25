const city = document.getElementById('city')
const temp = document.getElementById('temp')
const weatherIcon = document.getElementById('weatherIcon')
const weather = document.getElementById('weather')

function displayData(lat, lon) {
    window.fetch(`http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&cnt=10&appid=c343c77ded86ff06ef049f41e5f28bf9&units=metric`)
        .then(res => res.json())
        .then(
            resJson => {
                console.log(resJson)


                city.textContent = resJson.city.name

                temp.textContent = resJson.list[0].main.temp += " C°"

                weatherIcon.innerHTML = `<img src="icons/${resJson.list[0].weather[0].icon}.png"/>`;

                weather.textContent = resJson.list[0].weather[0].description
            }
        )
}



