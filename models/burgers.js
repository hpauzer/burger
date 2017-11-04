//* Inside `burger.js`, import `orm.js` into `burger.js`
var orm = require("../config/orm.js");

//* Also inside `burger.js`, create the code that will call the ORM functions using burger specific input for the ORM.

return Burger;

module.exports = function(orm, DataTypes) {
    var Burger = orm.define("Burger", {
        burger_name: {
            type: DataTypes.STRING,
            allowNull: false,

            validate: {

                len: [1, 140]
            }
        },
        devoured: {
            type: DataTypes.BOOLEAN,

            defaultValue: false
        }
    });
};

//* Export at the end of the `burger.js` file. */
module.exports = Burger;