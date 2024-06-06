const Bus = require('../models/busModel');

const getAllBuses = async (req, res) => {
  try {
    const buses = await Bus.find();
    res.json(buses);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

const addBus = async (req, res) => {
  const { busNumber, route, seatsAvailable } = req.body;

  try {
    const newBus = new Bus({
      busNumber,
      route,
      seatsAvailable,
    });

    const bus = await newBus.save();
    res.json(bus);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

module.exports = { getAllBuses, addBus };
