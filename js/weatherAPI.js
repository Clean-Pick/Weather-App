const city = document.getElementById('city')
const temp = document.getElementById('temp')
const weatherIcon = document.getElementById('weatherIcon')
const weather = document.getElementById('weather')
const container = document.getElementById('weatherContainer')

function displayData(lat, lon) {
    window.fetch(`http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&cnt=10&appid=c343c77ded86ff06ef049f41e5f28bf9&units=metric`)
        .then(res => res.json())
        .then(
            resJson => {
                console.log(resJson)

                const currentWeather = resJson.list[0].weather[0].icon


                city.textContent = resJson.city.name

                temp.textContent = resJson.list[0].main.temp += " C°"

                weatherIcon.innerHTML = `<img src="icons/${resJson.list[0].weather[0].icon}.png"/>`;

                weather.textContent = resJson.list[0].weather[0].description

                backgroundMood(currentWeather)
            }
        )
}

function backgroundMood(currentWeather) {
    console.log(currentWeather)

    switch (currentWeather) {
        case "01d":
            document.body.style.backgroundImage = 'url("https://images.pexels.com/photos/754419/pexels-photo-754419.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")'
            break;

        case "01n":
            document.body.style.backgroundImage = 'url("https://images.pexels.com/photos/6555895/pexels-photo-6555895.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")'
            break;
        case "02d":
            document.body.style.backgroundImage = 'url("https://images.pexels.com/photos/17566743/pexels-photo-17566743/free-photo-of-eau-nuageux-ete-foret.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")'
            break;
        case "02n":
            document.body.style.backgroundImage = 'url("https://images.pexels.com/photos/17566743/pexels-photo-17566743/free-photo-of-eau-nuageux-ete-foret.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")'
            break
        case "03d":
            document.body.style.backgroundImage = 'url("https://images.pexels.com/photos/4100130/pexels-photo-4100130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")'
            break;
        case "03n":
            document.body.style.backgroundImage = 'url("https://images.pexels.com/photos/4100130/pexels-photo-4100130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")'
            break
        case "04d":
            document.body.style.backgroundImage = 'url("https://images.pexels.com/photos/391522/pexels-photo-391522.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")'
            break;
        case "04n":
            document.body.style.backgroundImage = 'url("https://images.pexels.com/photos/391522/pexels-photo-391522.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")'
            break;
        case "09d":
            document.body.style.backgroundImage = 'url("https://images.pexels.com/photos/1529360/pexels-photo-1529360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")'
            break;
        case "09n":
            document.body.style.backgroundImage = 'url("https://images.pexels.com/photos/1529360/pexels-photo-1529360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")'
            break
        case "10d":
            document.body.style.backgroundImage = 'url("https://images.pexels.com/photos/166360/pexels-photo-166360.jpeg")'
            break;
        case "10n":
            document.body.style.backgroundImage = 'url("https://images.pexels.com/photos/166360/pexels-photo-166360.jpeg")'
            break
        case "11d" || "11n":
            document.body.style.backgroundImage = 'url("https://images.pexels.com/photos/1102915/pexels-photo-1102915.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")'
            break;
        case "11n":
            document.body.style.backgroundImage = 'url("https://images.pexels.com/photos/1102915/pexels-photo-1102915.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")'
            break
        case "13d":
            document.body.style.backgroundImage = 'url("https://images.pexels.com/photos/858115/pexels-photo-858115.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")'
            break;
        case "13n":
            document.body.style.backgroundImage = 'url("https://images.pexels.com/photos/858115/pexels-photo-858115.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")'
            break
        case "50d" || "50n":
            document.body.style.backgroundImage = 'url("https://images.pexels.com/photos/1367192/pexels-photo-1367192.jpeg")'
            break;
        case "50n":
            document.body.style.backgroundImage = 'url("https://images.pexels.com/photos/1367192/pexels-photo-1367192.jpeg")'
            break
    }
}




