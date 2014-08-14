<form action="" class="userInfo">
	<div class="iconContainer">
		<img  class="userIcon" src="res/images/userImg.jpg" alt="">
		<div class="userName">
			<input class="textField" type="text"  name="name" value="<%- name %>" placeholder='Имя' id="name">	
			<span>Пожалуйста, введите валидное имя</span>
		</div>
	</div>
	<div data-text="E-mail:" class="userData">
		<input class="textField" type="text" placeholder="name@mail.ru" name="mail" id="mail" value="<%- mail %>">
		<span>Пожалуйста, введите валидный e-mail</span>	
	</div>
	<div data-text="Phone:" class="userData">
		<input class="textField" type="text" placeholder="044-459-12-12" name="phone" id="phone" value="<%- phone %>">
		<span>Пожалуйста, введите валидный номер</span>
	</div>
	<div data-text="Gpoup:" class="userData selectGroupContact" name="croup"></div>				
	<div class="buttonBlock">					
		<input type="submit" value="Сохранить" class="userInfoButton">
		<input type="button" value="Отменить" class="userInfoButton cancle">
	</div>
</form>