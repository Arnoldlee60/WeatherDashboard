
  function search(){
    var inputedCity = document.getElementById("cityName").value;
    console.log("City is = " + inputedCity)
    
fetch('https://api.openweathermap.org/data/2.5/forecast?id=524901&appid=64d2e1dc27161dd62df3dc524d4db2bd', 
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
  });
  }
