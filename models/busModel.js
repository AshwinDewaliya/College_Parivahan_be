const mongoose = require('mongoose');

const busSchema = new mongoose.Schema({
  busNumber: { type: String, required: true, unique: true },
  route: { type: String, required: true },
  seatsAvailable: { type: Number, required: true },
});

const Bus = mongoose.model('Bus', busSchema);

module.exports = Bus;
