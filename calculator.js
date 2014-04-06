var http = require('http');
var url = require('url');
var fibonaciModule = require('./fibonaci.js');
http.createServer(function(request,response) {
	response.writeHead(200, {'Content-Type': 'text/plain'});
	if(request.method == 'GET') {
		var parsedUrl = url.parse(request.url,true,false);
		var a = parseInt(parsedUrl.query['a']);
		var b = parseInt(parsedUrl.query['b']);
		var num = parseInt(parsedUrl.query['num']);
		switch(parsedUrl.pathname) {
		case '/add': response.write('The result is ' + (a+b)); break;
		case '/substract': response.write('The result is ' + (a-b)); break;
		case '/multiply': response.write('The result is ' + (a*b)); break;
		case '/divide': 
			if(b!=0) {
				response.write('The result is ' + (a/b));
			} else {
				response.write('You are trying to make me fail! b is 0'); 
			}
			break;
		case '/fibonaci': response.write('The result is ' + fibonaciModule.fibonaci(num) ); break;
		default: break;
		}
	} else {
		response.write('This rest API works with GET only');	
	}			
	
	response.end();
}).listen(5000);
