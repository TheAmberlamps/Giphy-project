$(document).ready(function () {

    // Ok, time to get to work. First, an array to handle the various gif types.

    var foodArr = [pizza, tacos];

    // Now for some ajax to get what's searched for.

    $("#textSubmit").click(function() {

    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + foodChoice + "&api_key=DC8YIroqbf5FsbFtJTgs9R4xDLW7Vz48&limit=10";
    
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function(response) {

            console.log(response);
            
        });
    
    });

});