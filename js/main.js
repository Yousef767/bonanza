let links = document.querySelectorAll('.link')


links.forEach((e)=>{
  e.addEventListener('click',()=>{
    links.forEach((e)=>{e.classList.remove('active')})
    e.classList.add('active')
  })
})

let drop = document.querySelectorAll('.drop');

drop.forEach((e)=>{
  e.addEventListener('click',()=>{
    e.classList.toggle('active');
  })
})


let header = document.querySelector(".header");
window.addEventListener('scroll',()=>{
  if(window.scrollY >= 100){
    header.classList.add('color');
  }else{
    header.classList.remove('color');
  }
})

let homeMedia = document.getElementById('homeMedia');
if(homeMedia){
  homeMedia.addEventListener('click',()=>{
    homeMedia.classList.toggle('active');
  })
  
  if(window.innerWidth <= 421){
    homeMedia.addEventListener('mouseleave',()=>{
      homeMedia.classList.remove('active');
    })
  }
}

document.addEventListener('DOMContentLoaded', function () {
	var menuIcon = document.querySelector('.menu-icon');
	var closeIcon = document.querySelector('.close-icon');
	var menuItems = document.querySelector('.menu-items');
	menuIcon.addEventListener('click', function () {
		menuItems.style.display = 'block';
		menuIcon.style.display = 'none';
		closeIcon.style.display = 'block';
	});
	closeIcon.addEventListener('click', function () {
		menuItems.style.display = 'none';
		menuIcon.style.display = 'block';
		closeIcon.style.display = 'none';
	});
	
	document.addEventListener('click', function (event) {
		if ((!menuIcon.contains(event.target) && !menuItems.contains(event.target) && !closeIcon.contains(event.target))) {
			menuItems.style.display = 'none';
			menuIcon.style.display = 'block';
			closeIcon.style.display = 'none';
		}
	});
});