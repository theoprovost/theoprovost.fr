const adminController = {
    index: (_, res) => {
        res.render('admin');
    },

    save: (_, res) => {
        return false;
    }
};

module.exports = adminController;