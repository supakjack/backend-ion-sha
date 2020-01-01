var express = require('express');
var router = express.Router();

const registerController = require('../controllers/registerController');

/* GET register listing. */
router.get('/', registerController.getAllRegister);

/* POST register listing. */
router.post('/', registerController.addRegister);

module.exports = router;
