var express = require('express');
var router = express.Router();

const registerStatusController = require('../controllers/registerStatusController');

/* GET register_status listing. */
router.get('/', registerStatusController.getAllRegisterStatus);
router.get('/:id', registerStatusController.getAtRegisterStatus);

/* DELETE register_status listing. */
router.delete('/:id', registerStatusController.delAtRegisterStatus);

/* put register_status listing. */
router.put('/:id', registerStatusController.updateRegisterStatus);

/* POST register_status listing. */
router.post('/', registerStatusController.addRegisterStatus);

module.exports = router;
