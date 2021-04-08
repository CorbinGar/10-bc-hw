

const generateHtml = (arr, manager) => {

    const managerHtml = `
<span class="text">
    ${manager.name}
    <i class="fas fa-mug-hot"></i>
    <br>ID: ${manager.id}
    <br>Email: <a href="mailto: ${manager.email}">${manager.email}</a>
    <br>Office Number: ${manager.officeNumber}
</span>`;

    const employeeHtml = arr.map(employee => employee.getEmployeeCard()).join("");

    return `
<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css"
            integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css">
        <link rel="stylesheet" href="./style.css">
        <title>My Team</title>
    </head>
    
    <body>
        <div class="container-sm">
            <div class="row ">
                <div class="col-sm-10">
                    <div class="jumbotron jumbotron-fluid">
                        <div class="container">
                            <h1 class="display-4"><span class="text">My Team</span></h1>
                            <p class="lead">
                                ${managerHtml}
                            </p>
                        </div>
                    </div>
                    <div class="row row-cols-1 row-cols-md-3">
                        ${employeeHtml}
                    </div>
                </div>
            </div>
        </div>
    </div>
</body>

</html>`;
}

module.exports = generateHtml