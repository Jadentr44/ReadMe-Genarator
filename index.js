//  imports i need
const inquirer = require('inquirer');
const fs = require('fs');
const { functions } = require('lodash');

inquirer
  .prompt([{name:"title",message:"What is the name of your project?"},
{name:"description",message:"Give me a description of your project"},
{name:"githubUserName",message:"Enter your github username"},
{name:"email",message:"Enter your email"}])
.then((resposes) =>{
  fs.writeFile('README.md', createReadMe(resposes), (err) =>
  err ? console.error(err) : console.log('Check your new read me!')
);
})


function createReadMe(response){
  Object.keys(response).forEach(e=> {
    if(response[e] == ""){response[e] = e}
  })

return`<h1 id="top" align="center">${response.title}</h1>

<details>
<summary>Table of Contents</summary>
<ul>
   <li><a href="#Description">Description</a></li>
   <li><a href="#Questions">Questions</a></li>
</ul>
</details>

<div id="Description">
<h2>Description</h2>

![Optinal Image here](path/to/file)

${response.description}
<p align="right">(<a href="#top">back to top</a>)</p>
</div>

<div id="Questions">
<h2>Questions</h2>

Github:[${response.githubUserName}](https://github.com/${response.githubUserName})

Email:${response.email}

Contact me with any questions
<p align="right">(<a href="#top">back to top</a>)</p>
</div>
`
}