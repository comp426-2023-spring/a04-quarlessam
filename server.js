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
  if (req.query.shot != null){
    res.send(rps(req.query.shot))
  } else if (res.json(req.body).shot != null){
    res.send(rps(res.json(req.body).shot))
  } else {
    res.send(rps())
  }
})

app.get('/app/rpsls/play', function(req, res){
  if (req.query.shot != null){
    res.send(rpsls(req.query.shot))
  } else if (res.json(req.body).shot != null){
    res.send(rpsls(res.json(req.body).shot))
  } else {
    res.send(rpsls())
  }
})

app.get('/app/rpsls/play', function(req, res){
  res.send(rpsls(req.query.shot))
})


app.get("*", (req, res) => {
  res.send("404 NOT FOUND")
})

app.listen(port);