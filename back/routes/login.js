const express = require('express');
const router = express.Router();
const login = require('../login/login');

router.post('/', (req, res, next) => {
  login(req, res);
});

module.exports = router;
