const { Router } = require('express');
const router = Router();

const mainController = require('./controller/mainController');
const adminController = require('./controller/adminController');
const { validateBody, validateQuery } = require('./services/validator');

const messageSchema = require('./data/schemas/messageSchema');

router.get('/', mainController.index);
router.get('/hello', mainController.hello);
router.get('/mystack', mainController.myStack);
router.get('/curriculumvitae', mainController.curriculumVitae);

// V2 :
// router.get('/blog/:articleid', [...]) + make sure to have query validator.
// Singup/signin page and validation + postgres + Joi


// REMOVE ON PROD
// router.get('/admin', adminController.index);
// router.post('/admin', adminController.save);
// REMOVE ON PROD


// if not matching any of the other route, redirect to 404 :
router.get('*', mainController.get404)

module.exports = router;