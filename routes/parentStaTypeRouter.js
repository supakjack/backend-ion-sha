var express = require('express');
var router = express.Router();

const parentStaTypeController = require('../controllers/parentStaTypeController');

/* GET parentStaType listing. */
router.get('/', parentStaTypeController.getAllParentStaType);
router.get('/:id', parentStaTypeController.getAtParentStaType);

/* DELETE parentStaType listing. */
router.delete('/:id', parentStaTypeController.delAtParentStaType);

/* POST parentStaType listing. */
router.post('/', parentStaTypeController.addParentStaType);

module.exports = router;
