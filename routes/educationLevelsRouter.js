var express = require('express');
var router = express.Router();

const educationLevelsController = require('../controllers/educationLevelsController');

/* GET terms listing. */
router.get('/', educationLevelsController.getAllEducationLevels);
router.get('/stategroup', educationLevelsController.getEducationLevelsGroup);
router.get('/:id', educationLevelsController.getAtEducationLevels);


/* DELETE terms listing. */
router.delete('/:id', educationLevelsController.delAtEducationLevels);

/* put terms listing. */
router.put('/:id', educationLevelsController.updateEducationLevels);

/* POST terms listing. */
router.post('/', educationLevelsController.addEducationLevels);

module.exports = router;
