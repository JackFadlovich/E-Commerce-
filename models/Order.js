const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connections');

class Order extends Model {}

Order.init(
    {
        order_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        
        shipping_info: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        buyer_id: {
            type: DataTypes.INTEGER,
            reference: {
                model: 'buyer',
                key: 'id',
            },
        },

        product_id: {
            type: DataTypes.INTEGER,
            reference: {
                model: 'seller_product',
                key: 'product_id',
            },
        },

        seller_id: {
            type: DataTypes.INTEGER,
            reference: {
                model: 'seller_product',
                key: 'seller_id',
            },
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'order'
    }
);

module.exports = Order;