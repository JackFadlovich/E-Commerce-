const { Model, DataTypes } = require('sequelize');
const sequelize = require('./config/connection');

class Orders extends Model {}

Orders.init(
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
    },
    {
        sequelize,
        modelName: 'orders'
    }
);

module.exports = Orders;