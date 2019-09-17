// Import MySQL connection.
var connection = require("../config/connection.js");

// Object for all our SQL statement functions.
var orm = {
    selectAll: function(){},
    insertOne: function(){},
    updateOne: function(){}
};

// Export the orm object for the model (burger.js).
module.exports = orm;