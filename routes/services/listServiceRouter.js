// session
var express = require('express');
var router = express.Router();

const listServiceController = require('../../controllers/services/listServiceController');

/* GET session listing. */
router.get('/full/:username', listServiceController.getApp);
router.get('/edl/:id', listServiceController.getAppByEdl);
router.get('/:username', listServiceController.getAppReg);
/* GET session listing. */

module.exports = router;