const express = require('express');
const app = express();
const mongoose = require('mongoose');

// Database Connection
mongoose.connect(
    'mongodb+srv://dip3790:dip3790@cluster0.lhzre.mongodb.net/node_auth?retryWrites=true&w=majority',
    { useNewUrlParser: true },
    () => console.log('Database Connection Successful!'));

//Import Routes
const authRoute = require('./routes/auth');


//Route Middlewares
app.use('/api/user', authRoute);


app.listen(3000, () => console.log("Server is up and running"));