fetch('./api')
	.then(res => res.json())
	.then(restIndexArray => {
		restIndexArray.forEach((restaurant) => {
			let anchor = document.createElement(`a`)
			anchor.href = `./api/${restaurant}`
			let newRest = restaurant.split("-").map(toTitleCase).join(' ')
			let anchorInner = toTitleCase(newRest)
			anchor.innerHTML = anchorInner
			document.getElementById('mapNav').appendChild(anchor)
		})
	})

function toTitleCase(string) {
	return string.charAt(0).toUpperCase() + string.slice(1)
}

/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
//Coordinates for where our map opens
let myMap = L.map('mapid').setView([40.681162, -73.96981], 16)

//Map layer image
L.tileLayer('https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png', {
	maxZoom: 20,
	attribution: '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
}).addTo(myMap)

//Map marker
let amplehills = L.marker([40.678710, -73.968200]).addTo(myMap)
let bergenbagels = L.marker([40.681020, -73.974790]).addTo(myMap)
let bklynlarder = L.marker([40.680520, -73.975270]).addTo(myMap)
let look = L.marker([40.679900, -73.964450]).addTo(myMap)
let mrmelon = L.marker([40.682911, -73.964169]).addTo(myMap)
let zaytoons = L.marker([40.678688, -73.968474]).addTo(myMap)

//Map marker alert pop-up
amplehills.bindPopup('amplehill')
bergenbagels.bindPopup('bergenbagels')
bklynlarder.bindPopup('bklynlarder')
look.bindPopup('look')
mrmelon.bindPopup('mrmelon')
zaytoons.bindPopup('zaytoons')