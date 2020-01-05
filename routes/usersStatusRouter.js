var express = require('express');
var router = express.Router();

const usersStatusController = require('../controllers/usersStatusController');

/* GET users listing. */
router.get('/', usersStatusController.getAllStatus);
router.get('/:id', usersStatusController.getAtStatus);

/* DELETE users listing. */
router.delete('/:id', usersStatusController.delAtStatus);

/* put users listing. */
router.put('/:id', usersStatusController.updateStatus);

/* POST users listing. */
router.post('/', usersStatusController.addStatus);

module.exports = router;
