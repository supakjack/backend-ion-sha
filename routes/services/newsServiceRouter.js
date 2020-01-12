// session
var express = require('express');
var router = express.Router();

const newsServiceController = require('../../controllers/services/newsServiceController');

/* GET session listing. */
router.get('/', newsServiceController.getReg);
/* GET session listing. */

/* GET session listing. */
router.get('/open', newsServiceController.getRegDistinct);
/* GET session listing. */

/* GET session listing. */
router.get('/opentoup/:id', newsServiceController.getRegUpdateById);
/* GET session listing. */

/* GET session listing. */
router.get('/open/course/:id', newsServiceController.getRegByCourseId);
/* GET session listing. */

/* GET session listing. */
router.get('/course', newsServiceController.getAllCourse);
/* GET session listing. */

/* GET session listing. */
router.get('/:id', newsServiceController.getRegById);
/* GET session listing. */

router.patch('/:id',newsServiceController.patchRegById)




module.exports = router; 