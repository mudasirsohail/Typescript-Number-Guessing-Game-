import inquirer from "inquirer";
const system_generated = Math.floor(Math.random() * 10);
const answers = await inquirer.prompt([{
        type: "number",
        name: "userGuess",
        message: "Think of a number between 1 to 10 :"
    }]);
const { userGuess } = answers;
console.log(`You guess the number: ${userGuess} And the correct answer is: ${system_generated}`);
if (userGuess === system_generated) {
    console.log("Correct Answer! You Win");
}
else {
    console.log("Better Luck Next Time");
}
