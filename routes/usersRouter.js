var express = require('express');
var router = express.Router();

const usersController = require('../controllers/usersController');

/* GET users listing. */
router.get('/', usersController.getAllUser);
router.get('/:id', usersController.getAtUser);

/* DELETE users listing. */
router.delete('/:id', usersController.delAtUser);

/* POST users listing. */
router.post('/', usersController.addUser);

module.exports = router;
