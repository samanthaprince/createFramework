'use strict';
var http = require('http');
var fs = require('fs');
var SMRouter = require(__dirname + '/../router.js');

var notesRouter = new SMRouter();

notesRouter.post('/notes', (req, res) => {
  console.log('hit notes route');
  res.writeHead(200, {'Content-Type': 'application/json'});
  req.on('data', (data) => {
    res.write(data);
    fs.writeFile(__dirname + '/../tempNotes/note.json', data)

  })
  req.on('end', () => {
  return res.end()
  })
})

notesRouter.get('/notes', (req,res) =>{
  console.log('hit notes route');
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write('Hello World');
  return res.end();
})



module.exports = notesRouter;
