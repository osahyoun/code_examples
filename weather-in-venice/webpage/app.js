function renderTemp(data) {
  var el = document.getElementById('temperature');
  el.innerHTML = data.temperature + " °C";
}

var endpoint = null;
// Set endpoint to the API endpoint created on API Gateway.
// If you need reminding, type `serverless info --function weatherInVenice` on
// the CLI, and you'll see it displayed under endpoints.

fetch(endpoint, {mode: 'cors'})
  .then(function(resp){
      return resp.json();
  })
  .then(renderTemp)
  .catch(function(err){ console.log(err);})
