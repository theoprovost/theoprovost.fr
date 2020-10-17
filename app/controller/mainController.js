// TO DO : Import models

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

    sendContactForm: (req, res) => {
        res.json('contact post is not yet functional');
        res.redirect('404');
    },

    get404: (req, res) => {
        res.status(404).render('404');
    }
}; 

module.exports = mainController;

