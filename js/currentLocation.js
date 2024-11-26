const successCallback = (position) => {
    console.log(position);

    const lat = GeolocationPosition.coords.latitude
    const lon = GeolocationPosition.coords.longitude

    displayData(lat, lon)
};

const errorCallback = (error) => {
    console.log(error);
};

navigator.geolocation.getCurrentPosition(successCallback, errorCallback);

