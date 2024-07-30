const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Seller extends Model {}

Seller.init(
  {
    seller_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },

    user_id: {
      type: DataTypes.INTEGER,
      reference: {
        model: "users",
        key: "id",
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "seller",
  }
);

module.exports = Seller;
