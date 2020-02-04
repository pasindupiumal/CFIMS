const sequelize = require("sequelize");
const database = require("../connection/connection");

const item = database.seq.define(
    "item",
    {
        itemType:{
            type:sequelize.STRING
        },
        itemName:{
            type:sequelize.STRING
        },
        itemModel:{
            type:sequelize.STRING
        },
        itemQR:{
            type:sequelize.STRING
        },
        itemStatus:{
            type:sequelize.STRING
        },
        itemCapacity:{
            type:sequelize.FLOAT
        },
        itemImage:{
            type:sequelize.STRING
        }

    },
   { timestamps:false}
    
)
module.exports = item;