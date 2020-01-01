var express = require('express');
var router = express.Router();

const applicationsController = require('../controllers/applicationsController');

/* GET Classes listing. */
router.get('/', applicationsController.getAllApplications);

/* POST Classes listing. */
router.post('/', applicationsController.addApplications);

module.exports = router;
