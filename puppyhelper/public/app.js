console.log("test");
var petAge;

$("#add-button").on("click", function(event) {

    event.preventDefault();
    console.log("test");
    // Here we grab the form elements
    var newPet = {
        name: $("#p-name").val().trim(),
        age: $("#p-age").val().trim(),
        picture: $("#p-image").val().trim()
    };

    console.log(newPet);

    $.post("/api/puppy", newPet,
        function(data) {
            if (data) {
   
            }

        });

});
$.ajax({

        url: "/api/puppy",
        method: "GET"
    })
    .done(function(response) {
        var petNameArr = [];
        for (var i = 0; i < response.length; i++) {
            petNameArr.push(response[i].name);
        }
        populateName(petNameArr);

        var petAgeArr = [];
        for (var i = 0; i < response.length; i++) {
            petAgeArr.push(response[i].age);
        }
        populateAge(petAgeArr);

        //console.log(response);
    });


function populateName(petNameArr) {
    console.log(petNameArr);
    $("#petName").append(petNameArr);

};

function populateAge(petAgeArr) {
    console.log(petAgeArr);
    $("#petAge").append(petAgeArr);
    petAge = petAgeArr[0];
    console.log(petAge);
    console.log(petAge);
    var timeNeeded;
    if (petAge <= 1) {
        timeNeeded = 3600
        console.log(timeNeeded);
    } else if (petAge <= 2) {
        timeNeeded = 7200
    } else if (petAge <= 4) {
        timeNeeded = 10800
    } else if (petAge <= 5) {
        timeNeeded = 21600
    } else if (petAge <= 6) {
        timeNeeded = 32400
    } else {
        timeNeeded = 43200
    };

    startTimer(timeNeeded);

}
var timeInSecs;
var ticker;

function startTimer(secs) {
    timeInSecs = parseInt(secs);
    ticker = setInterval("tick()", 1000);
};

function tick() {
    var secs = timeInSecs;
    if (secs > 0) {
        timeInSecs--;
    } else {
    	alert("Time to let your puppy out!!");
        clearInterval(ticker);
        startTimer(timeNeeded); // start again
    }

    var hours = Math.floor(secs / 3600);
    secs %= 3600;
    var mins = Math.floor(secs / 60);
    secs %= 60;
    var pretty = ((hours < 10) ? "0" : "") + hours + ":" + ((mins < 10) ? "0" : "") + mins + ":" + ((secs < 10) ? "0" : "") + secs;
    document.getElementById("pottytimer").innerHTML = pretty;
}
// var petAge = $("#petAge").val().trim();