var express = require('express');
var router = express.Router();

const parentStaTypeController = require('../controllers/parentStaTypeController');

/* GET parentStaType listing. */
router.get('/', parentStaTypeController.getAllParentStaType);
router.get('/:id', parentStaTypeController.getAtParentStaType);

/* POST parentStaType listing. */
router.post('/', parentStaTypeController.addParentStaType);

module.exports = router;
