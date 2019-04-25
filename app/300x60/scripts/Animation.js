var app = app || {};


app.Animation = (function () {

    var t = TweenMax;
    var tl1 = new TimelineMax({repeat: -1, paused: true});
    var pintl = new TimelineMax();
    var tltxt = new TimelineMax();
    var txt1 = document.getElementById('txt1');
    var txt2 = document.getElementById('txt2');

    var pin = document.getElementById('pin');

    var buttonExit = document.getElementById('button-exit');


    // --------------------------------------------------------------------------------------
    // set default properties
    function initialize() {

        t.set(banner, {opacity: 1});
        t.set(pin, {y:"-=10", transformOrigin: "50% 100%"});

        t.set(txt1, {transformOrigin: "12% 50%"});
        t.set(txt2, {transformOrigin: "35% 50%"});
        t.set(txt6, {transformOrigin: "30% 95%"});

        buttonExit.addEventListener('mouseover', function () {
            // t.to(cta_bg, .25, {backgroundColor: "rgba(211, 78, 255, 1)"});

        });
        buttonExit.addEventListener('mouseout', function () {
            // t.to(cta_bg, .25, {backgroundColor: "rgba(0, 11, 56, 1)"});

        });


    }

    // --------------------------------------------------------------------------------------
    // Starts the animation
    function start() {

        pintl.from(pin, .25, {scale:"-=.2", opacity:0, ease: Sine.easeInOut}, "+=3.5")
            .to(pin, .25, {y:"+=10", ease: Sine.easeIn}, "+=.2")
            .to(pin, .25, {y:"-=5", ease: Sine.easeOut})
            .to(pin, .25, {y:"+=5", ease: Sine.easeIn})
            .to(pin, 1, {y: "-=5", ease: Sine.easeOut, onComplete: function () {tl1.play()}});


        tltxt.fromTo(txt1, .2, {opacity:0, scale: 0}, {opacity:1, scale:1.05, ease: Sine.easeInOut}, "+=.5")
            .to(txt1, .1, {scale:1, ease: Sine.easeIn})

            .fromTo(txt2, .2, {opacity:0, scale: 0}, {opacity:1, scale:1.05, ease: Sine.easeInOut}, "-=.1")
            .to(txt2, .1, {scale:1, ease: Sine.easeIn})

            .fromTo(txt3, .25, {y:"+=35"}, {y:-3, ease: Sine.easeInOut}, "+=.5")
            .to(txt3, .15, {y:0, ease: Sine.easeInOut})

            .fromTo(txt4, .25, {y:"+=35"}, {y:-3, ease: Sine.easeInOut}, "-=.25")
            .to(txt4, .15, {y:0, ease: Sine.easeInOut})

            .fromTo(txt5, .25, {y:"+=35"}, {y:-3, ease: Sine.easeInOut}, "-=.25")
            .to(txt5, .15, {y:0, ease: Sine.easeInOut})

            .fromTo(txt6, .25, {opacity:0, scale: 0}, {opacity:1, scale:1.05, ease: Sine.easeInOut}, "+=.5")
            .to(txt6, .15, {scale:1, ease: Sine.easeIn});

        tl1.to(pin, 1, {y: '+=5', ease: Sine.easeInOut})
            .to(pin, 1, {y: '-=5', ease: Sine.easeInOut});

    }

    // --------------------------------------------------------------------------------------
    // Stops the animation
    function stop() {
        console.log("stopping animation");
    }

    // --------------------------------------------------------------------------------------
    // Publicly accessible methods and properties
    return {
        initialize: initialize,
        start: start,
        stop: stop
    }


})();
