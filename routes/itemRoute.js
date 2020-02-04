const express = require('express');
const itemRouter = express.Router();
const ItemService = require('../services/itemService');

//Get all available items
itemRouter.get('/', function(req, res) {

  console.log(req.body)
  ItemService.getAllItems().then( items =>
    res.send(items));

});


module.exports = itemRouter;