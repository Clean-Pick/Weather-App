const city = document.getElementById('city')
const temp = document.getElementById('temp')
const weather = document.getElementById('weather')

window.fetch(`http://api.openweathermap.org/data/2.5/forecast?lat=50.40&lon=4.47&cnt=10&appid=c343c77ded86ff06ef049f41e5f28bf9&units=metric`)
    .then(res => res.json())
    .then(
        resJson => {
            console.log(resJson)
            city.textContent = resJson.city.name
            temp.textContent = resJson.list[0].main.temp += " C°"
            weather.textContent = resJson.list[0].weather[0].description
        }
    )


