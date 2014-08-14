define(['domReady'],function(domReady) {
	domReady(function() {
		var input = $('.searchLeftPanel');

		input.keypress(function(event){		
			if(event.which != 8){
				var word = input.val().toLowerCase() + String.fromCharCode(event.which).toLowerCase();
				searchContactToogle(word);
			}else{
				var word = input.val().slice(0,-1).toLowerCase();
				searchContactToogle(word);
			}
		});

		$('body').on('change', '.searchPart .contactsGroup', searchContactGroup)

		function searchContactToogle(word){
			$('.listContacts .item').each(function(){
				var elem = $(this);
				var name = elem.find('.listContactsLinck').text().toLowerCase();
				name.indexOf(word) != -1 ? elem.show() : elem.hide();
			});
		};

		function searchContactGroup() {
			var currentGroup = $('.searchPart .contactsGroup').find('option:selected').text();
			if(currentGroup === 'All Contacts') {
				$('.templateListContainer .item').show();
			} else {
				$('.templateListContainer .item').each(function() {
					var elem = $(this),
						group = elem.find('.listContactsLinck').data('group');
					currentGroup === group ? elem.show() : elem.hide();
				});
			}
		};

	}) 
	return true;
});


