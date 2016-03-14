var http = require('http');
// var router = require(__dirname + '/lib/router')
var notesRouter = require(__dirname + '/routes/routes.js')

http.createServer(notesRouter.route()).listen(3000, () => console.log('server up on 3000'));
