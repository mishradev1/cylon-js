var Cylon = require("Cylon");

Cylon.robot({
    connections: {
        arduino: { adaptor: "firmata", port: "COM3" }
    },

    devices: {
        led: { driver: 'led', pin: 12}
    },

    work: function(my) {
        every(3000, function(){
            my.led.toggle();
            console.log("LED toggle complete")
        });
    }
}).start();