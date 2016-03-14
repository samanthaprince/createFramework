# SMRouter

A simple express-style middleware router developed for use with user defined routes.

## Instillation

```
$ npm install --save SMRouter
```

## Features

- Routing methods:
 - POST
 - PUT
 - PATCH
 - GET
 - DELETE


## Using SMRouter

var Router = require('SMRouter');

var newRouterInstance = new SMRouter ();

Define your route urls.

Example:
*define your particular _method_ and _url_*

```javascript
newRouterInstance.method('/url', (req,res) =>{
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write('Hello World');
  return res.end();
})
```
