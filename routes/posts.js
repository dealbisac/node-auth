const router = require('express').Router();
const User = require('../model/User');
const verify = require('./verifyToken');

router.get('/', verify, (req, res) => {
    res.json({
        posts: {
            title: "Hello Everyone Welcome !",
            description: " Welcome to the very first post of the MERN authetication, This is the backend of the system."
        }
    }
    // res.send(req.user);
    // User.findbyOne({ _id: req.user });
});

module.exports = router;