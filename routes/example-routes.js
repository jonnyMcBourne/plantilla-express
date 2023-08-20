const { Router } = require('express');
const { getExample } = require('../controllers/example-controller');
const router = Router();

router.get('/example', getExample);

module.exports = router;