var express = require('express');
var router = express.Router();

const usersStatusController = require('../controllers/usersStatusController');

/* GET users listing. */
router.get('/', usersStatusController.getAllStatus);
router.get('/:id', usersStatusController.getAtStatus);

/* POST users listing. */
router.post('/', usersStatusController.addStatus);

module.exports = router;
