// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burger = {
    all: function(cb){
        orm.selectAll
    }
};

// Export the database functions for the controller (burgers_controller.js).
module.exports = burger;