console.log('reached');

let accordion = $('.accordion');
let i;

for(i=0; i<accordion.length; i++) {
	accordion[i].addEventListener('click', function(){
		this.classList.toggle('active');
		var panel = this.nextElementSibling;
		if(panel.style.display === 'block') {
			panel.style.display = 'none';
		}else{
			panel.style.display = 'block';
		}
	});
}