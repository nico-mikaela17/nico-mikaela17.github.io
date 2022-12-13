const apiURL="//api.openweathermap.org/data/2.5/forecast?id=5780026&appid=cd3fa3e9a0c5df13cfe03915eabe5399"

fetch (apiURL)
.then((response) => response.json())
.then((weatherInfo) =>{
    console.log(weatherInfo);

    document.getElementById('place').innerHTML=weatherInfo.city.name;


})