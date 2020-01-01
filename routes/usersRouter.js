var express = require('express');
var router = express.Router();

const usersController = require('../controllers/usersController');

/* GET users listing. */
router.get('/', usersController.getAllUser);

/* POST users listing. */
router.post('/', usersController.addUser);

module.exports = router;
