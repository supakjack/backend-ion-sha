var express = require('express');
var router = express.Router();

const usersStatusController = require('../controllers/usersStatusController');

/* GET users listing. */
router.get('/', usersStatusController.getAllStatus);
router.get('/:id', usersStatusController.getAtStatus);

/* DELETE users listing. */
router.delete('/:id', usersStatusController.delAtStatus);

/* POST users listing. */
router.post('/', usersStatusController.addStatus);

module.exports = router;
