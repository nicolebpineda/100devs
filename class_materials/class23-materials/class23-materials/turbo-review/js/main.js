// *Variables*
// Declare a variable and assign it to a sentance as a string. Alert if the sentance is a question
    let sentence = 'Sushi is the sneakest sushi ninja';
    if (sentence.includes('?')) {
        console.log(sentence) // works but my sentence doesnt have a ? so it doesn't do anything
    };

        // What we wer supposed to do
        const str = 'Is this the best week ever?'
        console.log(str.endsWith('?')) // alerts true


//Declare a variable, assign it a string of multiple words, replace every "jr. dev" with "software engineer", and print it to the console
    let multipleWords = 'senior jr. dev software developer software jr. dev'

    console.log(multipleWords.replaceAll('jr. dev', 'software engineer'));

    // replace() function takes in two values. first is what you want replace, and second is what you want you are replacing it with


// *Functions*
// Create a function that returns rock, paper, or scissors as randomly as possible
    function rockPaperScissors(){
        let random = Math.random();
        if (random < .33) {
            return 'rock'
        } else if (random < .66) {
            return 'paper'
        } else {
            return 'scissors'
        }
    };

    // rockPaperScissors();

// *Conditionals*
//Create a function that takes in a choice (rock, paper, or scissors) and determines if they won a game of rock paper scissors against a bot using the above function

    function checkWin(playerChoice){
        let botChoice = rockPaperScissors()
        if (
            (playerChoice === 'rock' && botChoice === 'scissors') || (playerChoice === 'scissors' && botChoice === 'paper') || (playerChoice === 'paper' && botChoice === 'rock')){
            console.log('Winner')
        }else if (playerChoice === botChoice){
            console.log('Tied')
        } else {
            console.log('Loser')
        }
    }

    checkWin('paper');

//*Loops*
//Create a function that takes an array of choices. Play the game x times where x is the number of choices in the array. Print the results of each game to the console.
