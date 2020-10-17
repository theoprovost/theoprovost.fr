const {Router} = require('express');
const router = Router();

router.get('/', (req, res) => res.json('It is working :)'));
router.get('presentation', (req, res) => res.json('presentation'));
router.get('/blog', (req, res) => res.json('blog'));
router.get('/contact', (req, res) => res.json('contact'));

router.post('/contact', (req, res) => res.json('contact post'));

module.exports = router;