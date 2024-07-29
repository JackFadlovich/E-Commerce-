const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

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

    sellerproduct_id: {
      type: DataTypes.INTEGER,
      reference: {
        model: 'sellerproduct',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'order',
  }
);

module.exports = Order;
