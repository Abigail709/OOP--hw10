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