

var request = require('request');
var getWeather = (lat,lng,callback) =>{
request({url:`https://api.darksky.net/forecast/5e4edd4f2a73c0da35c2d213607d97d5/${lat},${lng}`,
	json:true},
	(error,response,body)=>{
		if(!error&&response.statusCode===200)
		{
		
		callback(undefined,{
			temperature:body.currently.temperature,
			apparentTemperature: body.currently.apparentTemperature
			
		});
		}
		else {		
			callback('Unable to fetch weather');
			}
		
	});
};
module.exports.getWeather = getWeather;