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
    res.sendFile(path.join(__dirname, '../styles.css'))
  })

const port = process.env.PORT || 4545
app.listen(port, () => console.log(` It works!${port}`))
