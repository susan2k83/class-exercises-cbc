var fs = require("fs");

fs.readFile("best_things_ever.txt", "utf8", function(err, data){
    console.log(data);
});