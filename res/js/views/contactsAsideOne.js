define([
	'backbone',
	'text!../../../templates/contactsListOne.tpl'
], function(Backbone, templateContactsListOne) {
	var contactsAsideOne = Backbone.View.extend({
		tagName: 'li',
		className: 'item',
		template: _.template(templateContactsListOne),

		render: function() {
			var html = this.template(this.model.toJSON());
			this.$el.append(html);
			return this;
		},

		onClickListUser: function(e) {
			e.preventDefault();
	  		console.log('Delete');
		},

		initialize: function() {
			this.listenTo(this.model, 'remove', this.remove);
		}	
	});

	return contactsAsideOne;
}) 