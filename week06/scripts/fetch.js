function GetBookings() {
    let url = "https://api.sheety.co/08659f8d3caa9d98dd13a805222492d5/bookingApp/bookings";
    fetch(url)
        .then((response) => response.json())
        .then(json => {
            //Do something with the data
            console.log(json.bookings);
            let bookingList = document.getElementById("bookingList");
            bookingList.innerHTML = "";

            let jsonDiv = document.getElementById("json");
            jsonDiv.innerHTML = "";
            jsonDiv.innerHTML = json.bookings;

            for (let i = 0; i < json.bookings.length; i++) {
                let gName = json.bookings[i].name;
                let gEmail = json.bookings[i].email;
                let gPax = json.bookings[i].pax;
                let gId = json.bookings[i].id;

                bookingList.innerHTML += gId + "-" + gName + ", " +
                    gEmail + ", pax:" + gPax + "<br>";
            }
        });
}

let getBookingBtn = document.getElementById("getBooking");
getBookingBtn.addEventListener("click", function () {
    GetBookings();
});

function BookNow(guestName, guestEmail, guestPax) {
    let url = 'https://api.sheety.co/08659f8d3caa9d98dd13a805222492d5/bookingApp/bookings';
    let body = {
        booking: {
            name: guestName,
            email: guestEmail,
            pax: guestPax
        }
    }
    fetch(url, {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then((response) => response.json())
        .then(json => {
            // Do something with object
            //console.log(json.booking);
            let bookMsg = document.getElementById("bookMsg");
            bookMsg.innerHTML = json.booking.name + " added!"
            GetBookings();
        });
}

let bookNow = document.getElementById("bookNow");
bookNow.addEventListener("click", function () {
    let gName = document.getElementById("guestName").value;
    let gEmail = document.getElementById("guestEmail").value;
    let gPax = document.getElementById("guestPax").value;

    BookNow(gName, gEmail, gPax);
});