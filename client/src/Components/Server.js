/*function display(e){
	console.log("");
	console.log("HASH VALES");
	let n = e.length;
	for (let i = 0; i < n; i++) 
	{
		console.log(e[i]);
	}
	console.log("");
	console.log(e);
	var je = JSON.stringify(e);
	console.log(je);
}
*/

var http = require('http');
var net = require('net');
var HOST = 'localhost'; 
var PORT=65432;
var m;
const e = ["me","march","bubble"];

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