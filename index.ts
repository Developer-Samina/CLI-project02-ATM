#! /user/bin/env node

import { log } from "console";
import { link } from "fs"
import inquirer from "inquirer"

let myBalance = 10000; // Dollar
let myPin = 1234;

console.log(myBalance);

let pinAnswer = await inquirer.prompt(
    [
        {
            name: "pin",
            message: "enter your pin",
            type: "number",
        }
    ]
)
// 12345 == 1234 -false
if (pinAnswer.pin === myPin) {
    console.log("Correct pin code!!!");

    let operationAns = await inquirer.prompt(
        [
            {
               name:"operation",
               message:"please select option",
               type:"list",
               choices:["withdraw", "check blance"]
            }
        ]
    )
    console.log(operationAns);

    if (operationAns.operation === "withdraw") {
        let amountAns = await inquirer.prompt(
            [
                {
                   name:"amount",
                   message:"enter your amount",
                   type: "number",
                }
            ]
        )


       myBalance -= amountAns.amount;

       console.log("Your reamaining balance is: " + myBalance); 

    } else if (operationAns.operation === "checkblance is"){
        console.log("your balance is: " + myBalance);
    }
}

else {
    console.log("Incorrect pin number");
}