// console.log("Hello, World!")
// var http = require("http");
// http.createServer(function (request, response) {
//     response.writeHead(200, {'Content-Type': 'text/plain'});
    
//     response.end('Hello World\n');
//  }).listen(8081);
//  console.log('Server running at http://127.0.0.1:8081/');

 var fs = require("fs");
// // fs is the file system module we will see it later
// var data = fs.readFileSync('input.txt');

// console.log(data.toString());
// console.log("Program Ended");
// var fs = require("fs");

// fs.readFile('input.txt', function (err, data) {
// //this is the callBack function
//    if (err) return console.error(err);
//   // console.log(data.toString());
// });

// //console.log("Program Ended");
// // Import events module
// var events = require('events');

// // Create an eventEmitter object
// var eventEmitter = new events.EventEmitter();

// // Create an event handler as follows
// var connectHandler = function connected() {
//    console.log('connection succesful.');
  
//    // Fire the data_received event 
//    eventEmitter.emit('data_received');
// }

// // Bind the connection event with the handler
// eventEmitter.on('connection', connectHandler);
 
// // Bind the data_received event with the anonymous function
// eventEmitter.on('data_received', function() {
//    console.log('data received succesfully.');
// });

// // Fire the connection event 
// eventEmitter.emit('connection');

// console.log("Program Ended.");
// var fs = require("fs");

// fs.readFile('input.txt', function (err, data) {
//    if (err) {
//       console.log(err.stack);
//       return;
//    }
//    console.log(data.toString());
// });
// console.log("Program Ended");

// var events = require('events');
// var eventEmitter = new events.EventEmitter();

// // listener #1
// var listner1 = function listner1() {
//    console.log('listner1 executed.');
// }

// // listener #2
// var listner2 = function listner2() {
//    console.log('listner2 executed.');
// }

// // Bind the connection event with the listner1 function
// eventEmitter.addListener('connection', listner1);

// // Bind the connection event with the listner2 function
// eventEmitter.on('connection', listner2);

// var eventListeners = require('events').EventEmitter.listenerCount
//    (eventEmitter,'connection');
// console.log(eventListeners + " Listner(s) listening to connection event");

// // Fire the connection event 
// eventEmitter.emit('connection');

// // Remove the binding of listner1 function
// eventEmitter.removeListener('connection', listner1);
// console.log("Listner1 will not listen now.");

// // Fire the connection event 
// eventEmitter.emit('connection');

// eventListeners = require('events').EventEmitter.listenerCount(eventEmitter,'connection');
// console.log(eventListeners + " Listner(s) listening to connection event");

// console.log("Program Ended.");
var fs = require("fs");

// Asynchronous read
// fs.readFile('input.txt', function (err, data) {
//    if (err) {
// //       return console.error(err);
//    }
//    //console.log("Asynchronous read: " + data.toString());
// });

// // Synchronous read
// var data = fs.readFileSync('input.txt');
// console.log("Synchronous read: " + data.toString());

// console.log("Program Ended");

/* var fs = require("fs");

// Asynchronous - Opening File
console.log("Going to open file!");
fs.open('input.txt', 'r+', function(err, fd) {
   if (err) {
      return console.error(err);
   }
   console.log("File opened successfully!");     
}); */

/* var fs = require("fs");

console.log("Going to get file info!");
fs.stat('input.txt', function (err, stats) {
   if (err) {
      return console.error(err);
   }
   console.log(stats);
   console.log("Got file info successfully!");
   
   // Check file type
   console.log("isFile ? " + stats.isFile());
   console.log("isDirectory ? " + stats.isDirectory());    
}); */
var fs = require("fs");

/* console.log("Going to write into existing file");
fs.writeFile('input.txt', 'Simply Easy Learning!', function(err) {
   if (err) {
      return console.error(err);
   }
   
   console.log("Data written successfully!");
   console.log("Let's read newly written data");
   
   fs.readFile('input.txt', function (err, data) {
      if (err) {
         return console.error(err);
      }
      console.log("Asynchronous read: " + data.toString());
   });
}); */
/* fs.appendFile('movies.txt', 'Titatnic', function (err) {
   if (err) throw err;
   console.log('Saved!');
 });
 console.log('End of code') */
/*  fs.readFile('movies.txt', function (err, data) {
   if (err) throw err;
   console.log(data);
 }); */
 // Let's try to print the value of __filename
 //console.log( __filename );
 //console.log( __dirname );
 /* function printHello() {
   console.log( "Hello, World!");
}

// Now call above function after 2 seconds
setTimeout(printHello, 2000); */
/* function printHello() {
   console.log( "Hello, World!");
}

// Now call above function after 2 seconds
var t = setTimeout(printHello, 2000);

// Now clear the timer
clearTimeout(t); */
// function printHello() {
//    console.log( "Hello, World!");
// }

// // Now call above function after 2 seconds
// setInterval(printHello, 2000);