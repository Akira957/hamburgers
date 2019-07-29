var connection = require("./connection.js");

function printQuestionMarks(num) {
  var arr = [];

  for (var i = 0; i < num; i++) {
    arr.push("?");
  }

  return arr.toString();
}



var orm = {
    selectAll: function(tableInput, cb){
        var queryString = "SELECT * FROM burgers";
        connection.query(queryString, function(err, result) {
            if (err) throw err;
            cb(result);
            // console.log(result);
    });
},
insertOne: function(vals, cb) {
  var queryString = `INSERT INTO burgers(burger_name) VALUES ('${vals}')`
  
  
  console.log(queryString);

  connection.query(queryString,function(err, result) {
    if (err) {
      throw err;
    }

    cb(result);
  });
},
  updateOne: function(condition, cb) {
    var queryString = `UPDATE burgers SET devoured = true WHERE burgerID = "${condition}"`;

    console.log(queryString);

    connection.query(queryString, function(err, result) {
      if (err) throw err;
      cb(result);
      console.log(result);
    });
},

};

module.exports = orm;
