// CRUD - Create, Read, Update, Delete 

//Create - INSERT INTO <table-name>
//Read - SELECT * FROM <table-name>
//Update - UPDATE <table-name> SET <item> WHERE <item> = <query>
//Delete - DELETE <table-name> WHERE <item> = <query>

var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "SR1024xo",
  database: "music_db"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId + "\n");
  createSong();
});


//CREATE song
function createSong() {
  console.log("Inserting a new product...\n");
  var query = connection.query(
    "INSERT INTO music SET ?",
    {
      title: "Chainsmoker",
      artist: "Coldplay",
      genre: "Rock"
    },
    function(err, res) {
      console.log(res.affectedRows + " song inserted!\n");
      // Call updateProduct AFTER the INSERT completes
      updateSong();
    }
  );

  // logs the actual query being run
  console.log(query.sql);
}

//Update
function updateSong() {
  console.log("Updating all rock songs...\n");
  var query = connection.query(
    "UPDATE music SET ? WHERE ?",
    [
      {
        genre: "Super Rock"
      },
      {
        genre: "Rock"
      }
    ],
    function(err, res) {
      console.log(res.affectedRows + " songs updated!\n");
      // Call deleteProduct AFTER the UPDATE completes
      deleteProduct();
    }
  );

  // logs the actual query being run
  console.log(query.sql);
}

//Delete
function deleteProduct() {
  console.log("Deleting all strawberry icecream...\n");
  connection.query(
    "DELETE FROM music WHERE ?",
    {
      genre: "Super Rock"
    },
    function(err, res) {
      console.log(res.affectedRows + " songs deleted!\n");
      // Call readProducts AFTER the DELETE completes
      readProducts();
    }
  );
}

//Read 
function readProducts() {
  console.log("Selecting all products...\n");
  connection.query("SELECT * FROM songs", function(err, res) {
    if (err) throw err;
    // Log all results of the SELECT statement
    console.log(res);
    connection.end();
  });
}
