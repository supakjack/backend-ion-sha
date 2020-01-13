var express = require('express');
var router = express.Router();

const applicationsController = require('../controllers/applicationsController');

/* GET Classes listing. */
router.get('/last/:id', applicationsController.getLastId);
router.get('/', applicationsController.getAllApplications);
router.get('/:id', applicationsController.getAtApplications);
router.get('/tab1/:id',applicationsController.getAtApplicationsTab1)

/* delete Classes listing. */
router.delete('/:id', applicationsController.delAtApplications);

/* put Classes listing. */
router.put('/:id', applicationsController.updateApplications);

/* patch Classes listing. */
router.patch('/pass/:id', applicationsController.updateAppPass);
router.patch('/fail/:id', applicationsController.updateAppFail);
router.patch('/cancel/:id', applicationsController.updateAppCancel);

/* POST Classes listing. */
router.post('/', applicationsController.addApplications);

module.exports = router;
