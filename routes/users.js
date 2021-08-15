const express = require('express');

const router = express.Router();

// @route POST api/users
// desc Register Users
// @access Public

router.post('/', (req, res) => {
    res.send('Register Users');
});

module.exports = router;