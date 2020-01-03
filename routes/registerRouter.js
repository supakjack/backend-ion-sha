var express = require('express');
var router = express.Router();

const registerController = require('../controllers/registerController');

/* GET register listing. */
router.get('/', registerController.getAllRegister);
router.get('/:id', registerController.getAtRegister);

/* DELETE register listing. */
router.delete('/:id', registerController.delAtRegister);

/* POST register listing. */
router.post('/', registerController.addRegister);

module.exports = router;
