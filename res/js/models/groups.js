define([
	'backbone'
], function(Backbone) {
	var groups = Backbone.Model.extend({
		defaults: {
			id: null,
			name: null
		},

		urlRoot: '/contacts.php'
	});
	
	return groups;
}) 