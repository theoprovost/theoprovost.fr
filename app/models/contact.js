const db = require('../data/database');

class Contact {
    constructor(data) {
        for (const prop in data) {
            this[prop] = data[prop];
        }
    };

    async save() {
        const sendContactForm = await db.query(`
        INSERT INTO contact(first_name, last_name, email, telephone, content)
        VALUES($1, $2, $3, $4, $5)
        RETURNING contact.id;
        `, [
            this.first_name, 
            this.last_name, 
            this.email, 
            this.telephone, 
            this.content
        ]);
            if (sendContactForm.id) {
                this.id = sendContactForm.rows[0].id
            }
            
        return this;
    };
};

module.exports = Contact;