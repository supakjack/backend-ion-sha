// address
var express = require('express');
var router = express.Router();

const addressController = require('../controllers/addressController');

/* GET address listing. */
router.get('/', addressController.getAllAddress);
router.get('/:id', addressController.getAddressAt);

/* DELETE address listing. */
router.delete('/:id', addressController.delAddressAt);

/* put address listing. */
router.put('/:id', addressController.updateAddress);

/* POST address listing. */
router.post('/', addressController.addAddress);

module.exports = router;
