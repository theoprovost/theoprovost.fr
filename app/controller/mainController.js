const Info = require('../models/Info');
const Repo = require('../models/Repo');

const mainController = {
    index: async (_, res) => {
        const info = new Info();
        const repo = new Repo();
        const number_repos = await info.fetchGitHubAPI() || 8;
        const time_programming = info.getHours();
        const repos = await repo.fetchLastRepos();
        res.render('index', { number_repos, time_programming });
    },

    hello: (_, res) => {
        res.render('choice');
    },

    myStack: (_, res) => {
        res.render('mystack');
    },

    curriculumVitae: (_, res) => {
        res.render('cv');
    },

    processToBlogPage: (_, res) => {
        res.render('blog');
    },

    get404: (_, res) => {
        res.status(404).render('404');
    }
};

module.exports = mainController;
