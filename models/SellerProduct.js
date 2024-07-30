const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class SellerProduct extends Model {}

SellerProduct.init(
  {
    sellerproduct_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },

    seller_id: {
      type: DataTypes.INTEGER,
      reference: {
        model: "seller",
        key: "id",
      },
    },

    product_id: {
      type: DataTypes.INTEGER,
      reference: {
        model: "product",
        key: "id",
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "sellerproduct",
  }
);
module.exports = SellerProduct;
