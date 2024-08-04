var Cylon = require("Cylon");

Cylon.api('http', {port : 3000});

Cylon.robot({
    connections: {
        arduino: { adaptor: "firmata", port: "COM3" }
    },

    devices: {
        led: { driver: 'led', pin: 11}
    },

    work: function(my) {
        every(3000, function(){
            my.led.toggle();
            console.log("LED toggle complete")
        });
    }
}).start(); 

