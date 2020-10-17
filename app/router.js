const {Router} = require('express');
const router = Router();

const mainController = require('./controller/mainController');
const { validateBody, validateQuery } = require('./services/validator'); 

const messageSchema = require('./data/schemas/messageSchema');

router.get('/', mainController.processToHomePage);
router.get('/presentation', mainController.processToPresentationPage);
router.get('/contact', mainController.processToContactPage);
router.get('/blog', mainController.processToBlogPage);

// V2 :
// router.get('/blog/:articleid', [...]) + make sure to have query validator.
// Singup/signin page and validation + postgres + Joi

router.post('/contact', validateBody(messageSchema), mainController.sendContactForm);

// if not matching any of the other route, redirect to 404 :
router.get('*', mainController.get404)

module.exports = router;