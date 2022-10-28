const express = require('express');
const router = express.Router();

const{addHexBolt, getOneHexBolt, getPaginatedSearchhexBolt, gethexBolt, updatehexBolt} = require('../controllers/jobeeTrans');


const{addDoorStatus, getJobeeDoorStatus, getOneJobeeDoorStatus,getPaginatedSearchJobeeTrans, updateJobeeDoorStatus} = require('../controllers/jobeeDoorStatus');
``
router.post('/admin/add/transaction', addHexBolt);
router.get('/admin/get/transaction', gethexBolt);
router.get('/admin/get/pagination/trans', getPaginatedSearchhexBolt);
router.get('/admin/get/one/transaction/:slug', getOneHexBolt);
router.put('/admin/update/transaction/:slug', updatehexBolt);

router.post('/admin/add/door/status', addDoorStatus);
router.get('/admin/get/door/status', getJobeeDoorStatus);
router.get('/admin/get/pagination/door/status', getPaginatedSearchJobeeTrans);
router.get('/admin/get/one/door/status/:slug', getOneJobeeDoorStatus);
router.put('/admin/update/door/status/:slug', updateJobeeDoorStatus);



module.exports = router;
