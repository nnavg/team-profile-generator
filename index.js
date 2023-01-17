const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const fs = require('fs');
const inquirer = require('inquirer');
const team = [];
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");
const generateTeam = require("./src/generateHTML");
const path = require("fs");

function createTeam () {
    inquirer.prompt([{
        type:'list',
        message: "Select the employee you would like to add."
        name: 'addEmployee',
        choices: ["Manager", "Engineer", "Intern", "End team member selection."]
    }
    ]).then(function(data) {
        If (employeeRoles === "Manager") {
            addManager();
        }
        else if (employeeRoles === "Engineer") {
            addEngineer();
        }
        else if (employeeRoles === "Intern") {
            addIntern();
        }
        else if  (employeeRoles === "End") {
            generateTeam();
        }
    }); 
}

const addManager() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is the manager's name?"
        },
        {
            type: 'input',
            name: 'Id',
            message: "Please enter the manager's Id."
        },
        {   type: 'input',
            name: 'email',
            message: "What is the manager's email?"
        },
        {
            type: 'input',
            name: 'office',
            message: "Please enter the office number."
        }
    ])
    .then(managerInput => {
        const {name, id, email, officeNumber} = managerInput;
        const manager = new Manager (name, id, email, officeNumber);

        team.push(manager);
        console.log(manager);
    })

};

function addEngineer() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is the engineer's name?"
        },
        {
            type: 'input',
            name: 'Id',
            message: "Please enter the engineer's Id:"
        },
        {   type: 'input',
            name: 'email',
            message: "What is the engineer's email?"
        },
        {
            type: 'input',
            name: 'github',
            message: "Please provide the engineer's github:"
        }
    ]).then(engineerInput => {
        const {name, id, email, github} = engineerInput;
        const engineer = new Engineer (name, id, email, github);

        team.push(engineer);
        console.log(engineer);
})

};

function addIntern () {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is the intern's name?"
        },
        {
            type: 'input',
            name: 'Id',
            message: "Please enter the intern's Id:"
        },
        {   type: 'input',
            name: 'email',
            message: "What is the intern's email?"
        },
        {
            type: 'input',
            name: 'github',
            message: "Please provide the intern's school:"
        }
    ]).then(internInput => {
        const {name, id, email, school} = internInput;
        const intern = new Intern (name, id, email, school);

        team.push(intern);
        console.log(intern);
    })

};

function htmlBuilder () {
    console.log("Team created!")

    fs.writeFileSync(outputPath, generateTeam(const team), "UTF-8")

}

createTeam();



runApp();
