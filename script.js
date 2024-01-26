var next_id = document.getElementById("next");
var back_id = document.getElementById("balls");

var house_radio = document.getElementById("house_radio");
var apartment_radio = document.getElementById("apartment_radio");
var office_radio = document.getElementById("office_radio");

var apartment = document.getElementById("apartment");
var apartment2 = document.getElementById("apartment2");

var get_location = document.getElementById("geolocation")

var house = document.getElementById("house");
var office = document.getElementById("office");



function Next() {
    document.getElementById("questions").hidden=true;
}


function House() {
    if (house_radio.checked == true){
        house.style.display = "block";
        office.style.display = "none";
        
        apartment.style.display = "none";
        apartment2.style.display = "none";
    }
}



function Apartment() {
    if (apartment_radio.checked == true){
        house.style.display = "none";
        office.style.display = "none";
        
        apartment.style.display = "block";
        apartment2.style.display = "block";
    }
}

function Office() {
    if (office_radio.checked == true){
        house.style.display = "none";
        office.style.display = "block";

        apartment.style.display = "none";
        apartment2.style.display = "none";
    }
}


function abc() {
    navigator.geolocation.getCurrentPosition(function(position) {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        geolocation.innerHTML = "Continue"

        console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
    }, function(error) {
        switch (error.code) {
            case error.PERMISSION_DENIED:
                alert("Please turn on your location in order to proceed");
                geolocation.innerHTML = "Please turn on your location"
                break;
            case error.POSITION_UNAVAILABLE:
                alert("Location information is unavailable.");
                break;
            case error.TIMEOUT:
                alert("The request to get user location timed out.");
                break;
            case error.UNKNOWN_ERROR:
                alert("An unknown error occurred.");
                break;
        }
    });
}

