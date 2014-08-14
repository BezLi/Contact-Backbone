define([
	'backbone',
	'../models/groups'
], function(Backbone, modelGroups) {
	var groups = Backbone.Collection.extend({
		model: modelGroups,
		url: '/contacts.php'
	});
	
	return groups;
}) 