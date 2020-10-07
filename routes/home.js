const router = require('express').Router();

router.get('/', (req, res) => {
    res.render('Hello Welcome to Node Auth API', {});
});

module.exports = router;