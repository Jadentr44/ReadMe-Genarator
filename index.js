//  imports i need
const inquirer = require('inquirer');
const fs = require('fs');

inquirer
  .prompt([{name:"title",message:"What is the name of your project?"},
{name:"description",message:"Give me a description of your project"}])
.then((resposes) =>{
  console.log(resposes)
})


