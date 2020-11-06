const Contact = require('../models/contact.js');

const mainController = {
    processToHomePage: (_, res) => {
        res.render('index');
    },
    processToPresentationPage: (_, res) => {
        res.render('presentation')
    },
    processToContactPage: (_, res) => {
        res.render('contact');
    },
    processToBlogPage: (_, res) => {
        res.render('blog');
    },

    sendContactForm: async (req, res) => {
        const message = new Contact(req.body);
        console.log(message);
        await message.save()
        if (message.id) {
            res.json(message);
            res.redirect('/');
        } else {
            res.redirect('404');
        }
    },

    get404: (_, res) => {
        res.status(404).render('404');
    }
};

module.exports = mainController;

