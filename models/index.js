const Buyer = require('./Buyer');
const Orders = require('./Orders');
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

Buyer.hasMany(Orders, {
    foreignKey: 'buyer_id',
});

Orders.belongsTo(Buyer, {
    foreignKey: 'buyer_id',
});

