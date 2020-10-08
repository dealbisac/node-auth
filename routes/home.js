const router = require('express').Router();

router.get('/', (req, res) => {
    res.render('layout.hbs', {
        title: 'Hello, world!',
        content: 'How are you?'
    });
});

module.exports = router;