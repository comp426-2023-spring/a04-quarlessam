import minimist from 'minimist'
import express from 'express'
import {rps} from './lib/rpsls.js'
import {rpsls} from './lib/rpsls.js'

const args = minimist(process.argv.slice(2))
const port = args.port || 5000

var app = express();

app.get('/app', function(req, res){
   res.send("200 OK");
});

app.listen(port);