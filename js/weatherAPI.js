const city = document.getElementById('city')
const temp = document.getElementById('temp')
const weatherIcon = document.getElementById('weatherIcon')
const weather = document.getElementById('weather')
const container = document.getElementById('weatherContainer')
const min = document.getElementById('minTemp')
const max = document.getElementById('maxTemp')
const todayDate = document.getElementById('weather__result__dateInfos')
const population = document.getElementById('popNumber')
const windSpeed = document.getElementById('windPower')
const humidity = document.getElementById('humidity')

const dayPlusOne = document.getElementById("day+1")
const dayPlusTwo = document.getElementById("day+2")
const dayPlusThree = document.getElementById("day+3")
const dayPlusFour = document.getElementById("day+4")
const dayPlusFive = document.getElementById("day+5")

function displayData(lat, lon) {
    window.fetch(`http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=c343c77ded86ff06ef049f41e5f28bf9&units=metric`)
        .then(res => res.json())
        .then(
            resJson => {
                console.log(resJson)

                let cleanPopNumber = resJson.city.population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")


                city.textContent = resJson.city.name

                todayDate.innerHTML = currentDate(0)

                population.textContent = cleanPopNumber += " residents"

                windSpeed.textContent = windPower(0)

                humidity.textContent = resJson.list[0].main.humidity += "%"

                temp.textContent = getTemp(0)

                roundedMin = Math.floor(resJson.list[0].main.temp_min)
                minTemp.textContent = roundedMin + "°"

                roundedMax = Math.floor(resJson.list[0].main.temp_max)
                maxTemp.textContent = roundedMax + "°"

                weatherIcon.innerHTML = getIcon(0)

                weather.textContent = resJson.list[0].weather[0].description


                let currentWeather = resJson.list[0].weather[0].icon
                backgroundMood(currentWeather)

                dayPlusOne.innerHTML = currentDate(8) + getTemp(8) + getIcon(8)

                dayPlusTwo.innerHTML = currentDate(16) + getTemp(16) + getIcon(16)

                dayPlusThree.innerHTML = currentDate(24) + getTemp(24) + getIcon(24)

                dayPlusFour.innerHTML = currentDate(32) + getTemp(32) + getIcon(32)

                dayPlusFive.innerHTML = currentDate(39) + getTemp(39) + getIcon(39)


                function getTemp(index) {
                    if (index !== 0) {
                        let temp = Math.floor(resJson.list[index].main.temp) + "C°"
                        return `<h3>${temp}</h3>`
                    } else {
                        let temp = Math.floor(resJson.list[index].main.temp) + "C°"
                        return `${temp}`
                    }
                }

                function getIcon(index) {
                    if (index === 0) {
                        return `<img src="icons/${resJson.list[index].weather[0].icon}.png"/>`
                    } else {
                        return `<div class="subIcon">
                        <img src="icons/${resJson.list[index].weather[0].icon}.png">
                        </div>`
                    }

                }

                function currentDate(index) {
                    let date = resJson.list[index].dt
                    let timezone = parseInt(resJson.city.timezone)

                    const weekdays = [
                        "Sunday",
                        "Monday",
                        "Tuesday",
                        "Wednesday",
                        "Thursday",
                        "Friday",
                        "Saturday"
                    ]
                    const allMonths = [
                        "January",
                        "February",
                        "March",
                        "April",
                        "May",
                        "June",
                        "July",
                        "August",
                        "September",
                        "October",
                        "November",
                        "December",
                    ]

                    const currentDate = new Date(date * 1000)

                    let dayIndex = currentDate.getDay()
                    let dayString = weekdays[dayIndex]
                    let dayDate = currentDate.getUTCDate()
                    let monthIndex = currentDate.getMonth()
                    let month = allMonths[monthIndex]
                    let year = currentDate.getFullYear()

                    if (index !== 0) {
                        return `<h4>${dayString}</h4>`
                    } else {
                        return `<h2 class="day">${dayString}</h2>
                <h4 class="computedDate">${dayDate + " " + month + " " + year}</h4>`
                    }

                }

                function windPower(index) {
                    let rawSpeed = resJson.list[index].wind.speed
                    let msToKmh = Math.floor(rawSpeed * 3.6)

                    return `${msToKmh} Km/h`
                }
            }
        )
}

function backgroundMood(currentWeather) {

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









