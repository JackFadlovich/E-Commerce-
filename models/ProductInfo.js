const { Model, DataTypes } = require('sequelize');
const sequelize = require('./config/connection');

class ProductInfo extends Model {}

ProductInfo.init(
    {
        product_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },

        product_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        category: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        product_description: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        manufacturer: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        price: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },

        product_rating: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    },
    {
        sequelize,
        modelName: 'productinfo'
    }
);

module.exports = ProductInfo;