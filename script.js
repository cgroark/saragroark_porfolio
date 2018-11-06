$(window).on('load', function(){
	var navHeight = $('.navbar').height()
	$('h1').css('margin-top', navHeight);
	$('article.finances img').css('margin-top', navHeight+5);
	$('#contact-content h1').css('margin-top', 0);
});


let accordion = $('.accordion');
let i;

for(i=0; i<accordion.length; i++) {
	accordion[i].addEventListener('click', function(){
		console.log('reached')
		this.classList.toggle('active');
		var panel = this.nextElementSibling;
		if(panel.style.display === 'block') {
			panel.style.display = 'none';
		}else{
			panel.style.display = 'block';
		}
	});
}

let about = $('article.about').offset().top;
let specialties = $('article.specialties').offset().top;
let finances = $('article.finances').offset().top;
let contact = $('article.contact').offset().top;


$(window).on('scroll', function(){
	var stopHeight = Math.round($(window).scrollTop());
	if(stopHeight > about && stopHeight < specialties){
		$('.nav-about').addClass('color-shift');
        $('.nav-specialties').removeClass('color-shift');
	}else if(stopHeight > specialties && stopHeight < finances){
		$('.nav-specialties').addClass('color-shift');
		$('.nav-about').removeClass('color-shift');
        $('.nav-finances').removeClass('color-shift');
	}else if(stopHeight > finances && stopHeight < contact){
		$('.nav-finances').addClass('color-shift');
        $('.nav-specialties').removeClass('color-shift');
        $('.nav-contact').removeClass('color-shift');
	}else if(stopHeight > contact){
		console.log('contact reahced')
		$('.nav-contact').addClass('color-shift');
        $('.nav-finances').removeClass('color-shift');
	}else{
		$('.nav-specialties').removeClass('color-shift');
		$('.nav-about').removeClass('color-shift');
		$('.nav-finances').removeClass('color-shift');
		$('.nav-contact').removeClass('color-shift');
	}
})

