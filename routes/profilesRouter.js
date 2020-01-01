var express = require('express');
var router = express.Router();

const profilesController = require('../controllers/profilesController');

/* GET profiles listing. */
router.get('/', profilesController.getAllProfiles);

/* POST profiles listing. */
router.post('/', profilesController.addProfiles);

module.exports = router;
