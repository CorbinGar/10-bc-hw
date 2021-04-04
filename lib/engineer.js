const employee = require('./employee');

class engineer extends employee {
    constructor(name, id, email, github) {
        super(name, id, email, 'Engineer');
        this.github = github;
    }
    getGitHub() {
        return this.github;
    }

    getEmployeeCard() {
        return super.getEmployeeCard('fa-glasses', [
            `GitHub: <a href="https://github.com/${this.getGitHub()}" target="_blank">${this.getGitHub()}</a>`
        ])
    }
}

module.exports = engineer