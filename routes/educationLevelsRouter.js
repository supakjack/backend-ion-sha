var express = require('express');
var router = express.Router();

const educationLevelsController = require('../controllers/educationLevelsController');

/* GET terms listing. */
router.get('/', educationLevelsController.getAllEducationLevels);
router.get('/:id', educationLevelsController.getAtEducationLevels);

/* POST terms listing. */
router.post('/', educationLevelsController.addEducationLevels);

module.exports = router;
