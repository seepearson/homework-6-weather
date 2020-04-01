$(document).ready(function () {


    $("#button").on("click", function () {
        event.preventDefault();
        var city = $("#input").val();

        $("#button").keyup(function (event) {
            if (event.keyCode === 13) {
                $("#next-button").click();
            }
        })


        var APIKey = "f455a5e23f6bba7a4ce38c3680661c06";
        var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=" + APIKey;


        $.ajax({
            url: queryURL,
            method: "GET"
        })

            .then(function (response) {
                console.log(queryURL);
                console.log(response);

                var city = response.city.name
                var windspeed = response.list[0].wind.speed
                var humidity = response.list[0].main.humidity
                // var icon
                var date = response.list[0].dt_txt
                // var color
                var temperature = response.list[0].main.temp
                var tempF = (temperature - 273.15) * 1.80 + 32;


                $(".city").html("<h1>" + city + " Weather Details</h1>");
                $(".wind").text("Wind Speed: " + windspeed);
                $(".humidity").text("Humidity: " + humidity);
                // $(".icon").text("" + response.weather[0].icon);
                $(".date").text("Date:" + date);




                $(".temp").text("Temperature (K) " + temperature);
                $(".tempF").text("Temperature (F) " + tempF.toFixed(2));



            });
    })
})