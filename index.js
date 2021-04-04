const inquirer = require('inquirer');
const fs = require('fs');

const generateHtml = require('./util/generateHtml');
const engineer = require('./lib/engineer');
const manager = require('./lib/manager');
const intern = require('./lib/intern');


managerquestions = async () => {
  const managerdata = await inquirer.prompt([
      {
          type: 'input',
          name: 'name',
          message: 'What is the managers name?'
      },
      {
          type: 'input',
          name: 'id',
          message: 'What is the managers employee ID number?'
      },
      {
          type: 'input',
          name: 'email',
          message: 'What is the managers email address?'
      },
      {
          type: 'input',
          name: 'officeNumber',
          message: 'What is the managers office number?'
      }
  ]);
  return new manager(managerdata.name, managerdata.id, managerdata.email, managerdata.officeNumber);
}

internquestions = async () => {
  const interndata = await inquirer.prompt([
      {
          type: 'input',
          name: 'name',
          message: 'What is the interns name'
      },
      {
          type: 'input',
          name: 'id',
          message: 'What is the interns number?'
      },
      {
          type: 'input',
          name: 'email',
          message: 'What is the interns email address?'
      },
      {
          type: 'input',
          name: 'school',
          message: 'What school did the intern go to?'
      }
  ]);
  return new intern(interndata.name, interndata.id, interndata.email, interndata.school);
}

engineerquestions = async () => {
  const engineerdata = await inquirer.prompt([
      {
          type: 'input',
          name: 'name',
          message: 'What is the engineers name'
      },
      {
          type: 'input',
          name: 'id',
          message: 'What is the engineers ID number?'
      },
      {
          type: 'input',
          name: 'email',
          message: 'What is the engineers email address?'
      },
      {
          type: 'input',
          name: 'github',
          message: 'What is the engineers username on github?'
      }
  ]);
  return new engineer(engineerdata.name, engineerdata.id, engineerdata.email, engineerdata.github);
}


writeToFile = async (fileName, data) => {
  const writeFileAsync = util.promisify(fs.writeFile);
  //use path.join to save html to dist directory
  await writeFileAsync(path.join(process.cwd(), '/dist/' + fileName), data);
}


MainPrompt = async () => {
  const menu = await inquirer.prompt([
      {
          type: 'list',
          name: 'action',
          message: "What would you like to do?",
          choices: ['add a manager', 'add a engineer', 'add a intern', 'finish'],
      }
  ]);
  return menu.action;
}

function choiceSplit(){

  var employeearray = [];

  while (true) {
    let menuchoice = await MainPrompt();

    if (menuchoice === 'add a engineer') {
        const engineer = await engineerQuestions();
        employeearray.push(engineer);
    }
    else if (menuchoice === 'add a intern') {
        const intern = await internQuestions();
        employeearray.push(intern);
    }
    else if (menuchoice === 'add a manager') {
      const intern = await managerQuestions();
      employeearray.push(intern);
  }
    else {
        break;
    }
  }
}



const init = () => {
  mainLoop();
  choiceSplit();
};

init();

