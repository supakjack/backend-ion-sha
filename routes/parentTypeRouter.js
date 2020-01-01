// parentType
var express = require('express');
var router = express.Router();

const parentTypeController = require('../controllers/parentTypeController');

/* GET parentType listing. */
router.get('/', parentTypeController.getAllParentType);

/* POST parentType listing. */
router.post('/', parentTypeController.addParentType);

module.exports = router;
