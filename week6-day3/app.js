/*
    To run this code you need to install the packages first 
    By running npm install in the your console
*/

// Add our node packages up top
// to use it throughout the whole application 
var fs = require("fs");
var request = require("request");

// checking what is in the process.argv array
console.log(process.argv)


// checking to see if process.argv[2] 
// is equal to process.argv[3]
if(process.argv[2] === process.argv[3]) {
    // if they are equal console.log true
    console.log(true);
} else {
    // if they are not equal console.log false
    console.log(false);
}

// here we are using the request module 
// to make HTTP/AJAX requests
request('http://www.google.com', function (error, response, body) {
    console.log('error:', error); // Print the error if one occurred 
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received 
    console.log('body:', body); // Print the HTML for the Google homepage. 
});

// here we are using fs module 
// to read a file from our folder
fs.readFile("log.txt", "utf8", function(error, data){
    
    //checking if there is an error
    if(error) {
        // if there is an error return it and  
        // the error to the console
        // NOTE: Whenever you return something in a function it will stop 
        // at that point in the function 
        return console.log(error);
    }

    // otherwise show us the data
    console.log(data);
});