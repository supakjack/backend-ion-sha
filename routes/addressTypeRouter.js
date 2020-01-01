// addressType
var express = require('express');
var router = express.Router();

const addressTypeController = require('../controllers/addressTypeController');

/* GET addressType listing. */
router.get('/', addressTypeController.getAllAddressType);

/* POST addressType listing. */
router.post('/', addressTypeController.addAddressType);

module.exports = router;
