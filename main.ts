#! /usr/bin/env node
import inquirer from "inquirer";

const answer = await inquirer.prompt([
  { message: "Enter your first number", type: "number", name: "firstNumber" },
  {
    message: "Enter your secound number",
    type: "number",
    name: "secoundNumber",
  },
  {
    message: "Select one of the operators to perfrom operator",
    type: "list",
    name: "operator",
    choices: [
      "Addition",
      "Subraction",
      "Multiplication",
      "Division",
      "Modulas",
      "Exponent",
      "Equal",
      "NotEqual",
      "GreaterThan",
      "LessThan"
    ],
  },
]);

if (answer.operator === "Addition") {
  console.log(answer.firstNumber + answer.secoundNumber);
}
else if (answer.operator === "Subraction") {
  console.log(answer.firstNumber - answer.secoundNumber);
}
else if (answer.operator === "Multiplication") {
  console.log(answer.firstNumber * answer.secoundNumber);
}else if (answer.operator === "Division") {
  console.log(answer.firstNumber / answer.secoundNumber);
}else if (answer.operator === "Modulas") {
  console.log(answer.firstNumber % answer.secoundNumber);
}else if (answer.operator === "Exponent") {
  console.log(answer.firstNumber ** answer.secoundNumber);
}else if (answer.operator === "Equal") {
  console.log(answer.firstNumber == answer.secoundNumber);
}else if (answer.operator === "NotEqual") {
  console.log(answer.firstNumber != answer.secoundNumber);
}else if (answer.operator === "GreaterThan") {
  console.log(answer.firstNumber >= answer.secoundNumber);
}else if (answer.operator === "LessThan") {
  console.log(answer.firstNumber <= answer.secoundNumber);
}

