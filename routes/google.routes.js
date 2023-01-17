const {Router} = require('express');

const router = Router();

const { obtenerData,updateDataQ } = require('../controllers/google.controller');

router.get('/', obtenerData);

router.get('/updateQ/:Q', updateDataQ)

module.exports = router;