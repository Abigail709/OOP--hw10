const inquirer = require('inquirer');
const fs = require('fs');

const employees = [];

const addManager = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of the manager?',
            
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is the manager id?',
            
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the manger email',
            
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'What is the manager office number?',
            
        },
        
    ])
    .then((managerResponse) => {
        const manager = new Manager(name, id, email, officeNumber)
        employees.push(manager)
        
    });
};

const addEngineer = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the engineer name?',
            
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is the employee id?',
            
        },
        {
            type: 'input',
            name: 'email',
            message: 'email address',
            
        },
        
        {
            type: 'list',
            name: 'getRole',
            message: 'What role is next?',
            choices: ["Engineer", "Intern"],
            
        }
    ])
    .then((engineerResponse) => {
        const engineer = new Engineer(name, id, email)
        employees.push(engineer)
        
    });
};