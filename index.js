const button = document.getElementById("search-button");
const input= document.getElementById("city-input");
async function getData(cityName){
    const promise = await fetch(`http://api.weatherapi.com/v1/current.json?key=a507436a08a14933a0e141612241303&q=${cityName}&aqi=yes`);
    return await promise.json()
}
const cityName= document.getElementById("cityName");
const cityTime = document.getElementById("cityTime");
const cityTemp= document.getElementById("cityTemp");

button.addEventListener('click', async() =>{
//console.log(input.value);
const value = input.value;
const result = await getData(value);
console.log(result);
cityName.innerText=`${result.location.name}, 
${result.location.region} - ${result.location.country}`;
cityTime.innerText = result.location.localtime;
cityTemp.innerText = result.current.temp_c;
});

//http://api.weatherapi.com/v1/current.json?key=a507436a08a14933a0e141612241303&q=London&aqi=yes