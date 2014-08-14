define([
	'backbone',
	'../models/contacts'
], function(Backbone, modelContacts) {	
	var contacts = Backbone.Collection.extend({
		model: modelContacts,
		url: '/contacts.php'
	})	

	return contacts;
}) 