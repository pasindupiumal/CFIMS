const Item = require("../models/itemModel");

module.exports.getAllItems = function() {
    return Item.findAll().then( res => { response = {
        code:0,
        message:'',
        result:res

    }
    return response;} ).catch(err =>{ error = {
            code:1,
            message:err.original.sqlMessage,
            result:null
        }
    return error;})
}
