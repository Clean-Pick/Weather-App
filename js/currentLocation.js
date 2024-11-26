const successCallback = (position) => {
    console.log(position);

    const lat = position.coords.latitude
    const lon = position.coords.longitude

    displayData(lat, lon)
};

const errorCallback = (error) => {
    console.log(error);
};

navigator.geolocation.getCurrentPosition(successCallback, errorCallback);

