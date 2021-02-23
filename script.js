let search = document.getElementById("box-1");

const main = {
    key: "67c4ec77266fe503c8e1182d567de890",
    base: "https://api.openweathermap.org/data/2.5/weather"

}

search.addEventListener("keypress", (event) => {

    if (event.keyCode == 13) {

        getResult(search.value);
        console.log(search.value);
    }

});

function getResult(city){
    fetch(`${main.base}?q=${city}&units=metric&appid=${main.key}&units-metric`)
    .then(weather => {
        return weather.json();
    }).then(displaycity);
}
function displaycity(weather){
    console.log(weather);

    let cityy= document.getElementById("city");
    cityy.innerHTML=`${weather.name} , ${weather.sys.country}`;
    let temppp=document.getElementById("tem");
    temppp.innerHTML=`<span><i class="fas fa-temperature-low"> Tempreture :</i></span> ${Math.trunc(weather.main.temp)}&deg;C`;
    if(temppp>20)   { 
    
    document.body.style.background =('sumer.jpg');
}
    let humm=document.getElementById("hum");
    humm.innerHTML=`<span><i class="fas fa-tint"> Humidity : </i></span> ${Math.round(weather.main.humidity)}%`;

    let wind=document.getElementById("wind");
    wind.innerHTML=`<span><i class="fas fa-wind"> Wind : </i></span> ${weather.wind.speed}km/hr`;

    let win=document.getElementById("min");
    win.innerHTML=` <span><i class="fab fa-airbnb"> Pressure : </i></span> ${weather.main.pressure} mb`;

    
}
