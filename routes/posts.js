const router = require('express').Router();

router.get('/', (req, res) => {
    res.json({
        posts: {
            title: "Hello Everyone Welcome !",
            description: " Welcome to the very first post of the MERN authetication, This is the backend of the system."
        }
    });
});

module.exports = router;