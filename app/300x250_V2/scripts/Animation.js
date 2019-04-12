var app = app || {};


app.Animation = (function () {

    var t = TweenMax;
    var tl1 = new TimelineMax({repeat: -1, paused: true});
    var tl2 = new TimelineMax({repeat: -1, paused: true});
    var tl3 = new TimelineMax({repeat: -1, paused: true});
    var tl4 = new TimelineMax({repeat: -1, paused: true});
    var tl5 = new TimelineMax({repeat: -1, paused: true});

    var pintl1 = new TimelineMax();
    var pintl2 = new TimelineMax();
    var pintl3 = new TimelineMax();
    var pintl4 = new TimelineMax();
    var pintl5 = new TimelineMax();

    var tltxt = new TimelineMax();

    var pin1 = document.getElementById('pin1');
    var pin2 = document.getElementById('pin2');
    var pin3 = document.getElementById('pin3');
    var pin4 = document.getElementById('pin4');
    var pin5 = document.getElementById('pin5');

    var txt1 = document.getElementById('txt1');
    var txt2 = document.getElementById('txt2');
    var txt3 = document.getElementById('txt3');
    var txt4 = document.getElementById('txt4');
    var txt5 = document.getElementById('txt5');
    var txt6 = document.getElementById('txt6');

    var cta = document.getElementById('cta');
    var cta_bg = document.getElementById('cta_bg');

    var buttonExit = document.getElementById('button-exit');

    // --------------------------------------------------------------------------------------
    // set default properties
    function initialize() {


        t.set(banner, {opacity: 1});
        t.set(pin1, {y: "-=10", transformOrigin: "50% 100%"});
        t.set(pin2, {y: "-=10", transformOrigin: "50% 100%"});
        t.set(pin3, {y: "-=10", transformOrigin: "50% 100%"});
        t.set(pin4, {y: "-=10", transformOrigin: "50% 100%"});
        t.set(pin5, {y: "-=10", transformOrigin: "50% 100%"});

        t.set(txt1, {transformOrigin: "40% 40%"});
        t.set(txt2, {transformOrigin: "66% 40%"});
        t.set(txt6, {transformOrigin: "50% 98%"});
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

        tltxt.fromTo(txt1, .25, {opacity:0, scale: 0}, {opacity:1, scale:1, ease: Sine.easeIn}, "+=.5")
            .fromTo(txt2, .25, {opacity:0, scale: 0}, {opacity:1, scale:1, ease: Sine.easeIn})
            .fromTo(txt3, .25, {y:"+=35"}, {y:0, ease: Sine.easeIn}, "+=.5")
            .fromTo(txt4, .25, {y:"+=35"}, {y:0, ease: Sine.easeIn})
            .fromTo(txt5, .25, {y:"+=35"}, {y:0, ease: Sine.easeIn})
            .fromTo(txt6, .25, {opacity:0, scale: 0}, {opacity:1, scale:1, ease: Sine.easeIn}, "+=.5")
            .fromTo(cta, .25, {opacity:0, scale: 0}, {opacity:1, scale:1, ease: Sine.easeIn}, "+=.5");



        pintl1.from(pin1, .25, {scale: "-=.2", opacity: 0, ease: Sine.easeInOut}, "+=4")
            .to(pin1, .25, {y: "+=10", ease: Sine.easeIn}, "+=.2")
            .to(pin1, .25, {y: "-=5", ease: Sine.easeOut})
            .to(pin1, .25, {y: "+=5", ease: Sine.easeIn})
            .to(pin1, 1, {
                y: "-=5", ease: Sine.easeOut, onComplete: function () {
                    tl1.play()
                }
            });

        pintl2.from(pin2, .25, {scale: "-=.2", opacity: 0, ease: Sine.easeInOut}, "+=3.6")
            .to(pin2, .25, {y: "+=10", ease: Sine.easeIn}, "+=.2")
            .to(pin2, .25, {y: "-=5", ease: Sine.easeOut})
            .to(pin2, .25, {y: "+=5", ease: Sine.easeIn})
            .to(pin2, 1, {
                y: "-=5", ease: Sine.easeOut, onComplete: function () {
                    tl2.play()
                }
            });

        pintl3.from(pin3, .25, {scale: "-=.2", opacity: 0, ease: Sine.easeInOut}, "+=3.7")
            .to(pin3, .25, {y: "+=10", ease: Sine.easeIn}, "+=.2")
            .to(pin3, .25, {y: "-=5", ease: Sine.easeOut})
            .to(pin3, .25, {y: "+=5", ease: Sine.easeIn})
            .to(pin3, 1, {
                y: "-=5", ease: Sine.easeOut, onComplete: function () {
                    tl3.play()
                }
            });

        pintl4.from(pin4, .25, {scale: "-=.2", opacity: 0, ease: Sine.easeInOut}, "+=3.8")
            .to(pin4, .25, {y: "+=10", ease: Sine.easeIn}, "+=.2")
            .to(pin4, .25, {y: "-=5", ease: Sine.easeOut})
            .to(pin4, .25, {y: "+=5", ease: Sine.easeIn})
            .to(pin4, 1, {
                y: "-=5", ease: Sine.easeOut, onComplete: function () {
                    tl4.play()
                }
            });

        pintl5.from(pin5, .25, {scale: "-=.2", opacity: 0, ease: Sine.easeInOut}, "+=3.9")
            .to(pin5, .25, {y: "+=10", ease: Sine.easeIn}, "+=.2")
            .to(pin5, .25, {y: "-=5", ease: Sine.easeOut})
            .to(pin5, .25, {y: "+=5", ease: Sine.easeIn})
            .to(pin5, 1, {
                y: "-=5", ease: Sine.easeOut, onComplete: function () {
                    tl5.play()
                }
            });





        tl1.to(pin1, 1, {y: '+=5', ease: Sine.easeInOut})
            .to(pin1, 1, {y: '-=5', ease: Sine.easeInOut});

        tl2.to(pin2, 1, {y: '+=5', ease: Sine.easeInOut})
            .to(pin2, 1, {y: '-=5', ease: Sine.easeInOut});

        tl3.to(pin3, 1, {y: '+=5', ease: Sine.easeInOut})
            .to(pin3, 1, {y: '-=5', ease: Sine.easeInOut});

        tl4.to(pin4, 1, {y: '+=5', ease: Sine.easeInOut})
            .to(pin4, 1, {y: '-=5', ease: Sine.easeInOut});

        tl5.to(pin5, 1, {y: '+=5', ease: Sine.easeInOut})
            .to(pin5, 1, {y: '-=5', ease: Sine.easeInOut});


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
