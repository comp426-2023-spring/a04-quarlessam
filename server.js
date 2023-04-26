import minimist from 'minimist'
import express from 'express'
import {rps} from './lib/rpsls.js'
import {rpsls} from './lib/rpsls.js'

const args = minimist(process.argv.slice(2))
const port = args.port || 5000

var app = express()
app.use(express.json())

app.get('/app', function(req, res){
  res.send("200 OK")
})

app.get('/app/rps', function(req, res){
  res.send(rps())
})

app.get('/app/rpsls', function(req, res){
  res.send(rpsls())
})

app.get('/app/rps/play', function(req, res){
  res.send(rps(req.query.shot))
})

app.post('/app/rps/play', function(req, res){
  res.send(rps(req.body.shot))
})

app.get('/app/rps/play/:shot', function(req, res){
  res.send(rps(req.params.shot))
})


app.get('/app/rpsls/play', function(req, res){
  res.send(rpsls(req.query.shot))
})

app.post('/app/rpsls/play', function(req, res){
  res.send(rps(req.body.shot))
})

app.get('/app/rpsls/play/:shot', function(req, res){
  res.send(rpsls(req.params.shot))
})

app.get("*", (req, res) => {
  res.send("404 NOT FOUND")
})

app.listen(port);