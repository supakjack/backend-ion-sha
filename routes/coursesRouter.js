var express = require('express');
var router = express.Router();

const coursesController = require('../controllers/coursesController');

/* GET Classes listing. */
router.get('/', coursesController.getAllCourses);
router.get('/:id', coursesController.getAtCourses);


/* DELETE Classes listing. */
router.delete('/:id', coursesController.delAtCourses);

/* POST Classes listing. */
router.post('/', coursesController.addCourses);

module.exports = router;
