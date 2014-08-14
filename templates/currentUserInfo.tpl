<div class="iconContainer">
	<img  class="userIcon" src="res/images/userImg.jpg" alt="">
	<div class="userName"><%- name %></div>
</div>
<div data-text="E-mail:" class="userData"><%- mail %></div>
<div data-text="Phone:" class="userData"><%- phone %></div>
<div data-text="Gpoup:" class="userData"><%- group %></div>
<% if(name){ %>
	<div class="buttonBlock"> 
		<button type="button" class="userInfoButton editButton" data-id="<%- id %>">Редактировать</button>	
		<button type="button" class="userInfoButton removeButton" data-id="<%- id %>">Удалить</button>					
	</div>
<% } %>