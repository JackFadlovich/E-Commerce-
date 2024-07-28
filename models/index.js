const Buyer = require('./Buyer');
const Order = require('./Order');
const Product = require('./Product');
const Seller = require('./Seller');
const SellerProduct = require('./SellerProduct');
const Users = require('./Users');

Users.hasMany(Buyer, {
  foreignKey: 'user_id',
});

Buyer.belongsTo(Users, {
  foreignKey: 'user_id',
});

Users.hasMany(Seller, {
  foreignKey: 'user_id',
});

Seller.belongsTo(Users, {
  foreignKey: 'user_id',
});

Seller.hasMany(SellerProduct, {
    foreignKey: 'seller_id',
});

SellerProduct.belongsTo(Seller, {
    foreignKey: 'seller_id',
});

Product.hasMany(SellerProduct, {
    foreignKey: 'product_id',
});

SellerProduct.belongsTo(Product, {
    foreignKey: 'product_id',
});

Buyer.hasMany(Order, {
  foreignKey: 'buyer_id',
});

Order.belongsTo(Buyer, {
  foreignKey: 'buyer_id',
});

SellerProduct.hasMany(Order, {
  foreignKey: 'sellerproduct_id',
});

Order.belongsTo(SellerProduct, {
  foreignKey: 'sellerproduct_id',
});

module.exports = { Users, Buyer, Seller, Product, SellerProduct, Order };
