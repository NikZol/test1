document.addEventListener('DOMContentLoaded', function(){
	var button = document.querySelector('.headerMobile');
	var menu = document.querySelector('.headerMobileMenu');
	var clicks = 0;
	button.addEventListener('click', function(){
		if(clicks==0){
			menu.classList.remove('fadeOut');
			menu.style.display = "block";
			menu.classList.add('fadeIn');
			
			clicks++;
		} else {
			menu.classList.remove('fadeIn');
			menu.classList.add('fadeOut');
			clicks=0;
		}
	})
})