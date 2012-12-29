$(document).ready(function() {
	$('#nav #about-link').click(function(){
		$('html, body').animate({
			scrollTop: $("#about").offset().top
		}, 2000);
	})
	$('#nav #work').click(function(){
		$('html, body').animate({
			scrollTop: $("#worksamples").offset().top
		}, 2000);
	})
	$('#nav #contact').click(function(){
		$('html, body').animate({
			scrollTop: $("#contact").offset().top
		}, 2000);
	})

	var removeAllthethings = function() {
		$('.recently, .values, .skills').fadeOut(); 
	}
	$('#abvalues').click(function(){
		if ($('.values').hasClass('selected')) {

		} else {
			if ($('.recently').hasClass('selected')) {
    		$('#viewport > .selected').animate({left: '-=1500'}, 1500, function() {}).removeClass('selected');
    		$('#viewport > .values').animate({left: '0'}, 1500, function() {}).addClass('selected');
			}
			if ($('.skills').hasClass('selected')) {
			$('#viewport > .selected').animate({left: '+=1500'}, 1500, function() {}).removeClass('selected');
    		$('#viewport > .values').animate({left: '0'}, 1500, function() {}).addClass('selected');
			}
			$('#subnav .selected').removeClass('selected'); // remove selected class from 
			$('#abvalues').addClass('selected');
		return;
		}
	})

	$('#abrecently').click(function(){
		if ($('.recently').hasClass('selected')) {
		} else {
			if ($('.values').hasClass('selected')) {
    		$('#viewport > .selected').animate({left: '+=1500'}, 1500, function() {}).removeClass('selected');
    		$('#viewport > .recently').animate({left: '0'}, 1500, function() {}).addClass('selected');
			}
			if ($('.skills').hasClass('selected')) {
			$('.skills').animate({left: '+=3000'}, 1500, function() {}).removeClass('selected');
			$('.values').animate({left: '+=3500'}, 1500, function() {}).removeClass('selected');
    		$('#viewport > .recently').animate({left: '0'}, 1500, function() {}).addClass('selected');
			}
			$('#subnav .selected').removeClass('selected');
			$('#abrecently').addClass('selected');
			return;
		}
	})
	$('#abskills').click(function(){
		if ($('.skills').hasClass('selected')) {
		} else {
			if ($('.values').hasClass('selected')) {
    		$('#viewport > .selected').animate({left: '-=1500'}, 1500, function() {}).removeClass('selected');
    		$('#viewport > .skills').animate({left: '0'}, 1500, function() {}).addClass('selected');
			}
			if ($('.recently').hasClass('selected')) {
			$('.recently').animate({left: '-=3000'}, 1500, function() {}).removeClass('selected');
			$('.values').animate({left: '-=3200'}, 1500, function() {}).removeClass('selected');
    		$('#viewport > .skills').animate({left: '0'}, 1500, function() {}).addClass('selected');
			}
			$('#subnav .selected').removeClass('selected');
			$('#abskills').addClass('selected');
			return;
		}
	})

	$(".ul-o-death a.hoverimg").hover(
  		function () {
  			$(this).find('.overlay').animate({ 'opacity': '1'}, 300, 'linear');

  		},
  		function () {
  			$(this).find('.overlay').animate({ 'opacity': '0' }, 300, 'linear');
  		}
	);
});
