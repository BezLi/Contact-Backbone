define([
	'backbone',
	'../views/groupsList'
], function(Backbone, groupsList) {
	var groups = Backbone.View.extend({
		tagName: 'select',
		className: 'contactsGroup',
		
		renderOne: function(group) {
			var groupsContacts = new groupsList({model: group});
			this.$el.append(groupsContacts.render().$el);
		},

		render: function() {	
			this.collection.each(this.renderOne, this);
			return this;
		},

		initialize: function() {
			this.collection.on('add', this.renderOne, this);
		}
	});

	return groups;
}) 