const mongoose = require('mongoose');
const response = require('./../libs/responseLib')
const logger = require('./../libs/loggerLib');
const validateInput = require('../libs/paramsValidationLib')
const check = require('../libs/checkLib')

/* Models */
const InventoryModel = mongoose.model('Inventory')


// Get All Products

let getAllProducts = (req, res) => {

    InventoryModel.find(function (err, result) {

        if (err) {
            res.send(err);
        } else {
            res.send(result);
        }
    });

}// Get All Products

// Create Product 
let createProduct = (req, res) => {
    var newProduct = new InventoryModel({

        product : req.body.product,
        quantity : req.body.quantity
    });

    // save 
    newProduct.save(function (err, result) {
        if (err) {
            res.send(err);
        } else {
            res.send({"status": 200,"result":result});
        }
    });

}// end of Create Product  

////PUT to Edit Product
let editProduct = (req, res) => {
    var update = req.body;

    // findOneAndUpdate
    InventoryModel.findOneAndUpdate({
        "_id": req.body.id
    }, update, function (err, result) {

        if (err) {
            res.send(err);
        } else {
            console.log(result);
            res.send({"status": 200,"result":result});
        }

    }); // findOneAndUpdate ends

} // end of //PUT to Edit Product



// POST request to Delete 
let deleteProduct = (req, res) => {
    InventoryModel.remove({
        _id: req.body.id
    }, function (err, result) {


        if (err) {
            res.send(err);
        } else {
            res.send({
                status: 200
            });
        }

    }); //  remove blog ends
}

//GET request to find a particular
let buyProduct = (req, res) => {
    InventoryModel.findOneAndUpdate({
        "_id": req.body._id
    }, update, function (err, result) {

        if (err) {
            res.send(err);
        } else {
            console.log(result);
            res.send({"status": 200,"result":result});
        }

    });
}



module.exports = {

    getAllProducts: getAllProducts,
    createProduct: createProduct,
    editProduct: editProduct,
    deleteProduct: deleteProduct,
    buyProduct: buyProduct
}// end exports