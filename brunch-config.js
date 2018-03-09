// See http://brunch.io for documentation.
module.exports = {
	files: {
		javascripts: {joinTo: 'app.js'},
		stylesheets: {joinTo: 'app.css'}
	},
	plugins: {
		less: {
			dumpLineNumbers: 'comments'
		}
	}
};