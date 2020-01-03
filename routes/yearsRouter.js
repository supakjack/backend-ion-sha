var express = require('express');
var router = express.Router();

const yearsController = require('../controllers/yearsController');

/* GET years listing. */
router.get('/', yearsController.getAllYears);
router.get('/:id', yearsController.getAtYears);

/* POST years listing. */
router.post('/', yearsController.addYears);

module.exports = router;
