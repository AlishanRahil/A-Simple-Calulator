// #!/usr/bin/env node

import inquirer from "inquirer"; 

const answer = await inquirer.prompt([
   { message:"Enter Your Number" , type:"number" , name:"firstnumber"},
   { message:"Enter Your Second Number" , type:"number" , name:"secondnumber"},
   {
    message:"Select Any Opreator Which You Want To Do",
    type:"list",
    name:"Opreators",
    choices:["Addition" , "Substractiobn","Multiplication","Division"]
   }
    
]);

if(answer.Opreators === "Addition"){
    console.log(answer.firstnumber + answer.secondnumber)
}else if(answer.Opreators === "Substractiobn"){
    console.log(answer.firstnumber - answer.secondnumber)
}else if(answer.Opreators === "Division"){
    console.log(answer.firstnumber / answer.secondnumber)
}else if(answer.Opreators === "Multiplication"){
    console.log(answer.firstnumber * answer.secondnumber)
}else{
    console.log("please Inter Valid Number")
};