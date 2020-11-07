//this gathers the name of the restaurant from the URL and stores it in a variable
let restName = document.location.pathname.split('/').splice(-1)

console.log(restName)
//the variable is then used in a fetch that should gather information from the .json file attached to it
fetch(`/restaurantapi/${restName[0]}`)
    .then(res => res.json())
    //execute the fillEntry function, which will fill in info on individual HTML webpage
    .then(restObj => {

        fillEntry(restObj)
    })

//Coordinates for where our map opensy
let myMap = L.map('restMap').setView([40.681162, -73.96981], 16)

//Map layer image 
L.tileLayer('https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png', {
    maxZoom: 20,
    attribution: '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
}).addTo(myMap)

//this function fills the HTML page with info about the fetched restaurant
function fillEntry(restaurant) {
    console.log(restaurant)
    //set HTML elements to variables
    let restName = document.getElementById('name')
    let restLink = document.getElementById('link')
    let restAddress = document.getElementById('address')
    let restPhone = document.getElementById('phone')
    let restHours = document.getElementById('hours')
    let restNotes = document.getElementById('notes')
    //set json key values to variables
    let rName = restaurant.name
    let rLink = restaurant.link
    let rAddress = restaurant.address
    let rPhone = restaurant.phone
    let rHours = restaurant.hours
    let rNotes = restaurant.notes
    let restNameMarker = L.marker([restaurant.lat, restaurant.long]).addTo(myMap)
    //combine the two by inserting the json key values into the inner text of the HTML element variables.
    restName.innerHTML = rName
    restLink.innerHTML = rLink
    restAddress.innerHTML = rAddress
    restPhone.innerHTML = rPhone
    restHours.innerHTML = rHours
    restNotes.innerHTML = rNotes
    restNameMarker.bindPopup(restaurant)
}
