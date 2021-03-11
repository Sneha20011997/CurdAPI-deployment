const express = require('express')
const mongoose = require('mongoose')
const url ='mongodb://localhost/ProgrammerDBex'

const app = express()

mongoose.connect(url, {useNewUrlParser:true}) 
const con = mongoose.connection 
 
con.on('open',()=> {
    console.log('connected...')
})

app.use(express.json())


const studentRouter = require('./routers/students')
app.use('/students',studentRouter)    

app.listen(9000, () => {
    console.log('server started')
})