var Cylon = require('cylon');

module.exports = function(app){

Cylon.robot({

		connections: { 
			raspi: {adaptor: 'raspi'}
		},
		
		devices: {

			green: {driver: 'led', pin: 11},
			yellow: {driver: 'led', pin: 12},
			red: {driver: 'led', pin: 15},

		},

		work: function(my){

			app.route('/api/:led/:position').get(function(req, res, next){
				var led = req.params.led,
				pos = req.params.position;

				console.log(led);
				console.log(pos);

				if (pos === 'on') {

					if ( led === 'verde' ) my.green.turnOn();
					if ( led === 'rojo' ) my.red.turnOn();
					if ( led === 'amarillo') my.yellow.turnOn();

				} else {

					if ( led === 'verde' ) my.green.turnOff();
					if ( led === 'rojo' ) my.red.turnOff();
					if ( led === 'amarillo') my.yellow.turnOff();

				}

				res.sendStatus(200);

			});

		}		

	}).start();
};
