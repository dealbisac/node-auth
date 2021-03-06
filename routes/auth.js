const router = require('express').Router();
const User = require('../model/User');
const bcrpyt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { registerValidation, loginValidation } = require('../validation');


router.post('/register', async (req, res) => {
    // Validation of the user before making user
    const { error } = registerValidation(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    //Checking if the user is already in the database
    const emailExist = await User.findOne({ email: req.body.email });
    if (emailExist) return res.status(400).send('Email already exists');

    //Hash passwords
    const salt = await bcrpyt.genSalt(10);
    const hashedPassword = await bcrpyt.hash(req.body.password, salt);

    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: hashedPassword
    });
    try {
        const savedUser = user.save();
        // res.send({ user: user._id });
        res.send('Registered Succesfully !');
    } catch (err) {
        res.status(400).send(err);
    }
});

router.post('/login', async (req, res) => {
    // Validation of the user before logging in  user
    const { error } = loginValidation(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    //Checking if email exists in the database
    const user = await User.findOne({ email: req.body.email });
    if (!user) return res.status(400).send('Email donot exist.');

    //Password is correct
    const validPass = await bcrpyt.compare(req.body.password, user.password);
    if (!validPass) return res.status(400).send('Invalid Password.');

    //Create and assign a token.
    const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET);
    // res.header('auth-token', token).send(token);
    res.header('auth-token', token);

    res.send('Logged in!');

});
module.exports = router;