var express = require('express');
var router = express.Router();

const applicationsStatusController = require('../controllers/applicationsStatusController');

/* GET users listing. */
router.get('/', applicationsStatusController.getAllApplicationsStatus);

/* POST users listing. */
router.post('/', applicationsStatusController.addApplicationsStatus);

module.exports = router;
