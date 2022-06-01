const {Sequelize} = require('sequelize')
const {sequelize} = require('../db')

const Sauce = sequelize.define("sauces", {
  name: Sequelize.STRING,
  image: Sequelize.STRING,
});

const Item = sequelize.define("items", {
  name: Sequelize.STRING,
  price: Sequelize.FLOAT,
  description: Sequelize.STRING,
  category: Sequelize.STRING,
  imageUrl: Sequelize.STRING

});

const User = sequelize.define("users", {
  firstName: Sequelize.STRING,
  lastName: Sequelize.STRING,
  password: Sequelize.STRING,
  email: Sequelize.STRING
});

const Order = sequelize.define("orders", {
  itemName: Sequelize.STRING,
  description: Sequelize.STRING,
  quantity: Sequelize.INTEGER,
  orderDate: Sequelize.DATE
});


//model association 
User.hasMany(Order);
Order.belongsTo(User)

Order.hasMany(Item)
Item.belongsTo(Order)

User.hasMany(Item)
Item.belongsTo(User)

module.exports = {
  db: sequelize,
  Sauce, Item, User, Order
};