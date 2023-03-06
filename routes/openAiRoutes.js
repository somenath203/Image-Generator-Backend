const router = require('express').Router();

const generateImageController = require('./../controllers/generateImageController');


router.post('/generateImage', generateImageController);


module.exports = router;