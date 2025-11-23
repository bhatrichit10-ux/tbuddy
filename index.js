require('dotenv').config()

const express = require('express')
const app = express()




// Host Unit
app.use(express.static('public'))
app.listen(8080, (err) => {
    if(err) {console.error(err)} else console.log("We are live at http://localhost:8080")
})