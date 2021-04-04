const inquirer = require('inquirer');
const fs = require('fs');



const generateHtml = require('./util/generateHtml');
const engineer = require('./lib/engineer');
const manager = require('./lib/manager');
const intern = require('./lib/intern');


// The prompt for creating one employee
const employeePrompt = () =>
  inquirer.prompt([

    {
      type: 'input',
      name: 'name',
      message: 'What is the Employees Name?',
    },
    {
      type: 'list',
      message: 'What is the employees position',
      name: 'position',
      choices:  positions,
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is the Employees email?',
    },
    {
      type: 'input',
      name: 'officenum',
      message: 'What is your office number',
    },
    {
      type: 'input',
      name: 'username',
      message: 'What is your github username',
    }
]);


const generateperson = (answers) => 
  employees[employees.length] = new Employee( answers.name , answers.position, employees.length, answers.email, answers.officenum , answers.username);
;




MainPrompt = async () => {
  const menu = await inquirer.prompt([
      {
          type: 'list',
          name: 'action',
          message: "What would you like to do?",
          choices: ['add an engineer', 'add an intern', 'finish'],
      }
  ]);
  return menu.action;
}


function mainLoop(){
  MainPrompt().then((answers) => {
    if(answers.path === "Add Employee"){

      employeePrompt().then((answers2) => {

        generateperson(answers2);

      });

      mainLoop();

    }else{
      generateHtml();
    }
  });
}


const init = () => {
  mainLoop();
};

init();

