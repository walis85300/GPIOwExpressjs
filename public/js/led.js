
module.exports = function(app){

	app.route('/api/:led/:position').get(function(req, res, next){

		var led = req.params.led,
			pos = req.params.position;

		console.log(led + ' ' + pos);

		res.sendStatus(200);

	});

};