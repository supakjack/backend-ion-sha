var express = require('express');
var router = express.Router();

const classesController = require('../controllers/classesController');

/* GET Classes listing. */
router.get('/', classesController.getAllClasses);
router.get('/:id', classesController.getAtClasses);

/* DELETE Classes listing. */
router.delete('/:id', classesController.delAtClasses);

/* put Classes listing. */
router.put('/:id', classesController.updateClasses);

/* POST Classes listing. */
router.post('/', classesController.addClasses);

module.exports = router;
