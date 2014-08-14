define([
	'backbone'
], function(Backbone) {	
	var contacts = Backbone.Model.extend({
		defaults: {
			id: null,
			name: null,
			mail: null,
			phone: null,
			group: null
		},
		urlRoot: '/contacts.php'
	})
	return contacts;

}) 
