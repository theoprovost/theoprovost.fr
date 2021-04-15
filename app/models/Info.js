const db = require('../data/database');
const axios = require('axios');
const { Octokit } = require('@octokit/core');
const octokit = new Octokit({ auth: process.env.OCTOKIT });

class Info {
    constructor(data) {
        for (const prop in data) {
            this[prop] = data[prop];
        }
    };

    async fetchGitHubAPI() {
        const { data: { public_repos, total_private_repos } } = await octokit.request("GET /users/theoprovost");
        return (total_private_repos + public_repos);
    };

    getHours() {
        const start = new Date('1 october, 2020');
        const today = new Date();
        today.setHours(0, 0, 0, 0);

        const milliseconds = Math.abs(today - start);
        const hours = (milliseconds / 36e5);

        const weeks = (hours / (24 * 7));
        return Math.round(weeks * 35);
    }
};

module.exports = Info;