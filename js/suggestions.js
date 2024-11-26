input.addEventListener("input", async () => {
    const query = input.value.trim()

    if (query.length > 0) {
        const cities = await fetchSuggestions(query)
        updateSuggestions(cities)
    } else {
        datalist.textContent = ""
    }
});

async function fetchSuggestions(query) {
    const apiKey = "c343c77ded86ff06ef049f41e5f28bf9"
    const url = `http://api.openweathermap.org/geo/1.0/direct?q=${query}s&limit=5&appid=${apiKey}`

    try {
        const res = await fetch(url)

        if (!res.ok) {
            throw new Error("Couldn't find suggestion")
        }

        const data = await res.json()
        return data
    } catch (err) {
        console.error("Error while trying to fetch data", err)
        return []
    }
}

function updateSuggestions(cities) {
    datalist.textContent = ""

    if (cities.length === 0) {
        const option = document.createElement("option")
        option.value = "No result found."
        datalist.appendChild(option)

    }

    cities.forEach((city) => {
        const option = document.createElement("option")

        option.value = `${city.name}, ${city.country}`
        datalist.appendChild(option)
    })
}

