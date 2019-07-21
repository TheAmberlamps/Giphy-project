$(document).ready(function () {

    // Didn't end up using the array.

    var foodArr = ["pizza", "tacos", "sandwiches", "french fries"];

    $("button").on("click", function () {

        $("#gifsHere").empty();

        var oldFood = $(this).attr("foodID");

        var oldQuery = "https://api.giphy.com/v1/gifs/search?q=" + oldFood + "&api_key=DC8YIroqbf5FsbFtJTgs9R4xDLW7Vz48&limit=10";

        $.ajax({
            url: oldQuery,
            method: "GET"
        }).then(function (response) {
            
            console.log(oldFood);

            console.log(response);

            var results = response.data;

            for (var i = 0; i < results.length; i++) {

                var gifDiv = $("<div>");

                var p = $("<p>").text("Rating: " + results[i].rating);

                var gifImg = $("<img>");

                gifImg.attr("src", results[i].images.original_still.url).attr("data-still", results[i].images.original_still.url).attr("data-animate", results[i].images.original.url).attr("data-state", "still").attr("class", "gif");

                gifDiv.append(p);

                gifDiv.append(gifImg);

                $("#gifsHere").prepend(gifDiv);

                $(".gif").on("click", function () {

                    // $(this) just means "the element with class 'gif' that was clicked"
                    var state = $(this).attr("data-state");

                    console.log(state);

                    // $(this).attr("data-state") will either be "still" or "animate"
                    // IF it's still: we change it to animate
                    if (state === "still") {
                        $(this).attr("src", $(this).attr("data-animate"));
                        $(this).attr("data-state", "animate");

                        // OTHERWISE it's animate already, so we change it to still
                    } else {
                        $(this).attr("src", $(this).attr("data-still"));
                        $(this).attr("data-state", "still");
                    }


                });


            };

        });

    });

    $("#textSubmit").click(function () {

        event.preventDefault();

        var newFood = $("#userText").val().trim();

        var newButt = $("<button>" + newFood + "</button>");

        console.log(newButt);

        newButt.attr("foodID", newFood).attr("value", newFood);

        var buttDiv = $("#newButtons");

        buttDiv.append(newButt);

        // ---------------------------------------------

        $("#gifsHere").empty();

        var newQuery = "https://api.giphy.com/v1/gifs/search?q=" + newFood + "&api_key=DC8YIroqbf5FsbFtJTgs9R4xDLW7Vz48&limit=10";

        $.ajax({
            url: newQuery,
            method: "GET"
        }).then(function (response) {

            console.log(response);

            var results = response.data;

            for (var i = 0; i < results.length; i++) {

                // console.log(response.data[i]);

                var gifDiv = $("<div>");

                // var rating = results[i].rating;

                var p = $("<p>").text("Rating: " + results[i].rating);

                var gifImg = $("<img>");

                gifImg.attr("src", results[i].images.original_still.url).attr("data-still", results[i].images.original_still.url).attr("data-animate", results[i].images.original.url).attr("data-state", "still").attr("class", "gif");

                gifDiv.append(p);

                gifDiv.append(gifImg);

                $("#gifsHere").prepend(gifDiv);

                // -----------------------------------------------

                $(".gif").on("click", function () {

                    // $(this) just means "the element with class 'gif' that was clicked"
                    var state = $(this).attr("data-state");

                    console.log(state);

                    // $(this).attr("data-state") will either be "still" or "animate"
                    // IF it's still: we change it to animate
                    if (state === "still") {
                        $(this).attr("src", $(this).attr("data-animate"));
                        $(this).attr("data-state", "animate");

                        // OTHERWISE it's animate already, so we change it to still
                    } else {
                        $(this).attr("src", $(this).attr("data-still"));
                        $(this).attr("data-state", "still");
                    }

                });

            };

        });

    });

});