const API_KEY = 'ad5f6658a5bce615afc7063e4dadf5d0';

const fetchData = position => {
    const { latitude, longitude } = position.coords;

    fetch(`http://api.openweathermap.org/data/2.5/weather?units=metric&lat=${latitude}&lon=${longitude}&appid=${API_KEY}`)
        .then(response => response.json())
        .then(data => setWeatherData(data))


}

const setWeatherData = data => {
    console.log(data);
    const weatherData = {
        location: data.name,
        description: data.weather[0].main,
        humidity: data.main.humidity,
        pressure: data.main.pressure,
        temperature: data.main.temp,
        date: 'data',
    }

    Object.keys(weatherData).forEach(key => {
        document.getElementById(key).textContent = weatherData[key];


    });
}

const onLoad = () => {

    navigator.geolocation.getCurrentPosition(fetchData);
}
