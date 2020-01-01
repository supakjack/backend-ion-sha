var express = require('express');
var router = express.Router();

const registerStatusController = require('../controllers/registerStatusController');

/* GET register_status listing. */
router.get('/', registerStatusController.getAllRegisterStatus);

/* POST register_status listing. */
router.post('/', registerStatusController.addRegisterStatus);

module.exports = router;
