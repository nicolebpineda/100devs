// *Variables*
// Declare a variable, reassign it to your fav holiday, make sure it is in all caps, and print the value to the console
    let favHoliday = 'Halloween';
    favHoliday = favHoliday.toUpperCase()
    console.log(favHoliday)

//Declare a variable, assign it a string, alert the last three characters in the string (Use your google-fu and the MDN)
    let variable = 'string';
    alert(variable.slice(-3));

// *Functions*
// Create a function that takes in 5 numbers. Subtract all five from 100. Alert the absolute value of the difference. Call the function.
function subtractFromOneHund(num1, num2, num3, num4, num5){
    let answer = 100 - num1 - num2 - num3 - num4 - num5
    alert(Math.abs(answer))
}

subtractFromOneHund(1, 4, 9, 12, 20);

// Create a function that takes in 3 numbers. Console log lowest and highest values. Call the function.
function logHighAndLow(numOne, numTwo, numThree){
    let min = Math.min(numOne, numTwo, numThree)
    let max = Math.max(numOne, numTwo, numThree)

    console.log(`The lowest number is ${min} and the highest number is ${max}`)
}

logHighAndLow(21, 83, 47);

// *Conditionals*
//Create a function that returns heads or tails randomly and as fairly as possible. Call the function.
// function headOrTails(randomNum){
//     Math.floor(Math.random(randomNum)) * 10
//     if (randomNum % 2 === 0){
//         console.log('Heads')
//     } else {
//         console.log('Tails')
//     }
// }

// headOrTails()

        // what leon creates: 

        function headsOrTails(randomNum){
            let result = Math.random(randomNum)
            if (result < .5){
                return 'Heads'
            } else {
               return 'Tails'
            }
        }

        headsOrTails()

        // creating this as an arrow function
        const headOrTail = () => Math.random() < 5 ? 'heads' : 'tails'
                    //     ^ can do an underscore_ instead to say "I'm not passing anything". personal preference *shrug*
        // ^ no need for return because of implicit return 


//*Loops*
//Create a function that takes in a number. Console log the result of heads or tails using the previous function x times where x is the number passed into the function. Call the function.
function flip(n){
    for (let i = 1; i <= n; i++){
        let result = headsOrTails()
        console.log(result)
    }
}

flip(10)