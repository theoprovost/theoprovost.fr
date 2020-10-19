const Contact = require('../models/contact.js');

const mainController = {
    processToHomePage: (req, res) => {
        res.render('index');
    },
    processToPresentationPage: (req, res) => {
        res.render('presentation')
    },
    processToContactPage: (req, res) => {
        res.render('contact');
    },
    processToBlogPage: (req, res) => {
        res.render('blog');
    },

    sendContactForm: async (req, res) => {
        const message = new Contact(req.body);
        await message.save();
        if (message.id) {
            res.json(message);
            res.redirect('/');
        } else {
            res.redirect('404');
        }
    },

    get404: (req, res) => {
        res.status(404).render('404');
    }
}; 

module.exports = mainController;

