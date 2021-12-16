//building out server
const express = require('express')
const path = require('path')
const app = express()


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

app.get('/',function(req,res){
    res.sendFile(path.join(__dirname, '/public/index.html'))
})

app.get('/styles.css', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/styles.css'))
  })



  app.post('/api/Name', (req,res) =>{
    let {name} = req.body
    name = name.trim()

    students.push(name)

    rollbar.log('student added successfully', {author: "Diamond", type:"manual"})

    res.status(200).send(students)
})



const port = process.env.PORT || 4545
app.listen(port, () => console.log(` It works!${port}`))
app.use(rollbar.errorHandler())
