$(document).ready(function() {
	$('#nav #about-link').click(function(){
		$('html, body').animate({
			scrollTop: $("#about").offset().top - 100
		}, 2000);
	})
	$('#nav #work').click(function(){
		$('html, body').animate({
			scrollTop: $("#worksamples").offset().top - 95
		}, 2000);
	})
	$('#nav #contact-link').click(function(){
		$('html, body').animate({
			scrollTop: $("#contact").offset().top - 10
		}, 2000);
	})
	$('.top').click(function(){
		$('html, body').animate({
			scrollTop: $('#image').offset().top -200
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
	$(function(){
		var nav_container = $('#nav_container');
		var nav = $('#nav');
		$('#nav_container').waypoint( function(direction) {
			if (direction ==='down'){
				nav.toggleClass('sticky').animate({ backgroundColor: "rgba(255,255,255,.9)", boxShadow: "0px 3px 5px rgba(0,0,0,.1)", }, "400");
				$('.top').addClass('display');
			} else {
				nav.toggleClass('sticky').animate({ backgroundColor: "transparent", boxShadow: "0px 3px 5px rgba(0,0,0,.0)" }, "fast");
				$('.top').removeClass('display');

			}
		});
	});

	//update navigation while scrolling

	//para-para-parallax

	var $window = $('window');
	var $first = $('.parallax');

	var windowHeight = $window.height();

	$('#parallax').bind('inview', function (event, visible){
		if (visible == true) {
			$(this).addClass("inview");
		} else {
			$(this).removeClass("inview");
		}
	})
	function RepositionNav(){
	    var windowHeight = $window.height();
	    var navHeight = $('#nav').height() / 3;
	    var windowCenter = (windowHeight / 2);
	    var newtop = windowCenter - navHeight;
	    $('#nav').css({"top": newtop});
	}
	function newPos(x, windowHeight, pos, adjuster, inertia){ return x + "%" + (-((windowHeight + pos) - adjuster) * inertia) + "px"; }


	function move() {
		var pos = $(window).scrollTop();
		if (screen.width > 960) {
		if($('.parallax').hasClass("inview")){
			//call the newPos function and change the background position
			$first.css({'backgroundPosition': newPos(75, 5000, -pos, 100, .3) + ", " + //sem
					newPos(51, 150, -pos, 5, 0.1) + ", " + //spring formal
					newPos(28, -0, -pos, 0, 10) + ", " + //mute
					newPos(53, -0, -pos, 4, 0.2) + ", " + //music
					newPos(78.5, -203, pos, 0, 0.2) + ", " + //phantom
					newPos(93, -0, pos, 0, 0.5) + ", " + // covers xxi
					newPos(10, -0, -pos, 0, 0.55) + ", " + // pepband
					newPos(45, -20, -pos, 1, 0.3) + ", " + // madness
					newPos(38, -0, pos, 1, 0.5) + ", " + // tvf
					newPos(44, -0, pos, 5, 0.9) + ", " + // monsters ball
					newPos(55, -0, -pos, 5, 0.9) + ", " + // iwomen
					newPos(77, -0, pos, 5, 0.5) + ", " + // dub dub 
					newPos(21, -00, pos, 5, 0.5) + ", " + // xix
					newPos(21, -50, pos, 5, 0.5) + ", " + // badgerbash
					newPos(35, -20, -pos, 3, 0.1) + ", " + //polankis
					newPos(72.5, -00, -pos, 5, 0.24) + ", " + // lori
					newPos(28.5, -10, -pos, 5, 0.2) + ", " + // anna 
					newPos(91, -0, -pos, 0, 0.3) + ", " + // preston
					newPos(9, -1800, pos, 0, 0.2)}); //dorminy 
		}
	}}
	$(window).resize(function(){
	    move();
	    RepositionNav();
	});
	$(window).bind('scroll', function(){
	    move();
	});


});
