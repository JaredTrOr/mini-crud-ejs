const Sequelize = require('sequelize');

//Models
const UserModel = require('../models/User');
const ProductModel = require('../models/Product');
const PurchaseModel = require('../models/Purchase');
const AdminModel = require('../models/Admin');

const sequelize = new Sequelize(
    process.env.DBNAME,
    process.env.DBUSERNAME,
    process.env.DBPASSWORD,
    {
        host: process.env.HOSTNAME,
        dialect: 'mysql'
    }
);

const User = UserModel(sequelize, Sequelize);
const Product = ProductModel(sequelize, Sequelize);
const Purchase = PurchaseModel(sequelize, Sequelize);
const Admin = AdminModel(sequelize, Sequelize);

//Associations
//User can make many purchases
User.hasMany(Purchase);
Purchase.belongsTo(User);
//Many products can be purchased
Product.hasMany(Purchase);
Purchase.belongsTo(Product);

sequelize.sync({force: false})
.then(() => {
    console.log('Connection and tables syncronized');
})
.catch(err => {
    console.log(`Error in connection with mysql: ${err}`);
});

module.exports = {
    User, 
    Product,
    Purchase,
    Admin
};