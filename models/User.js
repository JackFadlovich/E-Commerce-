const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connections');

class User extends Model 
{
  checkPassword(loginPw) {
    return bcrypt.compareSync(loginPw, this.password);
  }
}

User.init(
  {
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
   
    first_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    last_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    user_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
   
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: false,
      validate: {
        isEmail: true,
      },
    },

    phone_number: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    buyer_rating: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },

   seller_rating: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
   
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      },
    },
  {
    hooks: 
    {
      beforeCreate: async (newUserData) => 
        {
        newUserData.password = await bcrypt.hash(newUserData.password, 10);
        return newUserData;
      },
      
      beforeUpdate: async (updatedUserData) => 
        {
        updatedUserData.password = await bcrypt.hash(updatedUserData.password, 10);
        return updatedUserData;
      },
    },
    
    sequelize,
    modelName: 'user',
  }
);

module.exports = User;
