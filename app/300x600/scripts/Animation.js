var app = app || {};


app.Animation = (function () {

    var t = TweenMax;
    var tl1 = new TimelineMax({repeat: -1, paused: true});
    var tl6 = new TimelineMax({repeat: -1, paused: true});
    var cartl = new TimelineMax();
    var pintl = new TimelineMax();
    var tltxt = new TimelineMax();
    var car = document.getElementById('car');
    var car_upper = document.getElementById('car_upper');
    var pin = document.getElementById('pin');
    var cta = document.getElementById('cta');
    var cta_bg = document.getElementById('cta_bg');
    var buttonExit = document.getElementById('button-exit');
    var txt1 = document.getElementById('txt1');
    var txt2 = document.getElementById('txt2');
    var txt3 = document.getElementById('txt3');
    var txt4 = document.getElementById('txt4');
    var txt5 = document.getElementById('txt5');
    var txt6 = document.getElementById('txt6');

    // --------------------------------------------------------------------------------------
    // set default properties
    function initialize() {


        t.set(banner, {opacity: 1});
        t.set(pin, {y:"-=10", transformOrigin: "50% 100%"});

        t.set(txt1, {transformOrigin: "25% 50%"});
        t.set(txt2, {transformOrigin: "70% 50%"});
        t.set(txt6, {transformOrigin: "50% 95%"});
        t.set(cta, {transformOrigin: "50% 100%"});

        buttonExit.addEventListener('mouseover', function () {
            t.to(cta_bg, .25, {backgroundColor: "rgba(211, 78, 255, 1)"});

        });
        buttonExit.addEventListener('mouseout', function () {
            t.to(cta_bg, .25, {backgroundColor: "rgba(0, 11, 56, 1)"});

        });


    }

    // --------------------------------------------------------------------------------------
    // Starts the animation
    function start() {

        tltxt.fromTo(txt1, .15, {opacity:0, scale: 0}, {opacity:1, scale:1.05, ease: Sine.easeInOut}, "+=.5")
            .to(txt1, .1, {scale:1, ease: Sine.easeIn})

            .fromTo(txt2, .15, {opacity:0, scale: 0}, {opacity:1, scale:1.05, ease: Sine.easeInOut}, "-=.1")
            .to(txt2, .1, {scale:1, ease: Sine.easeIn})

            .fromTo(txt3, .2, {y:"+=50"}, {y:-2, ease: Sine.easeInOut}, "+=.5")
            .to(txt3, .15, {y:0, ease: Sine.easeIn})

            .fromTo(txt4, .2, {y:"+=50"}, {y:-2, ease: Sine.easeInOut}, "-=.25")
            .to(txt4, .15, {y:0, ease: Sine.easeIn})

            .fromTo(txt5, .2, {y:"+=50"}, {y:-2, ease: Sine.easeInOut}, "-=.25")
            .to(txt5, .15, {y:0, ease: Sine.easeIn})

            .fromTo(txt6, .25, {opacity:0, scale: 0}, {opacity:1, scale:1.05, ease: Sine.easeInOut}, "+=.5")
            .to(txt6, .15, {scale:1, ease: Sine.easeIn})

            .fromTo(cta, .25, {opacity:0, scale: 0}, {opacity:1, scale:1.05, ease: Sine.easeInOut}, "+=.5")
            .to(cta, .15, {scale:.95, ease: Sine.easeInOut})
            .to(cta, .1, {scale:1, ease: Sine.easeIn, onComplete: function(){tl6.play();}});

        tl6.to(cta, .25, {scale:1.05, ease: Sine.easeInOut}, "+=3")
            .to(cta, .15, {scale:.95, ease: Sine.easeInOut})
            .to(cta, .1, {scale:1, ease: Sine.easeIn});


        pintl.from(pin, .25, {scale:"-=.2", opacity:0, ease: Sine.easeInOut}, "+=3.5")
            .to(pin, .25, {y:"+=10", ease: Sine.easeIn}, "+=.2")
            .to(pin, .25, {y:"-=5", ease: Sine.easeOut})
            .to(pin, .25, {y:"+=5", ease: Sine.easeIn})
            .to(pin, 1, {y: "-=5", ease: Sine.easeOut, onComplete: function () {tl1.play()}});



        tl1.to(pin, 1, {y: '+=5', ease: Sine.easeInOut})
            .to(pin, 1, {y: '-=5', ease: Sine.easeInOut});

        t.to(car_upper, .1, {y: "+=.5", ease: Linear.easeNone, repeat: -1, yoyo:true});

        cartl.from(car, 1, {x: "+=150", ease: Sine.easeOut}, "+=4")
            .from(car_upper, .5, {rotation:-3, ease: Sine.easeOut}, "-=.5")
            .to(car_upper, .2, {rotation:+2, ease: Sine.easeInOut, repeat: 1, yoyo:true})
            .to(car, 1, {x: "-=250", ease: Sine.easeIn}, "+=3")
            .to(car_upper, .5, {rotation:3, ease: Sine.easeIn}, "-=1");

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
