const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors')

dotenv.config();

const adminRoutes = require('./routes/adminRoutes');
const busRoutes = require('./routes/busRoutes');

const app = express();

const corsOptions = {
    origin: 'http://127.0.0.1:5500', // allow this origin
    optionsSuccessStatus: 200 // for legacy browsers
  };
  
  app.use(cors(corsOptions));
  
// Middleware to parse JSON
app.use(express.json());

const PORT = process.env.PORT || 5000;

// Database connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.log(err));

// Routes
app.use('/api/admin', adminRoutes);
app.use('/api/bus', busRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
