$(document).scroll(function(event) {
	if ($(document).scrollTop() > $(window).height()) {
		$('nav').addClass('scroll');
		$('#add').addClass('scroll');
	}
	else {
		$('nav').removeClass('scroll');
		$('#add').removeClass('scroll');
	}
});


$('.contact').hover(function() {
	$('#arrow').toggleClass('hover');
}, function() {
	$('#arrow').toggleClass('hover');
});

$('.work').hover(function() {
	$(this).children('p').addClass('hover');
}, function() {
	$(this).children('p').removeClass('hover');
});


$("a").click(function(e) {
	$href = $(this).attr('href');
	if ($href[0] == '#') {
		e.preventDefault();
		window.scrollTo(0, document.getElementById($href.slice(1,)).offsetTop - 94);
	}
});

$('#add').click(function(event) {
	$(this).toggleClass('clicked');
});