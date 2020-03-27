
  $("#button").on("click", function(){
      event.preventDefault();
      
  })
 var APIKey = "166a433c57516f51dfab1f7edaed8413"; 
 var queryURL = "https://api.openweathermap.org/data/2.5/weather?" +
  "q=Tucson,Arizona&appid=" + APIKey;
  
$.ajax({
  url: queryURL,
  method: "GET"
})

  .then(function(response) {
    console.log(queryURL);
    console.log(response);


    $(".city").html("<h1>" + response.name + " Weather Details</h1>");
    $(".wind").text("Wind Speed: " + response.wind.speed);
    $(".humidity").text("Humidity: " + response.main.humidity);
    $(".icon").text("" + response.weather[0].icon);


    var tempF = (response.main.temp - 273.15) * 1.80 + 32;


    $(".temp").text("Temperature (K) " + response.main.temp);
    $(".tempF").text("Temperature (F) " + tempF.toFixed(2));


    console.log("Wind Speed: " + response.wind.speed);
    console.log("Humidity: " + response.main.humidity);
    console.log("Temperature (F): " + tempF);
    console.log(response.weather[0].icon)
  });
