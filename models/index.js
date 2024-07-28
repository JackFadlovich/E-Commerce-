const Buyer = require('./Buyer');
const Order = require('./Order');
const Product = require('./Product');
const Seller = require('./Seller');
const User = require('./User');

User.hasMany(Buyer, {
    foreignKey: 'user_id',
});

Buyer.belongsTo(User, {
    foreignKey: 'user_id',
});

User.hasMany(Seller, {
    foreignKey: 'user_id',
});

Seller.belongsTo(User, {
    foreignKey: 'user_id',
});

Buyer.hasMany(Order, {
    foreignKey: 'buyer_id',
});

Order.belongsTo(Buyer, {
    foreignKey: 'buyer_id',
});

Seller.belongsToMany(Product, { through: 'seller_product' });
Product.belongsToMany(Seller, { through: 'seller_product' });

module.exports = Buyer, Order, Product, Seller, User;