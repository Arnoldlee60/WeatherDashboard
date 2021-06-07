
     var inputedCity;
     var lat;
     var lon;
     var finalUrl;
 function search(){
    inputedCity = document.getElementById("cityName").value;
    console.log("City is = " + inputedCity)
    var newUrl = 'https://api.openweathermap.org/data/2.5/weather?q=' + inputedCity + '&appid=64d2e1dc27161dd62df3dc524d4db2bd&units=imperial';
    fetch(newUrl, 
    {
      method: 'GET', //GET is the default.
      credentials: 'same-origin', // include, *same-origin, omit
      redirect: 'follow', // manual, *follow, error
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        //console.log(data);
        //console.log(data.coord.lat);
        //console.log(data.coord.lon);
        lat = data.coord.lat;
        lon = data.coord.lon
        finalUrl = 'https://api.openweathermap.org/data/2.5/onecall?lat=' + lat + '&lon=' + lon + '&exclude=minutely&appid=64d2e1dc27161dd62df3dc524d4db2bd&units=imperial';
        console.log(finalUrl)
        weather(finalUrl)
      });
 }
function weather(finalUrl){
fetch(finalUrl, 
{
  method: 'GET', //GET is the default.
  credentials: 'same-origin', // include, *same-origin, omit
  redirect: 'follow', // manual, *follow, error
})
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
    
    placeAndDate(data);
    placeAndDatef1(data);
    placeAndDatef2(data);
    placeAndDatef3(data);
    placeAndDatef4(data);
    placeAndDatef5(data);
    
    tempDetails(data);
    windDetails(data);
    humidityDetails(data);
    UVDetails(data)

    future1t(data);
    future1ws(data);
    future1h(data);

    future2t(data);
    future2ws(data);
    future2h(data);

    future3t(data);
    future3ws(data);
    future3h(data);

    future4t(data);
    future4ws(data);
    future4h(data);

    future5t(data);
    future5ws(data);
    future5h(data);
  
  });
  }


function placeAndDate(data){
    var today = new Date();
    var date = ' (' + (today.getMonth()+1) + '-' + today.getDate() + '-' + today.getFullYear() + ')';
    var y = document.createElement("H2"); 
    //var iconCode1 = data.weather[0].icon;
    //var iconCode2 = "http://openweathermap.org/img/w/" + iconCode1 + ".png";
    
    var t = document.createTextNode(inputedCity + date);
    y.appendChild(t);
    document.getElementById("textarea").appendChild(y);

    var iconcode = data.current.weather[0].icon;
  var iconurl = document.createElement("img"); 
  iconurl.src = "http://openweathermap.org/img/w/" + iconcode + ".png";
  var src = document.getElementById("textarea"); 
  src.appendChild(iconurl);
}
function placeAndDatef1(data){
  var today = new Date();
  var date = ' (' + (today.getMonth()+1) + '-' + (today.getDate() + 1) + '-' + today.getFullYear() + ')';
  var y = document.createElement("H5"); 
  var t = document.createTextNode(inputedCity + date);
  y.appendChild(t);
  document.getElementById("futureWeather1").appendChild(y);

  var iconcode = data.daily[0].weather[0].icon;
  var iconurl = document.createElement("img"); 
  iconurl.src = "http://openweathermap.org/img/w/" + iconcode + ".png";
  var src = document.getElementById("futureWeather1"); 
  src.appendChild(iconurl);
}
function placeAndDatef2(data){
  var today = new Date();
  var date = ' (' + (today.getMonth()+1) + '-' + (today.getDate() + 2) + '-' + today.getFullYear() + ')';
  var y = document.createElement("H5"); 
  var t = document.createTextNode(inputedCity + date);
  y.appendChild(t);
  document.getElementById("futureWeather2").appendChild(y);

  var iconcode = data.daily[1].weather[0].icon;
  var iconurl = document.createElement("img"); 
  iconurl.src = "http://openweathermap.org/img/w/" + iconcode + ".png";
  var src = document.getElementById("futureWeather2"); 
  src.appendChild(iconurl);
}
function placeAndDatef3(data){
  var today = new Date();
  var date = ' (' + (today.getMonth()+1) + '-' + (today.getDate() + 3) + '-' + today.getFullYear() + ')';
  var y = document.createElement("H5"); 
  var t = document.createTextNode(inputedCity + date);
  y.appendChild(t);
  document.getElementById("futureWeather3").appendChild(y);

  var iconcode = data.daily[2].weather[0].icon;
  var iconurl = document.createElement("img"); 
  iconurl.src = "http://openweathermap.org/img/w/" + iconcode + ".png";
  var src = document.getElementById("futureWeather3"); 
  src.appendChild(iconurl);
}
function placeAndDatef4(data){
  var today = new Date();
  var date = ' (' + (today.getMonth()+1) + '-' + (today.getDate() + 4) + '-' + today.getFullYear() + ')';
  var y = document.createElement("H5"); 
  var t = document.createTextNode(inputedCity + date);
  y.appendChild(t);
  document.getElementById("futureWeather4").appendChild(y);

  var iconcode = data.daily[3].weather[0].icon;
  var iconurl = document.createElement("img"); 
  iconurl.src = "http://openweathermap.org/img/w/" + iconcode + ".png";
  var src = document.getElementById("futureWeather4"); 
  src.appendChild(iconurl);
}
function placeAndDatef5(data){
  var today = new Date();
  var date = ' (' + (today.getMonth()+1) + '-' + (today.getDate() + 5) + '-' + today.getFullYear() + ')';
  var y = document.createElement("H5"); 
  var t = document.createTextNode(inputedCity + date);
  y.appendChild(t);
  document.getElementById("futureWeather5").appendChild(y);

  var iconcode = data.daily[4].weather[0].icon;
  var iconurl = document.createElement("img"); 
  iconurl.src = "http://openweathermap.org/img/w/" + iconcode + ".png";
  var src = document.getElementById("futureWeather5"); 
  src.appendChild(iconurl);
}
//===================================================================================
function tempDetails(data){
    var y = document.createElement("LI"); 
    var t = document.createTextNode("Temperature: " + data.current.temp + "°F");
    y.appendChild(t);
    document.getElementById("textarea").appendChild(y);
}
function windDetails(data){
  var y = document.createElement("LI"); 
  var t = document.createTextNode("Wind Speed: " + data.current.wind_speed + "MPH");
  y.appendChild(t);
  document.getElementById("textarea").appendChild(y);
}
function humidityDetails(data){
  var y = document.createElement("LI"); 
  var t = document.createTextNode("Humidity: " + data.current.humidity + "%");
  y.appendChild(t);
  document.getElementById("textarea").appendChild(y);
}
function UVDetails(data){
  var y = document.createElement("LI"); 
  var t = document.createTextNode("UV Index: " + data.current.uvi + "%");
  y.appendChild(t);
  document.getElementById("textarea").appendChild(y);
}

//===================================================================================
function future1t(data){
  var y = document.createElement("LI"); 
  var t = document.createTextNode("Temperature: " + data.daily[0].temp.day + "°F");
  y.appendChild(t);
  document.getElementById("futureWeather1").appendChild(y);
}
function future1ws(data){
  var y = document.createElement("LI"); 
  var t = document.createTextNode("Wind Speed: " + data.daily[0].wind_speed + "MPH");
  y.appendChild(t);
  document.getElementById("futureWeather1").appendChild(y);
}
function future1h(data){
  var y = document.createElement("LI"); 
  var t = document.createTextNode("Humidity: " + data.daily[0].humidity + "%");
  y.appendChild(t);
  document.getElementById("futureWeather1").appendChild(y);
}

function future2t(data){
  var y = document.createElement("LI"); 
  var t = document.createTextNode("Temperature: " + data.daily[1].temp.day + "°F");
  y.appendChild(t);
  document.getElementById("futureWeather2").appendChild(y);
}
function future2ws(data){
  var y = document.createElement("LI"); 
  var t = document.createTextNode("Wind Speed: " + data.daily[1].wind_speed  + "MPH");
  y.appendChild(t);
  document.getElementById("futureWeather2").appendChild(y);
}
function future2h(data){
  var y = document.createElement("LI"); 
  var t = document.createTextNode("Humidity: " + data.daily[1].humidity + "%");
  y.appendChild(t);
  document.getElementById("futureWeather2").appendChild(y);
}

function future3t(data){
  var y = document.createElement("LI"); 
  var t = document.createTextNode("Temperature: " + data.daily[2].temp.day + "°F");
  y.appendChild(t);
  document.getElementById("futureWeather3").appendChild(y);
}
function future3ws(data){
  var y = document.createElement("LI"); 
  var t = document.createTextNode("Wind Speed: " + data.daily[2].wind_speed + "MPH");
  y.appendChild(t);
  document.getElementById("futureWeather3").appendChild(y);
}
function future3h(data){
  var y = document.createElement("LI"); 
  var t = document.createTextNode("Humidity: " + data.daily[2].humidity + "%");
  y.appendChild(t);
  document.getElementById("futureWeather3").appendChild(y);
}
function future4t(data){
  var y = document.createElement("LI"); 
  var t = document.createTextNode("Temperature: " + data.daily[3].temp.day + "°F");
  y.appendChild(t);
  document.getElementById("futureWeather4").appendChild(y);
}
function future4ws(data){
  var y = document.createElement("LI"); 
  var t = document.createTextNode("Wind Speed: " + data.daily[3].wind_speed + "MPH");
  y.appendChild(t);
  document.getElementById("futureWeather4").appendChild(y);
}
function future4h(data){
  var y = document.createElement("LI"); 
  var t = document.createTextNode("Humidity: " + data.daily[3].humidity + "%");
  y.appendChild(t);
  document.getElementById("futureWeather4").appendChild(y);
}
function future5t(data){
  var y = document.createElement("LI"); 
  var t = document.createTextNode("Temperature: " + data.daily[4].temp.day + "°F");
  y.appendChild(t);
  document.getElementById("futureWeather5").appendChild(y);
}
function future5ws(data){
  var y = document.createElement("LI"); 
  var t = document.createTextNode("Wind Speed: " + data.daily[4].wind_speed + "MPH");
  y.appendChild(t);
  document.getElementById("futureWeather5").appendChild(y);
}
function future5h(data){
  var y = document.createElement("LI"); 
  var t = document.createTextNode("Humidity: " + data.daily[4].humidity + "%");
  y.appendChild(t);
  document.getElementById("futureWeather5").appendChild(y);
}




