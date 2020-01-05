var express = require('express');
var router = express.Router();

const applicationsController = require('../controllers/applicationsController');

/* GET Classes listing. */
router.get('/', applicationsController.getAllApplications);
router.get('/:id', applicationsController.getAtApplications);

/* delete Classes listing. */
router.delete('/:id', applicationsController.delAtApplications);

/* put Classes listing. */
router.put('/:id', applicationsController.updateApplications);

/* POST Classes listing. */
router.post('/', applicationsController.addApplications);

module.exports = router;
