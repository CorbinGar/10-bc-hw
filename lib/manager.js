const employee = require('./employee');

class manager extends employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email, 'manager');
        this.officeNumber = officeNumber;
    }
    getOfficeNumber() {
        return this.officeNumber;
    }


}

module.exports = manager