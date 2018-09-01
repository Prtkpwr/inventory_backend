'use strict'
/**
 * Module Dependencies
 */
const mongoose = require('mongoose'),
  Schema = mongoose.Schema;

let inventorySchema = new Schema({
product: {
    type: String,
    default:'',
    unique:true
},
quantity: {
    type: Number,
    default:'',
    unique:false
}
});


mongoose.model('Inventory', inventorySchema);