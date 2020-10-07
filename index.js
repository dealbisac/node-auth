const express = require('express');
const app = express();
const dotenv = require('dotenv')
const mongoose = require('mongoose');

dotenv.config();

// Database Connection
mongoose.connect(process.env.DB_CONNECT, { useNewUrlParser: true }, ()
    => console.log('Database Connection Successful!')
);

//Import Routes
const authRoute = require('./routes/auth');


//Route Middlewares
app.use('/api/user', authRoute);


app.listen(3000, () => console.log("Server is up and running"));