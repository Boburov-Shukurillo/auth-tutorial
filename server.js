require('dotenv').config()
const express = require("express")
const mongoose = require("mongoose")
const app = express();
const authRoutes = require('./routes/auth');

// Middleware
app.use(express.json());


// Middleware
app.use(express.json());

// Define Routes
app.use('/api/auth', authRoutes);

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));