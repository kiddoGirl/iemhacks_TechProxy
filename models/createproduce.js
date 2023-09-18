const mongoose = require('mongoose');

const produceSchema = new mongoose.Schema({
  image: {
    data: Buffer,
    contentType: String, 
  },
  produceName: {
    type: String,
  },
  produceQuantity: {
    type: Number,
  },
  produceAmount: {
    type: Number,
  },
  dietType: {
    type: String,
    enum: ['Vegetarian', 'Vegan', 'Non-Vegetarian', 'Flowers', 'Horticulture Produce', 'Greenhouse Produce'],
 },
  speciality: {
    type: String,
  },
  manufacture: {
    type: String,
  },
  itemFrom: {
    type: String,
  },
  brand: {
    type: String,
  },
  itemWeight: {
    type: String,
  },
  numberOfItems: {
    type: Number,
  },
  aboutItem: {
    type: String,
  },
  userNameFarmHub: {
    type: String,
  },
});

const Produce = mongoose.model('Produce', produceSchema);

module.exports = Produce;
