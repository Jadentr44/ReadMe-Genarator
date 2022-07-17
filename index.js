//  imports i need
const inquirer = require('inquirer');
const fs = require('fs');
const { functions } = require('lodash');

inquirer
  .prompt([{name:"title",message:"What is the name of your project?"},
{name:"description",message:"Give me a description of your project"}])
.then((resposes) =>{
  fs.writeFile('README.md', createReadMe(resposes), (err) =>
  err ? console.error(err) : console.log('Check your new read me!')
);
})


function createReadMe(responseObj){

return`
<h1 id="top" align="center">${responseObj.title}</h1>

## Description
![Optinal Image here](path/to/file)

${responseObj.description}
<p align="right">(<a href="#top">back to top</a>)</p>
`
}