const {sauces, items, users, orders} = require('./seedData.js');

const {sequelize} = require('./db');
const {Sauce, Item, User, Order} = require('./models');


const seed = async () => {

    try {
        // drop and recreate tables per model definitions
        await sequelize.sync({ force: true });
    
        // insert data
        await Promise.all(sauces.map(sauce => Sauce.create(sauce)));
        await Promise.all(items.map(item => Item.create(item)));
        await Promise.all(users.map(user => User.create(user)));
        await Promise.all(orders.map(order => Order.create(order)));

        console.log("db populated!");
    } catch (error) {
        console.error(error);
    }
}

seed();

