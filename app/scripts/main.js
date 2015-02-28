/****************

   Responsive Menu

*****************/

$(document).ready(function(){
    
    $('#burger').click(function(){
        if ( $('nav').is('.menu-closed') ) {
            $(this).find('ul').stop().fadeIn();
            $('nav').removeClass('menu-closed');
        }
        else {
            $(this).find('ul').stop().fadeOut();
            $('nav').addClass('menu-closed');
        }
        event.preventDefault();
    });
});


/****************

   FitText.js

*****************/

$("#sa-center").fitText(0.25);


/****************

   Scrollmagic

*****************/

// init controller
var controller = new ScrollMagic();

// speed & timing
var timing = 0.5;
var speed = 500;

// build tweens
var tweenRegistry = TweenMax.to("body", timing, {backgroundColor: "#9cc2bf"});
var tweenWhere = TweenMax.to("body", timing, {backgroundColor: "#f1ad02"});
var tweenActivities = TweenMax.to("body", timing, {backgroundColor: "#d95c46"});
var tweenDayOf = TweenMax.to("body", timing, {backgroundColor: "#f7b2ad"});
var tweenRSVP = TweenMax.to("body", timing, {backgroundColor: "#003248"});

// Registry
var sceneRegistry = new ScrollScene({triggerElement: "#trigger-registry", duration: speed})
	.setClassToggle("#nav-registry", "active") // add "active" class toggle
	.setTween(tweenRegistry)
	.addTo(controller);

var sceneWhere = new ScrollScene({triggerElement: "#trigger-where", duration: speed})
	.setClassToggle("#nav-where", "active") // add "active" class toggle
	.setTween(tweenWhere)
	.addTo(controller);

var sceneActivities = new ScrollScene({triggerElement: "#trigger-activities", duration: speed})
	.setClassToggle("#nav-activities", "active") // add "active" class toggle
	.setTween(tweenActivities)
	.addTo(controller);

var sceneDayOf = new ScrollScene({triggerElement: "#trigger-dayof", duration: speed})
	.setClassToggle("#nav-dayOf", "active") // add "active" class toggle
	.setTween(tweenDayOf)
	.addTo(controller);

var sceneRSVP = new ScrollScene({triggerElement: "#trigger-rsvp", duration: speed})
	.setClassToggle("#nav-rsvp", "active") // add "active" class toggle
	.setTween(tweenRSVP)
	.addTo(controller);


/****************

   Bootstap popover

*****************/

$('[data-toggle="popover"]').popover({html : true, container: '#where .row'});