




const proxyurl = "https://cors-anywhere.herokuapp.com/";
const url = "https://maps.googleapis.com/maps/api/directions/json?origin=Temuco,CL&destination=Santiago,CL&mode=driving&units=metric&key=AIzaSyBhPh2ubjjOlfaTJ-IUXpNaKC3GGSgaVpQ"; // site that doesn’t send Access-Control-*
fetch(proxyurl + url) // https://cors-anywhere.herokuapp.com/https://example.com
    .then(response => response.json())
    .then(contents => console.log(contents))
    .catch(() => console.log("Can’t access " + url + " response. Blocked by browser?"))

