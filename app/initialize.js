var _ = require('lodash');
var $ = require('jquery');
require('waypoints/lib/noframework.waypoints.min');

document.addEventListener('DOMContentLoaded', function() {
	// do your setup here
	var waypoint = new Waypoint({
		element: document.getElementsByClassName('headline')[0],
	    handler: (direction) => {
			console.log('waypoint', direction);
		},
	})	
});

