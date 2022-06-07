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


const addIntern = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the intern name?',
            
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is the intern ID?',
            
        },
        {
            type: 'input',
            name: 'email',
            message: 'email address',
            
        },
        {
            type: 'input',
            name: 'school',
            message: 'What is the school name?',
           
        },
        {
            type: 'list',
            message: 'what role is next',
            choices: ["Engineer", "Intern", ],
            name: 'getRole',
        }
    ])
    .then((internResponse) => {
        const intern = new Intern(name, id, email, school)
        employees.push(intern)
        
    })
};

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        
        
    })
}