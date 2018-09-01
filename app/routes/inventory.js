const express = require('express');
const router = express.Router();
const inventoryCtrl = require("./../../app/controllers/inventoryCtrl");
const appConfig = require("./../../config/appConfig")

module.exports.setRouter = (app) => {

    let baseUrl = `${appConfig.apiVersion}/inventory`;

    // defining routes.

    app.get(`${baseUrl}/getAllProducts`, inventoryCtrl.getAllProducts);
    app.post(`${baseUrl}/createProduct`, inventoryCtrl.createProduct);
    app.put(`${baseUrl}/editProduct`, inventoryCtrl.editProduct);
    app.post(`${baseUrl}/deleteProduct`, inventoryCtrl.deleteProduct);
    app.put(`${baseUrl}/buyProduct`, inventoryCtrl.buyProduct);
}
