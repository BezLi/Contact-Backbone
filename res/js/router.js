define([
	'backbone'
], function(Backbone) {
	var router = Backbone.Router.extend({
		routes: {
			'': 'home',		
			'contact/new': 'newContact',
			'contact/edit/:id': 'editContact',
			'contact/:id': 'showContact'
		}
	});

	return router;
}) 