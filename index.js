const express = require('express')
var memory = require('./data/memory.json')
var ideas = require('./data/ideas.json')
const IdeaTonttu = require('./lib/ideas')
let ideaTonttu = new IdeaTonttu(ideas)
const DataTonttu = require('./lib/accessdata')
let dataTonttu = new DataTonttu(memory)
const app = express()
app.get('/', function (req, res) {
  res.send('Hello World')
})
app.get('/getideas',function(req,res){
  res.send(ideaTonttu.getEverything())
})
app.get('/getmemory',function(req,res){
  res.send(ideaTonttu.getEverything())
})
app.listen(3000)