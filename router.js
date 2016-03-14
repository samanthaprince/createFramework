'use strict';

var SMRouter = module.exports = function() {
  this.routes = {
  	'GET': {},
  	'POST': {},
    'PUT': {},
    'PATCH': {},
    'DELETE': {},
  };
};

SMRouter.prototype.get = function(route, cb)  {
  this.routes.GET[route] = cb
};

SMRouter.prototype.post = function(route, cb){
  this.routes.POST[route] = cb
};

SMRouter.prototype.put = function(route, cb) {
  this.routes.PUT[route] = cb
};

SMRouter.prototype.patch = function(route, cb) {
  this.routes.PATCH[route] = cb
};

SMRouter.prototype.delete = function(route, cb) {
  this.routes.DELETE[route] = cb
};

SMRouter.prototype.route = function() {
	return (req, res) => {
		var routeFunction = this.routes[req.method][req.url]
		routeFunction(req, res)
	};
};
