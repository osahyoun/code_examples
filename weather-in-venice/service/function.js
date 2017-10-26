const fetch = require('node-fetch');

module.exports.getWeather = (event, context, callback) => {
  const endpoint = `http://api.openweathermap.org/data/2.5/weather?APPID=${process.env.APPID}&q=venice,it&units=metric`;
  // OpenWeatherMap API endpoint.

  fetch(endpoint)
    .then( res => res.json() )
    .then( body =>  {
      const response = {
        statusCode: 200,
        headers: {
          "Access-Control-Allow-Origin" : "*",
        },
        body: JSON.stringify({ temperature: body.main.temp })
      };

      callback(null, response);
    });
};
