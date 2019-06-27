$(document).ready(function () {

    // Ok, time to get to work. First, an array to handle the various gif types.

    var foodArr = ["pizza", "tacos", "sandwiches", "french fries"];

    // Now for some ajax to get what's searched for.

    $("#textSubmit").click(function() {

    event.preventDefault();

    var newFood = $("#userText").val().trim();

    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + newFood + "&api_key=DC8YIroqbf5FsbFtJTgs9R4xDLW7Vz48&limit=10";
    
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function(response) {

            console.log(newFood);

            console.log(response);

            var results = response.data;

            for (var i = 0; i < results.length; i++) {

                console.log(response.data[i]);

                var gifDiv = $("<div>");

                var rating = results[i].rating;

                var p = $("<p>").text("Rating: " + rating); 

                var gifImg = $("<img>");

                gifImg.attr("src", results[i].images.fixed_height.url);

                gifDiv.prepend(p);
                
                gifDiv.prepend(gifImg);

                $("#gifsHere").append(gifDiv);

            };

        });
    
    });

});