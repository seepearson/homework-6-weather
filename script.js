var APIkey = "3cac1a7dde76b023ab18654db33900cb";
var queryURL= "http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=" + APIkey;

$.ajax({
    url: queryURL,
    method: "GET"
  })
    .then(function (response) {
    
      console.log(response);
      
      $(".date").text("Today: " + response.dt_txt);
      $(".city").html("<h1>" + response.name + " Today's Weather</h1>");
      $(".wind").text("Wind Speed: " + response.wind.speed);
      $(".temp").text("Temperature (K) " + response.main.temp);
      // $(".uv").text("UV: " + response.main.humidity);
      // $(".forcast").text("forecast: " + response.);
      // $(".conditions").text("Conditons: " + response.id)
      // $(".icon").text("" + response.icon);; 
    });
   