
  function search(){
    var inputedCity = document.getElementById("cityName").value;
    console.log("City is = " + inputedCity)
    var newUrl = 'https://api.openweathermap.org/data/2.5/weather?q=' + inputedCity + '&appid=64d2e1dc27161dd62df3dc524d4db2bd';
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
    weatherDetails(data)
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
function weatherDetails(data){
    var y = document.createElement("LI"); 
    var t = document.createTextNode(data.main.temp);
    y.appendChild(t);
    document.getElementById("textarea").appendChild(y);
}


