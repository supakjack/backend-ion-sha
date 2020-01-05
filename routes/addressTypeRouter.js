// addressType
var express = require('express');
var router = express.Router();

const addressTypeController = require('../controllers/addressTypeController');

/* GET addressType listing. */
router.get('/', addressTypeController.getAllAddressType);
router.get('/:id', addressTypeController.getATAddressType);

/* DELETE addressType listing. */
router.delete('/:id', addressTypeController.delAddressType);

/* PUT addressType listing. */
router.put('/:id', addressTypeController.updateAddressType);

/* POST addressType listing. */
router.post('/', addressTypeController.addAddressType);

module.exports = router;