const express = require("express")
const {json} = require("express")
const connect = require('../config/database')
const router = require('../src/router/todoTaskRoutes')

connect().then(()=>{
    console.log("Connected to MongoDB")
}).catch((error)=>{
    console.log(error.message)
})

const app = express()

app.use(json())
app.use('/todotasks', router)

const port = process.env.PORT || 5000

app.listen(port, ()=>{
    console.log(`Server up and running at port ${port}`)
})