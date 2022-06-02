const {sauces, items, users, orders} = require('./seedData.js');

const {sequelize} = require('./db');
const {Sauce, Item, User, Order} = require('./models');


const seed = async () => {

    try {
        // drop and recreate tables per model definitions
        await sequelize.sync({ force: true });
    
        // insert data
        await Promise.all(sauces.map(sauce => Sauce.create(sauce)));
        const createdItems = await Promise.all(items.map(item => Item.create(item)));
        const createdUsers = await Promise.all(users.map(user => User.create(user)));
        const createdOrders = await Promise.all(orders.map(order => Order.create(order)));
         
        //Associated data
         createdUsers[0].addItems([createdItems[3]],[createdItems[4]],[createdItems[0]]);
         createdUsers[1].addItems([createdItems[1]]);
         createdUsers[2].addItems([createdItems[5]],[createdItems[6]],[createdItems[2]]);
         
         createdUsers[2].addOrders([createdOrders[0]],[createdOrders[1]],[createdOrders[2]])

         createdOrders[0].addItems([createdItems[5]],[createdItems[3]],[createdItems[1]])
         createdOrders[1].addItems([createdItems[0]],[createdItems[4]],[createdItems[2]])
         createdOrders[2].addItems([createdItems[7]],[createdItems[8]],[createdItems[9]])
         console.log("db populated!");
    } catch (error) {
        console.error(error);
    }
}

seed();

