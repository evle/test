var keystone = require('keystone');
var middleware = require('./middleware');
var importRoutes = keystone.importer(__dirname);

// Common Middleware
keystone.pre('routes', middleware.initLocals);
keystone.pre('render', middleware.flashMessages);

// Import Route Controllers
var routes = {
	views: importRoutes('./views'),
};

// Setup Route Bindings
exports = module.exports = function (app) {
	// Views
	app.get('/', routes.views.index);
	app.get('/article/:category?', routes.views.blog);
	app.get('/article/post/:post', routes.views.post);
	app.get('/contact', routes.views.contact);
	app.get('/about', routes.views.about);
	app.get('/showcase/:category?', routes.views.showcase);
	app.get('/showcase/project/:project', routes.views.project);
	// app.get('/gallery', routes.views.gallery);
	// app.all('/contact', routes.views.contact);

};
