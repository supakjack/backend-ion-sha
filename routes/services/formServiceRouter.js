// formServiceController
var express = require('express');
var router = express.Router();

const formServiceController = require('../../controllers/services/formServiceController');

/* GET formServiceController forming. */
router.get('/pf', formServiceController.getOnPf);
router.get('/pv', formServiceController.getOnPv);
router.get('/na', formServiceController.getOnNa);
router.get('/bl', formServiceController.getOnBl);
router.get('/re', formServiceController.getOnRe);
/* GET formServiceController forming. */

module.exports = router;