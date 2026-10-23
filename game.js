const readline = require('readline/promises') 
const { stdin: input, stdout: output } = require('process')

let lastGuess;
let number;

async function main() {
    const rl = readline.createInterface({ input, output});
    const difficulty = await rl.question("Pick the maximum number to choose the difficulty: ") 
    
    let playing = true;
    number = Math.floor(Math.random() * difficulty);
    console.log("What number am I thinking of?")
    
    while(playing == true) {
        const userInput = await rl.question("Pick a number between 1 and " + difficulty + ": ");
        if (userInput == "quit") {
            console.log("Thanks for playing!");
            playing = false;
            rl.close();
        } else {
            lastGuess = parseInt(userInput);
            
            
                if (lastGuess > number) {
                    console.log("Lower!")
                    continue;
                }
                if (lastGuess < number) {
                    console.log("Higher!")
                    continue;
                }
                        
                if (lastGuess == number) {
                    playing = false;
                    console.log("You got it!")
                    rl.close();
                }
                
            
            
            
            
            
            
        }
        
    }
    
}

main()