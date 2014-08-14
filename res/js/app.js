define([
	'backbone',
	'./collections/contacts',
	'./collections/groups',
	'./models/contacts',
	'./views/contact',
	'./views/groups',	
	'./views/currentUser',
	'./views/addNewUser',
	'./router',
	'./search'

], function(Backbone, collectionContats, collectionsGroups, modelContacts, viewContacts, viewGroups, viewCurrentUser, viewAddNewUser, appRouter) {
	var start = function() {
		var contacts = new collectionContats();
		contacts.fetch({
			add: true,
			data: {type: 'getAll'}
		});	

		var groups = new collectionsGroups();
		groups.fetch({
			add: true,
			data: {type: 'getAllGroups'}
		});	

		var contactsView = new viewContacts({collection: contacts});
		var groupsView = new viewGroups({collection: groups});
		var router = new appRouter();
		

		$('.templateListContainer').html(contactsView.render().$el);

		$('.searchPart').html(groupsView.render().$el);				

		router.on('route:home', function() {
			var userInfo = new viewCurrentUser({
				collection: contacts,
				model: new modelContacts
			});
			$('.rightPanel').html(userInfo.render().$el);			
		});

		router.on('route:showContact', function(id) {
			var contactModel = contacts.get(id);
			
			if (contactModel) {
				var showContactView = new viewCurrentUser({model: contactModel});
				$('.rightPanel').html(showContactView.render().$el);

				showContactView.on('remove:removeCurrentUser', function() {
					contactModel.destroy({
						contentType: 'application/json',
				        data: JSON.stringify({contactID: id}),
				        wait: true,
				        success: function(model, resp) {
					       if(resp){
					        	router.navigate('',true);
				      		}
				        }
					});
				})
			} else {
				router.navigate('', true);
			}
		});

		router.on('route:newContact', function() {
			var newContact = new viewAddNewUser({
				model: new modelContacts,
				groupCollection: groups
			});
			$('.rightPanel').html(newContact.render().$el);
			newContact.on('submit:addNewUser', function(attr) {
				attr.id = contacts.isEmpty() ? 1 : (+ _.max(contacts.pluck('id')) + 1);
				contacts.create(attr, {
					wait: true,
					success: function() {
						router.navigate('contact/' + attr.id, true);
					}
				});
			});
		});
		
		router.on('route:editContact', function(id) {
			var contactModel = contacts.get(id);
			
			if (contactModel) {
				var editContact = new viewAddNewUser({
					model: contactModel,
					groupCollection: groups
				});
				$('.rightPanel').html(editContact.render().$el);
				editContact.on('submit:addNewUser', function(attr) {
					attr.id = id
					contacts.set(attr, {remove: false});
					contactModel.save();
					router.navigate('contact/' + attr.id, true);					
				})
			} else {
				router.navigate('', true);
			}
		});

		Backbone.history.start();
	}

	return {initialize: start};
});