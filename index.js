const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');

//Import Routes
const authRoute = require('./routes/auth');

dotenv.config();

// Database Connection
mongoose.connect(
    process.env.MONGO_URI,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    },
    () => console.log('Database Connection Successful!')
);

//MiddleWare
app.use(express.json());


//Route Middlewares
app.use('/api/user', authRoute);


app.listen(3000, () => console.log("Server is up and running"));