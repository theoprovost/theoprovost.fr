const db = require('../data/database');

class Repo {
    constructor(data) {
        for (const prop in data) {
            this[prop] = data[prop];
        }
    };

    async fetchLastRepos() {
        const data = db.query("SELECT * FROM projects ORDER BY created_at DESC LIMIT 8");

        if (data.rowCount) {
            return data;
        } else return false;
    };
};

module.exports = Repo;