const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const Seller = sequelize.define('seller',{
    id:{
        type:Sequelize.DataTypes.INTEGER,
        allowNull:false,
        autoIncrement:true,
        primaryKey:true
    },
    name:{
        type:Sequelize.DataTypes.STRING,
        allowNull:false
    },
    type:{
        type:Sequelize.DataTypes.STRING,
        allowNull:false
    },
    price:{
        type:Sequelize.DataTypes.INTEGER,
        allowNull:false
    }
})

module.exports = Seller;