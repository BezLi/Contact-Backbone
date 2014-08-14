define([
	'backbone',
	'text!../../../templates/currentUserInfo.tpl'
], function(Backbone, templateCurrentUserInfo) {
	var currentUser = Backbone.View.extend({
		template: _.template(templateCurrentUserInfo),
		className: 'userInfo',
		events: {
			'click .editButton': 'goToEdit',
			'click .removeButton': 'removeCurrentUser'
		},

		render: function() {
			var html = this.template(_.extend(this.model.toJSON(), {
				isNew: this.model.isNew()
			}));
			this.$el.html(html);
			return this;
		},

		goToEdit: function() {
			window.location.hash = 'contact/edit/' + $('.editButton').data('id');
		},

		removeCurrentUser: function() {
			this.trigger('remove:removeCurrentUser')
		}

	});

	return currentUser;
}) 