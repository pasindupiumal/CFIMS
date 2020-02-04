const express = require('express');
const router = express.Router();
const itemRouter = require('./routes/itemRoute');

router.use('/items/', itemRouter);

module.exports = router;