
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
    var today = new Date();
    var date = ' (' + (today.getMonth()+1) + '-' + today.getDate() + '-' + today.getFullYear() + ')';
    var x = document.createElement("HEADER");
    x.setAttribute("id", "myHeader");
    document.body.appendChild(x);
    var y = document.createElement("H3"); 
    var t = document.createTextNode(data.name + date);
    y.appendChild(t);
    document.getElementById("textarea").appendChild(y);
  });
  }


