const express = require('express');
const connectDB = require('./config/db');
const app = express();

//Connecting to MongoDB Atlas
connectDB();

//Connecting to Atlas
app.use(express.json({ extended: false }));

//Setting API routes

app.use('/api/partners', require('./routes/api/partner'));
app.use('/api/pickup', require('./routes/api/pickup'));
// app.use('/api/deliver', require('./routes/api/deliver'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => `Server started on port ${PORT}`);
