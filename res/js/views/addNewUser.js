define([
	'backbone',
	'../views/groups',
	'text!../../../templates/addNewUser.tpl'

], function(Backbone, groups, templateAddNewUser) {
	var addNewUser = Backbone.View.extend({
		template: _.template(templateAddNewUser),
		tagName: 'form',
		className: 'userInfo',
		attributes: {
			action: 'contacts.php'
		},

		events: {
			'submit': 'submitContact',
			'click .userInfoButton.cancle': 'cancleConact'
		},

		render: function() {
			var html = this.template(_.extend(this.model.toJSON(), {
				isNew: this.model.isNew()
			}));
			this.$el.html(html);
			this.renderSelect();
			return this;
		},

		cancleConact: function() {
			var hash = window.location.hash,
				setHash = ( hash === '#contact/new') ? '': (hash.split('/')[0] + '/' + hash.split('/')[2]);
   
			window.location.hash = setHash;
		},

		submitContact: function(e) {
			e.preventDefault();
			var form = $('.userInfo');
			this.trigger('submit:addNewUser', {			
				name: form.find('#name').val(),
				mail: form.find('#mail').val(),
				phone: form.find('#phone').val(),
				group: form.find('.contactsGroup').val(),
				isNew: this.model.isNew()
			});
		},

		renderSelect: function() {
			var select = new groups({collection: this.groupCollection}),
				currentGroup = this.model.get('group'),
				selectGroupContainer = this.$('.selectGroupContact');

			selectGroupContainer.html(select.render().$el);
			selectGroupContainer.find('option').each(function() {
				var elem = $(this);

				if(elem.text() === currentGroup) {
					elem.prop('selected', true);
				}
			}) 

		},

		initialize: function(options) {
			this.groupCollection = options.groupCollection;
		}

	});

	return addNewUser;
}) 