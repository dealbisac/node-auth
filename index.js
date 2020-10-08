const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');

//Import Routes
const authRoute = require('./routes/auth');
const postRoute = require('./routes/posts');
// const homeRoute = require('./routes/home');

dotenv.config();

// Database Connection
const db = process.env.MONGO_URI || 'test';
mongoose.connect(
    db,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    },
    () => console.log('Database Connection Successful!')
);

// View Engine
// app.engine('html', require('ejs').renderFile);
// app.set('view engine', 'html');

//MiddleWare
app.use(express.json());


//Route Middlewares
app.use('/api/user', authRoute);
app.use('/api/posts', postRoute);
// app.use('/', homeRoute);

//Define the port
const port = process.env.PORT || 3000;
app.listen(port, () => console.log("Server is up and running to port 3000"));