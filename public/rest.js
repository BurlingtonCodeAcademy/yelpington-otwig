//this gathers the name of the restaurant from the URL and stores it in a variable
let restName = document.location.pathname.split('/').splice(-1)

//the variable is then used in a fetch that should gather information from the .json file attached to it
fetch(`/restaurant/${restName}`)
    //when the info is gathered,
    .then((res) => res.json())
    //execute the fillEntry function, which will fill in info on individual HTML webpage
    .then(fillEntry)

//this function fills the HTML page with info about the fetched restaurant
function fillEntry(restaurant) {
    JSON.parse(restaurant)
    document.getElementById('name').textContent = restaurant.name
    document.getElementById('link').textContent = restaurant.link
    document.getElementById('address').textContent = restaurant.address
    document.getElementById('phone').textContent = restaurant.phone
    document.getElementById('hours').textContent = restaurant.hours
    document.getElementById('notes').textContent = restaurant.notes
}

//Coordinates for where our map opens
let myMap = L.map('mapid').setView([40.681162, -73.96981], 16)

//Map layer image
L.tileLayer('https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png', {
    maxZoom: 20,
    attribution: '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
}).addTo(myMap)

//get latitude and longitude from file and use to create map marker
let lat = document.getElementById('lat')
let long = document.getElementById('long')
let restNameMarker = L.marker([lat, long]).addTo(myMap)


//Map marker alert pop-up
restName.bindPopup('restName')
