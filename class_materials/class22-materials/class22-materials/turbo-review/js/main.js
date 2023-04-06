// *Variables*
// Declare a variable and assign it to your fav drink as a string. Make sure there is no whitespace on either side of the string, and print the value to the console
    // let favDrink = ' Pepsi ';
    // favDrink = favDrink.trim()
    // console.log(favDrink);


//Declare a variable, assign it a string of multiple words, and check to see if one of the words is "apple".
    // let multipleWords = ['Tree', 'Purple', 'Cueto', 'Straberries'];
    
    // let findApple = multipleWords.find(function(element, index, array){
        
    // });

    // console.log(multipleWords.find('apple'))

    //     // did it wrong

    // let multipleWords2 = 'tree Purple Cueto straberries';
    // console.log(str.search('apple'))
    //     // if the word is there, it will return the index number that the start of the word is
    //     // if the word is not there, it will return -1

    

// *Functions*
// Create a function that returns rock, paper, or scissors as randomly as possible
function rockPaperScissors(){
    let random = Math.random()
    if (random < .33){
        return 'rock'
    } else if (random < .66){
        return 'paper'
    } else {
        return 'scissors'
    }
}

// console.log(rockPaperScissors());

// *Conditionals*
//Create a function that takes in a choice (rock, paper, or scissors) and determines if they won a game of rock paper scissors against a bot using the above function
    function checkWin(playerChoice){
        let botChoice = rockPaperScissors();
        if ((playerChoice === 'rock' && botChoice === 'scissors') || 
            (playerChoice === 'paper' && botChoice === 'rock') || 
            (playerChoice === 'scissors' && botChoice === 'paper')){
            console.log('You Win!')
        } else if( playerChoice === botChoice){
            console.log('It\'s a Tie.')
        }else {
            console.log('You Lose!')
        }
    };

    // checkWin(prompt('Select Rock, Paper, Scissors'));

//*Loops*
//Create a function that takes an array of choices. Play the game x times where x is the number of choices in the array. Print the results of each game to the console.
    function playGameXTimes(arr){
        arr.forEach( choice => checkWin(choice))
    }

    playGameXTimes(['rock', 'paper', 'scissors'])