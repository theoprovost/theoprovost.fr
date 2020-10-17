const {Router} = require('express');
const router = Router();

router.get('/', (req, res) => res.write('<h1>Debug H-13</h1>'));
router.get('presentation', (req, res) => res.json('presentation'));
router.get('/blog', (req, res) => res.json('blog'));
router.get('/contact', (req, res) => res.json('contact'));

router.post('/contact', (req, res) => res.json('contact post'));

module.exports = router;