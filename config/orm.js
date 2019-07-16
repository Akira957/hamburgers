var connection = require("../config/connection.js");

var orm = {
    selectAll: function(tableInput, cb){
        var queryString = "SELECT * FROM burgers";
        connection.query(queryString, function(err, result) {
            if (err) throw err;
            cb(result);
            console.log(result);
    });
},
  insertOne: function(whatToSelect, tableInput) {
    var queryString = "SELECT ?? FROM ??";
    connection.query(queryString, [whatToSelect, tableInput], function(err, result) {
      if (err) throw err;
      cb(result);
      console.log(result);
    });
  },
  updateOne: function(tableInput, colToSearch, valOfCol) {
    var queryString = "SELECT * FROM ?? WHERE ?? = ?";

    console.log(queryString);

    connection.query(queryString, [tableInput, colToSearch, valOfCol], function(err, result) {
      if (err) throw err;
      cb(result);
      console.log(result);
    });
},

};

module.exports = orm;
