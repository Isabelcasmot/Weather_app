const API_KEY = 'ad5f6658a5bce615afc7063e4dadf5d0';

const fetchData = position => {
    const { latitude, longitude } = position.coords;

    fetch(`http://api.openweathermap.org/data/2.5/weather?units=metric&lat=${latitude}&lon=${longitude}&appid=${API_KEY}`)
        .then(response => response.json())
        .then(data => setWeatherData(data))





}

const setWeatherData = data => {
    console.log(data);

}

const onLoad = () => {

    navigator.geolocation.getCurrentPosition(fetchData);
}