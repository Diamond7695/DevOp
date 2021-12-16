//building out server
const express = require('express')
const path = require('path')
const app = express()

app.use(express.json())

var Rollbar = require('rollbar')
var rollbar = new Rollbar({
  accessToken: '39d7dc3d5f19463c82545adb848ba74a',
  captureUncaught: true,
  captureUnhandledRejections: true,
})
app.get('/', (req,res)=>{
    res.sendFile(path.join(__dirname, '/public/index.html'))
    rollbar.info('html file serverd successfully.')
})

let students = []
const app = express()
app.use(express.json())



app.get('/', (req,res)=>{
    res.sendFile(path.join(__dirname, '/public/index.html'))
    rollbar.info('html file serverd successfully.')
})

app.post('/api/student', (req,res) =>{
    let {name} = req.body
    name = name.trim()

    students.push(name)

    rollbar.log('student added successfully', {author: "Diamond", type:"manual"})

    res.status(200).send(students)
})



const port = process.env.PORT || 4545
app.listen(port, () => console.log(` It works!${port}`))
app.use(rollbar.errorHandler())