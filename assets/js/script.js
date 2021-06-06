
  function search(){
    var inputedCity = document.getElementById("cityName").value;
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

    future1t(data);
    future1ws(data);
    future1h(data);
  });
  }

function placeAndDate(data){
    var today = new Date();
    var date = ' (' + (today.getMonth()+1) + '-' + today.getDate() + '-' + today.getFullYear() + ')';
    var y = document.createElement("H2"); 
    //var iconCode1 = data.weather[0].icon;
    //var iconCode2 = "http://openweathermap.org/img/w/" + iconCode1 + ".png";
    
    var t = document.createTextNode(data.name + date);
    y.appendChild(t);
    document.getElementById("textarea").appendChild(y);
}
function placeAndDatef1(data){
  var today = new Date();
  var date = ' (' + (today.getMonth()+1) + '-' + (today.getDate() + 1) + '-' + today.getFullYear() + ')';
  var y = document.createElement("H5"); 
  var t = document.createTextNode(data.name + date);
  y.appendChild(t);
  document.getElementById("futureWeather1").appendChild(y);
}
function placeAndDatef2(data){
  var today = new Date();
  var date = ' (' + (today.getMonth()+1) + '-' + (today.getDate() + 2) + '-' + today.getFullYear() + ')';
  var y = document.createElement("H5"); 
  var t = document.createTextNode(data.name + date);
  y.appendChild(t);
  document.getElementById("futureWeather2").appendChild(y);
}
function placeAndDatef3(data){
  var today = new Date();
  var date = ' (' + (today.getMonth()+1) + '-' + (today.getDate() + 3) + '-' + today.getFullYear() + ')';
  var y = document.createElement("H5"); 
  var t = document.createTextNode(data.name + date);
  y.appendChild(t);
  document.getElementById("futureWeather3").appendChild(y);
}
function placeAndDatef4(data){
  var today = new Date();
  var date = ' (' + (today.getMonth()+1) + '-' + (today.getDate() + 4) + '-' + today.getFullYear() + ')';
  var y = document.createElement("H5"); 
  var t = document.createTextNode(data.name + date);
  y.appendChild(t);
  document.getElementById("futureWeather4").appendChild(y);
}
function placeAndDatef5(data){
  var today = new Date();
  var date = ' (' + (today.getMonth()+1) + '-' + (today.getDate() + 5) + '-' + today.getFullYear() + ')';
  var y = document.createElement("H5"); 
  var t = document.createTextNode(data.name + date);
  y.appendChild(t);
  document.getElementById("futureWeather5").appendChild(y);
}
function tempDetails(data){
    var y = document.createElement("LI"); 
    var t = document.createTextNode("Temperature: " + data.main.temp + "°F");
    y.appendChild(t);
    document.getElementById("textarea").appendChild(y);
}
function windDetails(data){
  var y = document.createElement("LI"); 
  var t = document.createTextNode("Wind Speed: " + data.wind.speed + "MPH");
  y.appendChild(t);
  document.getElementById("textarea").appendChild(y);
}
function humidityDetails(data){
  var y = document.createElement("LI"); 
  var t = document.createTextNode("Humidity: " + data.main.humidity + "%");
  y.appendChild(t);
  document.getElementById("textarea").appendChild(y);
}

function future1t(data){
  var y = document.createElement("LI"); 
  var t = document.createTextNode("Temperature: " + data.main.temp + "°F");
  y.appendChild(t);
  document.getElementById("futureWeather1").appendChild(y);
}
function future1ws(data){
  var y = document.createElement("LI"); 
  var t = document.createTextNode("Wind Speed: " + data.wind.speed + "MPH");
  y.appendChild(t);
  document.getElementById("futureWeather1").appendChild(y);
}
function future1h(data){
  var y = document.createElement("LI"); 
  var t = document.createTextNode("Humidity: " + data.main.humidity + "%");
  y.appendChild(t);
  document.getElementById("futureWeather1").appendChild(y);
}



