const router = require('express').Router();

router.get('/', (req, res) => {
    res.render('index', {
        title: 'Hello, world!',
        content: 'How are you?'
    });
});

module.exports = router;