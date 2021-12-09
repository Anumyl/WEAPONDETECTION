function display(e){
	console.log("");
	console.log("HASH VALES");
	let n = e.length;
	var m = e[2].length;
	e[2] = e[2].substring(1,m);
	for (let i = 0; i < n; i++) 
	{
		m = e[i].length;
		e[i] = e[i].substring(0,m-1);
	}
	console.log("");
	var je = JSON.stringify(e);
	console.log(je);
	
	
var http = require('http');
var net = require('net');
var HOST = 'localhost'; 
var PORT=65432;

var ser = http.createServer(function(req, res) {
			 console.log("sending data");

		            res.setHeader('Content-Type', 'application/json');
		            res.writeHead(200,{
					    'Content-Type': 'text/plain',
					    'Access-Control-Allow-Origin' : '*',
					    'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE'
					});
		            res.end(
					JSON.stringify(e)
		            );
		        });
				ser.listen(PORT,HOST);
}

var e = process.argv;
console.log(e) ;
display(e);

