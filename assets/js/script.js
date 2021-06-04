var urlWeather = 'https://api.openweathermap.org/data/2.5/forecast?id=524901&appid=64d2e1dc27161dd62df3dc524d4db2bd'
//http://api.openweathermap.org/data/2.5/onecall/timemachine?lat=60.99&lon=30.9&dt=1586468027&appid={API key}
/*
fetch(urlWeather)
  .then(function (data) {
    console.log('Fetch Response \n-------------');
    console.log(data);
  });
  */

  fetch('https://api.openweathermap.org/data/2.5/forecast?id=524901&appid=64d2e1dc27161dd62df3dc524d4db2bd', {
  method: 'GET', //GET is the default.
  credentials: 'same-origin', // include, *same-origin, omit
  redirect: 'follow', // manual, *follow, error
})
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
    console.log(data.city.name);
  });
