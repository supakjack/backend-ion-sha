var express = require('express');
var router = express.Router();

const parentTabController = require('../controllers/parentTabController');

/* GET parentTab listing. */
router.get('/', parentTabController.getAllParentTab);

/* POST parentTab listing. */
router.post('/', parentTabController.addParentTab);

module.exports = router;
