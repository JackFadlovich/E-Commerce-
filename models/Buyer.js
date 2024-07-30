const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Buyer extends Model {}

Buyer.init(
  {
    buyer_id: {
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
    modelName: "buyer",
  }
);

module.exports = Buyer;
