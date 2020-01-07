// session
var express = require('express');
var router = express.Router();

const sessionController = require('../controllers/sessionController');

/* GET session listing. */
router.get('/', sessionController.check);
/* GET session listing. */
router.get('/set/:username/:password', sessionController.set);

/* POST session listing. */
router.post('/', sessionController.login);
/* DELETE session listing. */
router.delete('/', sessionController.logout);

module.exports = router; 