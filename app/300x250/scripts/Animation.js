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

    var txt1a = document.getElementById('txt1a');
    var txt1b = document.getElementById('txt1b');

    var txt2 = document.getElementById('txt2');
    var txt3 = document.getElementById('txt3');

    var ctaa = document.getElementById('ctaa');
    var ctab = document.getElementById('ctab');
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


        buttonExit.addEventListener('mouseover', function () {
            t.to(cta_bg, .25, {backgroundColor: "rgba(211, 78, 255, 1)"});

        });
        buttonExit.addEventListener('mouseout', function () {
            t.to(cta_bg, .25, {backgroundColor: "rgba(62, 104, 162, 1)"});

        });


    }

    // --------------------------------------------------------------------------------------
    // Starts the animation
    function start() {

        tltxt.fromTo(txt1a, .25, {opacity:0, scale: .75}, {opacity:1, scale:1, ease: Sine.easeIn}, "+=.5")
            .set(txt1b, {opacity: 1})
            .to(txt1b, .25, {opacity:0, scale:1.25, ease: Sine.easeOut})

            .fromTo(txt2a, .25, {opacity:0, scale: .75}, {opacity:1, scale:1, ease: Sine.easeIn}, "-=.25")
            .set(txt2b, {opacity: 1})
            .to(txt2b, .25, {opacity:0, scale:1.25, ease: Sine.easeOut})

            .fromTo(txt3a, .25, {opacity:0, scale: .75}, {opacity:1, scale:1, ease: Sine.easeIn}, "+=.5")
            .set(txt3b, {opacity: 1})
            .to(txt3b, .25, {opacity:0, scale:1.25, ease: Sine.easeOut})

            .fromTo(txt4a, .25, {opacity:0, scale: .75}, {opacity:1, scale:1, ease: Sine.easeIn}, "-=.25")
            .set(txt4b, {opacity: 1})
            .to(txt4b, .25, {opacity:0, scale:1.25, ease: Sine.easeOut})

            .fromTo(txt5a, .25, {opacity:0, scale: .75}, {opacity:1, scale:1, ease: Sine.easeIn}, "-=.25")
            .set(txt5b, {opacity: 1})
            .to(txt5b, .25, {opacity:0, scale:1.25, ease: Sine.easeOut})

            .fromTo(txt6a, .25, {opacity:0, scale: .75}, {opacity:1, scale:1, ease: Sine.easeIn}, "+=.5")
            .set(txt6b, {opacity: 1})
            .to(txt6b, .25, {opacity:0, scale:1.25, ease: Sine.easeOut})

            .fromTo(ctaa, .25, {opacity:0, scale: .75}, {opacity:1, scale:1, ease: Sine.easeIn}, "+=.75")
            .set(ctab, {opacity: 1})
            .to(ctab, .25, {opacity:0, scale:1.25, ease: Sine.easeOut});


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
