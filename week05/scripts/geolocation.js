let elLocate = document.getElementById("locate");
elLocate.addEventListener("click",function(){
    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            let elLat = document.getElementById("lat");
            let ellong = document.getElementById("long");

            elLat.innerHTML = "Latitude : " + position.coords.latitude;
            ellong.innerHTML = "Longitude : " + position.coords.longitude;

        });
    } else {
        alert("Geolocation is not supported by this browser.")
    }
});
