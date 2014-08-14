define([
	'backbone',
	'../views/contactsAsideOne',
	'text!../../../templates/contactsList.tpl'
], function(Backbone, viewsContactsAsideOne, templateContactsList) {
	var contact = Backbone.View.extend({
		template: _.template(templateContactsList),

		events: {
			'click .addContact': 'addContact'
		},

		initialize: function() {
			this.collection.on('add', this.renderOne, this);
			this.collection.on('change', this.render, this);
		},

		renderOne: function(contact) {
			var contactAside = new viewsContactsAsideOne({model: contact});
			this.$('.listContacts').append(contactAside.render().$el);
		},

		render: function() {
			var html = this.template();
			this.$el.html(html);
			this.collection.each(this.renderOne, this);

			return this;
		},

		addContact: function() {
			window.location.hash = 'contact/new';
		}
	});

	return contact;
}) 