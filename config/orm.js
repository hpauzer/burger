 //Import (require) `connection.js` into `orm.js`
 var connection = require("../config/connection.js");


 //In the `orm.js` file, create the methods that will execute the necessary MySQL commands in the controllers. 
 var controllers = require("../controllers/burgers_controllers.js");
 //These are the methods you will need to use in order to retrieve and store data in your database.
 //* `selectAll()` 
 var tableName = "burgers_db";

 var orm = {

         // Here our ORM is creating a simple method for performing a query of the entire table.
         // We make use of the callback to ensure that data is returned only once the query is done.
         selectAll: function(callback) {
             var s = "SELECT * FROM " + tableName;

             connection.query(s, function(err, result) {
                 callback(result);
             });
         },
         //* `insertOne()` 
         insertOne: function(callback) {
             var i = "INSERT INTO " + tableName + " (burger_name, devoured) VALUES (?,?)";
             connection.query(i, function(err, result) {
                 callback(result);
             });
         }

         //* `updateOne()` 
             updateOne: function(callback) {
                 var u = "UPDATE " + tableName + " SET text=? WHERE id=?";

                 connection.query(u, [
                     tableName.text, tableName.id
                 ], function(err, result) {

                     callback(result);
                     console.log(u);
                 });
             }
             //* Export the ORM object in `module.exports`.*/
         module.exports = orm