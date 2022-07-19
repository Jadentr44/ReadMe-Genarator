//  imports i need
const inquirer = require('inquirer');
const fs = require('fs');
const { functions } = require('lodash');

// asking all of the questions
inquirer
  .prompt([{name:"title",message:"What is the name of your project?"},
{name:"description",message:"Give me a description of your project"},
{name:"howTo",message:"Describe how to use the project"},
{name:"installation",message:"Describe how to install the project"},
{name:"test",message:"Describe how to test the project"},
{name:"cont",message:"Describe how to contribute to the program"},
{name:"githubUserName",message:"Enter your github username"},
{name:"email",message:"Enter your email"}])
.then((resposes) =>{
  //making the file
  fs.writeFile('README.md', createReadMe(resposes), (err) =>
  err ? console.error(err) : console.log('Check your new read me!')
);
})


function createReadMe(response){
  //checking if the response was empty and giving it the name if it was
  Object.keys(response).forEach(e=> {
    if(response[e] == ""){response[e] = e}
  })
//filling in the values and returning
return`<h1 id="top" align="center">${response.title}</h1>

<details>
<summary>Table of Contents</summary>
<ul>
   <li><a href="#Description">Description</a></li>
   <li><a href="#How-to">How to use</a></li>
   <li><a href="#Description">Description</a></li>
   <li><a href="#Installation">Installation</a></li>
   <li><a href="#test">Test</a></li>
   <li><a href="#Questions">Questions</a></li>
</ul>
</details>

<div id="Description">
<h2>Description</h2>

![Optional Image here](path/to/file)

${response.description}
<p align="right">(<a href="#top">back to top</a>)</p>
</div>

<div id="How-to">
<h2>How to use</h2>

${response.howTo}


<div id="Installation">
<h4>Installation</h4>

${response.installation}
<p align="right">(<a href="#top">back to top</a>)</p>
</div></div>

<div id="test">
<h2>Test</h2>

${response.test}
<p align="right">(<a href="#top">back to top</a>)</p>
</div>

<div id="contribution">
<h2>Contribution</h2>

${response.cont}
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