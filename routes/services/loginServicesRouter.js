// address
var express = require('express');
var router = express.Router();

const loginServiceController = require('../../controllers/services/loginServiceController');

/* GET loginServiceController listing. */
router.get('/:name/:pass', loginServiceController.checklogin);

module.exports = router;
