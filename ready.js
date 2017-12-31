var Gpio = require('onoff').Gpio
var  led = new Gpio(4, 'out')

//led.writeSync(0)
console.log("Led value: " + led.readSync());

setTimeout(function(){
      led.writeSync(0)
      console.log("Led value: " + led.readSync());
},2000);



//console.log("Led value: " + led.readSync());
//setTimeout(function(){
//	led.writeSync(1)
//	console.log("Led value: " + led.readSync());
//},2000);
/*
    
	led.writeSync(1)
    
    setTimeout(function() {
       led.writeSync(0);  // Turn LED off.
       //led.unexport();    // Unexport GPIO and free resources
    }, 1500);

*/
