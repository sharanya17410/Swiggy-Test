const express = require('express');
const connectDB = require('./config/db');
const app = express();

connectDB();

app.use(express.json({ extended: false }));
//app.use(express.static('public'));
//app.get('/', (req, res) => res.send('Hello WOrld'));

app.use('/api/partners', require('./routes/api/partner'));
app.use('/api/pickup', require('./routes/api/pickup'));
app.use('/api/deliver', require('./routes/api/deliver'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => `Server started on port ${PORT}`);
