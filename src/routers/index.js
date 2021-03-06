const passportService = require('../services/passport');
const passport = require('passport');
const Authentication = require('../controllers/authentication');
const requireAuth = Authentication.passport('jwt');

module.exports = function(app) {  

	// Authentication API
	app.use('/auth', require('./security'));

	// Checks on secure path
	app.use('/api/secured', requireAuth);

	// Test API
	app.use('/api/ping', require('./test'));
	app.use('/api/secured/ping', require('./test'));

	// User API
	app.use('/api/secured/users', require('./users'));
		
}


