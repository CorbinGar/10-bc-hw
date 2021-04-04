const employee = require('./employee');

class intern extends employee {
    constructor(name, id, email, school) {
        super(name, id, email, 'Intern')
        this.school = school;
    }
    getSchool() {
        return this.school;
    }

    getEmployeeCard() {
        return super.getEmployeeCard('fa-graduation-cap', [
            `School: ${this.getSchool()}`
        ])
    }
}

module.exports = intern