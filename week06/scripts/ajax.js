function getRandomUser() {
    let xhttp = new XMLHttpRequest(); //create request obj

    xhttp.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200) {
            let data = JSON.parse(this.response);
            let elFirstName = document.getElementById("firstName");
            let elLastName = document.getElementById("lastName");
            let elJsonResult = document.getElementById("jsonResult");
            let elUserImage = document.getElementById("userImage");
            let elPhone = document.getElementById("phone");
            let elAddress = document.getElementById("address");
            let elEmail = document.getElementById("email");

            //test

            elFirstName.innerHTML = data.results[0].name.first;
            elUserImage.src = data.results[0].picture.large;
            elUserImage.title = data.results[0].name.first + " " + data.result[0].name.elLastName

            elJsonResult.innerHTML = this.response;
        }
    }

    xhttp.open("GET", "https://randomuser.me/api", true);
    xhttp.send();
}

let elGetRandomUser = document.getElementById("getRandomUserBtn")
elGetRandomUser.addEventListener("click", function () {
    getRandomUser();
});