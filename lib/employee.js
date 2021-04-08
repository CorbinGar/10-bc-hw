class employee {
    constructor(name, id, email, role) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = role;
    }
    getName() {
        return this.name;
    }
    getId() {
        return this.id;
    }
    getEmail() {
        return this.email;
    }
    getRole() {
        return this.role;
    }

    getEmployeeCard(iconName, extraLinesHtml) {
        return `
<div class="col mb-2">
    <div class="card h-100">
        <div class="card-header">
            <h4>${this.getRole()}<i class="fas ${iconName}"></i></h4>
            <h4>${this.getName()}</h4>
        </div>
        <div class="card-body">
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${this.getId()}</li>
                <li class="list-group-item">Email: <a href="mailto: ${this.getEmail()}">${this.getEmail()}</a></li>
                ${extraLinesHtml.map(line => `<li class="list-group-item">${line}</li>`).join("")}
            </ul>
        </div>
    </div>
</div>`;
    }

}


module.exports = employee