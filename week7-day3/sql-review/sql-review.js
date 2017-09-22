var mysql  = require("mysql");
var connection = mysql.createConnection ({
    host: "localhost",
    port: 3306,
    user: "root",

    password: "SR1024xo",
    database: "film_db"
});

connection.connect(function(err) {
if(err) throw err;
console.log("Connected as id" + connection.threadId);
afterConnection();
});

function afterConnection(){
    connection.query("SELECT * FROM film", function(err, res){
        if (err) throw err;
        console.log(res);
        connection.end();
    })
}
