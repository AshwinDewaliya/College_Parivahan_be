const express = require('express');
const router = express.Router();
const { getAllBuses, addBus } = require('../controllers/busController');
const auth = require('../middleware/authMiddleware');

router.get('/', auth, getAllBuses);
router.post('/', auth, addBus);

module.exports = router;
