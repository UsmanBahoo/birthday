$(window).load(function(){
	$('.loading').fadeOut('fast');
	$('.container').fadeIn('fast');
});
$('document').ready(function(){
	var vw;
	$(window).resize(function(){
		// Only reposition if balloons are visible (after wish_message click)
		if ($('#b11').length > 0) {
			vw = $(window).width();
			var spacing, startPos;
			
			// Responsive spacing based on screen size
			if (vw <= 480) {
				spacing = 50;
				startPos = vw/2 - 150;
			} else if (vw <= 768) {
				spacing = 70;
				startPos = vw/2 - 210;
			} else if (vw <= 1024) {
				spacing = 90;
				startPos = vw/2 - 270;
			} else {
				spacing = 100;
				startPos = vw/2 - 300;
			}
			
			$('#b11,#b22,#b33,#b44,#b55,#b66').stop();
			$('#b11').animate({top:240, left: startPos},500);
			$('#b22').animate({top:240, left: startPos + spacing},500);
			$('#b33').animate({top:240, left: startPos + spacing * 2},500);
			$('#b44').animate({top:240, left: startPos + spacing * 3},500);
			$('#b55').animate({top:240, left: startPos + spacing * 4},500);
			$('#b66').animate({top:240, left: startPos + spacing * 5},500);
		}
	});

	$('#turn_on').click(function(){
		$('#bulb_yellow').addClass('bulb-glow-yellow');
		$('#bulb_red').addClass('bulb-glow-red');
		$('#bulb_blue').addClass('bulb-glow-blue');
		$('#bulb_green').addClass('bulb-glow-green');
		$('#bulb_pink').addClass('bulb-glow-pink');
		$('#bulb_orange').addClass('bulb-glow-orange');
		$('body').addClass('peach');
		$(this).fadeOut('slow').delay(5000).promise().done(function(){
			$('#play').fadeIn('slow');
		});
	});
	$('#play').click(function(){
		var audio = $('.song')[0];
        audio.play();
        $('#bulb_yellow').addClass('bulb-glow-yellow-after');
		$('#bulb_red').addClass('bulb-glow-red-after');
		$('#bulb_blue').addClass('bulb-glow-blue-after');
		$('#bulb_green').addClass('bulb-glow-green-after');
		$('#bulb_pink').addClass('bulb-glow-pink-after');
		$('#bulb_orange').addClass('bulb-glow-orange-after');
		$('body').css('backgroud-color','#FFF');
		$('body').addClass('peach-after');
		$(this).fadeOut('slow').delay(6000).promise().done(function(){
			$('#bannar_coming').fadeIn('slow');
		});
	});

	$('#bannar_coming').click(function(){
		$('.bannar').addClass('bannar-come');
		$(this).fadeOut('slow').delay(6000).promise().done(function(){
			$('#balloons_flying').fadeIn('slow');
		});
	});

	function loopOne() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b1').animate({left:randleft,bottom:randtop},10000,function(){
			loopOne();
		});
	}
	function loopTwo() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b2').animate({left:randleft,bottom:randtop},10000,function(){
			loopTwo();
		});
	}
	function loopThree() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b3').animate({left:randleft,bottom:randtop},10000,function(){
			loopThree();
		});
	}
	function loopFour() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b4').animate({left:randleft,bottom:randtop},10000,function(){
			loopFour();
		});
	}
	function loopFive() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b5').animate({left:randleft,bottom:randtop},10000,function(){
			loopFive();
		});
	}

	function loopSix() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b6').animate({left:randleft,bottom:randtop},10000,function(){
			loopSix();
		});
	}
	function loopSeven() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b7').animate({left:randleft,bottom:randtop},10000,function(){
			loopSeven();
		});
	}

	$('#balloons_flying').click(function(){
		$('.balloon-border').animate({top:-500},8000);
		// Don't show balloons here anymore - they will show on wish_message click
		
		$(this).fadeOut('slow').delay(5000).promise().done(function(){
			$('#cake_fadein').fadeIn('slow');
		});
	});	

	$('#cake_fadein').click(function(){
		$('.cake-png').fadeIn('slow');
		$(this).fadeOut('slow').delay(3000).promise().done(function(){
			$('#light_candle').fadeIn('slow');
		});
	});

	$('#light_candle').click(function(){
		// Replace cake image with cake129.png (without extra candle flames)
		$('.cake-png').attr('src', 'cake129.png');
		$(this).fadeOut('slow').promise().done(function(){
			$('#wish_message').fadeIn('slow');
		});
	});

		
	$('#wish_message').click(function(){
		// First show the balloons
		$('.balloons').show().css('opacity', '0.9');
		
		// Calculate responsive positioning
		var vw = $(window).width();
		var spacing, startPos;
		
		// Responsive spacing based on screen size
		if (vw <= 480) {
			spacing = 50;
			startPos = vw/2 - 150;
		} else if (vw <= 768) {
			spacing = 70;
			startPos = vw/2 - 210;
		} else if (vw <= 1024) {
			spacing = 90;
			startPos = vw/2 - 270;
		} else {
			spacing = 100;
			startPos = vw/2 - 300;
		}
		
		// Stop any ongoing animations
		$('#b1,#b2,#b3,#b4,#b5,#b6,#b7').stop();
		
		// Change IDs and animate to spell SALIHA
		$('#b1').attr('id','b11');
		$('#b2').attr('id','b22');
		$('#b3').attr('id','b33');
		$('#b4').attr('id','b44');
		$('#b5').attr('id','b55');
		$('#b6').attr('id','b66');
		
		// Animate balloons to spell SALIHA responsively
		$('#b11').animate({top: 240, left: startPos}, 500);                    // S
		$('#b22').animate({top: 240, left: startPos + spacing}, 500);          // A
		$('#b33').animate({top: 240, left: startPos + spacing * 2}, 500);      // L
		$('#b44').animate({top: 240, left: startPos + spacing * 3}, 500);      // I
		$('#b55').animate({top: 240, left: startPos + spacing * 4}, 500);      // H
		$('#b66').animate({top: 240, left: startPos + spacing * 5}, 500);      // A

		// Fade in the letters
		$('.balloons h2').fadeIn(3000);
		
		$(this).fadeOut('slow').delay(3000).promise().done(function(){
			$('#story').fadeIn('slow');
		});
	});
	
	$('#story').click(function(){
		$(this).fadeOut('slow');
		$('.cake').fadeOut('fast').promise().done(function(){
			$('.message').fadeIn('slow');
		});
		
		var i;

		function msgLoop (i) {
			$("p:nth-child("+i+")").fadeOut('slow').delay(800).promise().done(function(){
			i=i+1;
			$("p:nth-child("+i+")").fadeIn('slow').delay(1000);
			if(i==50){
				$("p:nth-child(49)").fadeOut('slow').promise().done(function () {
					$('.cake').fadeIn('fast');
				});
				
			}
			else{
				msgLoop(i);
			}			

		});
			// body...
		}
		
		msgLoop(0);
		
	});
});




//alert('hello');