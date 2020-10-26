//import
const { response } = require('express')
const express = require('express')
const fs = require('fs')
const app = express()

//variables
const path = require('path')

//middleware
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))

//handle:
//homepage load
app.get('/', (req, res) => {
    res.sendFile(path.resolve('./public/index.html'))
})

//display all restaurant entries as json objects
app.get('/restaurantapi', (req, res) => {
    res.sendFile(path.resolve('./api/restaurant-index.json'))
})

//display the restaurant entry that was called (in json format)
app.get('/restaurantapi/:id', (req, res) => {
    let id = req.params.id
    res.sendFile(path.resolve(`./api/${id}.json`))
})

//display the restaurant entry that was called in text
app.get('/restaurant/:restId', (req, res) => {
    let restId = req.params.restId
    res.sendFile(path.resolve(`./public/rest.html/`))
})


//set app to listen for port or default to localhost and report back which the app is running on
const server = app.listen(process.env.PORT || 8000, () => console.log('App is running on port: ', server.address().port))

// // helper functions
// function restFilePath(restId) {
//     return path.join(restDir, restId + '.json')
// }
