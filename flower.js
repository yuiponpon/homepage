particlesJS("particles-js", {
    "particles":{
        "number":{
            "value":80,
            "density":{
                "enable":true,
                "value_area":3866.8234439981356
            }
        },
        "color":{
            "value":"#ffffff"
        },
        "shape":{
            "type":"image",
            "stroke":{
                "width":7,
                "color":"#fff"
            },
            "image":{
                "src":"img/pink_flower.png",
                "width":100,
                "height":100
            }
        },
        "opacity":{
            "value":0.15232414578222467,
            "random":false,
            "anim":{
                "enable":false,
                "speed":0.8932849335314796,
                "opacity_min":0.08932849335314796,
                "sync":false
            }
        },
        "size":{
            "value":40,
            "random":true,
            "anim":{
                "enable":false,
                "speed":4,
                "size_min":10,
                "sync":false
            }
        },
        "line_linked":{
            "enable":true,
            "distance":150,
            "color":"#ffffff",
            "opacity":0.4,
            "width":1
        },
        "move":{
            "enable":true,
            "speed":5,
            "direction":"bottom",
            "random":true,
            "straight":false,
            "out_mode":"out",
            "bounce":false,
            "attract":{
                "enable":false,
                "rotateX":320.6824121731046,
                "rotateY":1200
            }
        }
},
"interactivity":{
    "detect_on":"canvas",
    "events":{
        "onhover":{
            "enable":true,
            "mode":"grab"
        },
        "onclick":{
            "enable":true,
            "mode":"push"
        },
        "resize":true
    },
    "modes":{
        "grab":{
            "distance":400,
            "line_linked":{
                "opacity":1
            }
        },
        "bubble":{
            "distance":400,
            "size":40,
            "duration":2,
            "opacity":8,
            "speed":3
        },
        "repulse":{
            "distance":200,
            "duration":0.4
        },
        "push":{
            "particles_nb":4
        },
        "remove":{
            "particles_nb":2
        }
    }
},
"retina_detect":true
});