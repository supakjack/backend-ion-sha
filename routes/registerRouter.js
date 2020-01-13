var express = require('express');
var router = express.Router();

const registerController = require('../controllers/registerController');

/* GET register listing. */
router.get('/', registerController.getAllRegister);
router.get('/bar', registerController.getBarReport);
router.get('/:id', registerController.getAtRegister);

/* DELETE register listing. */
router.delete('/:id', registerController.delAtRegister);

/* put register listing. */
router.put('/count', registerController.addCountRegById);
router.put('/:id', registerController.updateRegister);

/* POST register listing. */
router.post('/', registerController.addRegister);

module.exports = router;
