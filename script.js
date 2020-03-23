var APIkey = "3cac1a7dde76b023ab18654db33900cb";
var queryURL= "https//api.openweathermap.org/data/2.5/forecast?q=" + "Tucson,Arizona&appid=" + APIkey;

$(function(){
    $("#navbar-search").click(function(){
        if($("#navbar-search").val == "Search our website") {
            $('#navbar-search').val ("");
        }
    })


$.ajax({
    url: queryURL,
    method: "GET"
  }) 
    .then(function (response) {
    console.log(queryURL);
      console.log(response);
      
      $(".date").text("Today: " + response.dt_txt);
      $(".city").html("<h1>" + response.name + " Today's Weather</h1>");
      $(".wind").text("Wind Speed: " + response.wind.speed);
      $(".temp").text("Temperature (K) " + response.main.temp);
      $(".uv").text("UV: " + response.main.humidity);
      $(".forcast").text("forecast: " + response);
      $(".conditions").text("Conditons: " + response.id)
      $(".icon").text("" + response.icon);; 
    });

    var tempF = (response.main.temp - 273.15) * 1.80 + 32;

    $(".temp").text("Temperature (K) " + response.main.temp);
    $(".tempF").text("Temperature (F) " + tempF.toFixed(2));

    console.log("Wind Speed: " + response.wind.speed);
        console.log("Humidity: " + response.main.humidity);
        console.log("Temperature (F): " + tempF);
     