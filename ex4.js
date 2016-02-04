//Javascript

//cal to jQuery ready function
//make sure the html & css is loaded

$(document).ready(function () {
    console.log("ready"); //check

    
    //play music
    var sound = new Audio('media/sunShort.m4a');
    sound.play();
    
    //hide things (paragraph, begin button, and boxes)
    $('section#instr p').hide();
    $('section#begin h2').hide();
    $('section#begin ul#boxes').hide();
    
    //hide images
    $('section#begin img').hide();
    
    //hidd overlay
    $('section#overlay').hide();
    $('section#overlay p').hide();
    
    
    //OVERLAY
    //overlay hover "X"
    $('section#overlay nav').hover(function(){
        $(this).css('background-color','#083F5C');
    }, function(){
        $(this).css('background-color','rgba(36,116,158,0)');
        $('section#begin li').fadOut();
    });
    
    //overlay click to close
    $('section#overlay nav').click(function(){
       $('section#overlay').slideUp(600,'swing');
        $('section#overlay p').hide();
        $('section#begin li').fadeIn();
    });
    
    
    //hover blue on "instructions" and "begin"
    $('section h2').hover(function () {
        $(this).css('background-color', '#8BD5FC');
    }, function () {
        $(this).css('background-color', 'black');
    });
    
    //callback function
    $('section#instr h2').click(function(){
       $('section#instr p').fadeIn(1000);
		//animate function
        $('section#instr p').animate(
		{
			opacity:1,
		},
		500, animateBegin // animateSampleText2 is the function to call when the first animate function completes
		);
 	 });

    //function animateBegin
    function animateBegin(){
        $('section#begin h2').fadeIn(1000);
    }
    
    //Up with the boxes! - boxes slide into view
    $('section#begin h2').click(function () {
        $('section#begin ul#boxes').slideDown(1.1*1000);
    });
    
    //hover over boxes to show text
    $('section ul p').hover(function () {
        //show text in the box
        $(this).stop().animate({
                opacity: 1
            },
            800,
            'swing'
        );
    }, function () {
        $(this).stop().animate({
            opacity: 0
        });
    });

    //when I hover over the blue boxes, they will change color
    $('section#begin li').hover(function(){
        $(this).stop().animate({opacity:1});
      
    }, function(){
        $(this).stop().animate({opacity:.5});
    });
   
    //when you click the box, reveal the image
    //pencil
   $('section#begin li#scribble').click(function(){
       $('section#begin li#scribble img').fadeIn(1000);
   });
    
    //show overlay pencil
    $('section#begin li#scribble img').click(function(){
       $('section#overlay').slideDown(); 
        $('section#overlay p#pencilP').fadeIn();
    });
    
    //chocolate
    $('section#begin li#yum').click(function(){
        $('section#begin li#yum img').fadeIn(1000);
    });
    
    //show overlay choco
    $('section#begin li#yum img').click(function(){
       $('section#overlay').slideDown(); 
        $('section#overlay p#chocoP').fadeIn();
    });
    
    //water bottle
    $('section#begin li#gulp').click(function(){
        $('section#begin li#gulp img').fadeIn(1000);
    });
    
    //show overlay water bottle
    $('section#begin li#gulp img').click(function(){
       $('section#overlay').slideDown(); 
        $('section#overlay p#bottleP').fadeIn();
    });
    
    //wallet
    $('section#begin li#chaching').click(function(){
        $('section#begin li#chaching img').fadeIn(1000);
    });
    
    //show overlay wallet
    $('section#begin li#chaching img').click(function(){
       $('section#overlay').slideDown(); 
        $('section#overlay p#walletP').fadeIn();
    });
    
    //earphone
    $('section#begin li#bass').click(function(){
        $('section#begin li#bass img').fadeIn(1000);
    });
    
    //show overlay earphone
    $('section#begin li#bass img').click(function(){
       $('section#overlay').slideDown(); 
        $('section#overlay p#earP').fadeIn();
    });
    
    //end
    $('section#begin li#end').click(function(){
        $(this).fadeOut(900,'swing');
    });
    
    //glasses move reference from jsfiddle.net
    $(document).mousemove(function(e) {
    $('img#glasses').offset({
        left: e.pageX/27-30,
        top: e.pageY/15 - 30
    });
});
    
}); //end main

