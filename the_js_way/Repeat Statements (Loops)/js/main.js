// Loops /////////////////////////////////////////////////////////

// // Carousel

//     // Progress Report

//         let number = 1;                    // written using while loop. works 
//         while (number <= 10) {
//             console.log(number);
//             number++;
//         }
    
//         for (let number = 1; number <= 10; number++) {    // written using for loop. works 
//             console.log(number);
//         }

//         for (let number = 1; number < 10; number++) {        // i want this to run 10 times, not run until the number isn't less than 10
//             number = prompt('Type a number to run the Carousel');
//             console.log(number)
//         }

//         let number = Number(prompt('Type of number to run the Carousel'))
//         let i = 
//         for (i < 10; i++;) {
//             console.log(number)
//         }

//     // Final Result

//         // For Loop 

//             let turns = Number(prompt('Number of Turns'))
//             for (let number = 1; number <= turns; number++){
//                 console.log(number)
//             }
            
//         // While Loop

//             let turns = Number(prompt('Number of Turns'))
//             let number = 1 
//             while (number <= turns) {
//                 console.log(number)
//                 number++
//             }

//         // While or For Loop? This situation is a toss up. I can see it both wasy, But I think a for loops is more appropriate because how many times we want it to run is inputed before the loop is actually run. 





// // Parity

//     // Progress Report 

//         for (let i = 1; i <= 10; i++) {      // og console log even only
//             if (i % 2 === 0) {
//                 console.log(`${i} is even`)
//             }
//         }

//         for (let i = 1; i <= 10; i++) {      // console log odds only
//             if (i % 2 !== 0) {
//                 console.log(`${i} is odd`)
//             }
//         }

//         for (let i = 1; i <= 10; i++) {       // shows 1-10
//             if (i % 2 === 0 || i % 2 !== 0) {
//                 console.log(i)
//             }
//         }

//         for (let i = 1; i <= 10; i++) {          // shows 1-10 AND says is odd or even
//             if (i % 2 === 0) {
//                 console.log(`${i} is even`)
//             } else if (i % 2 !== 0) {
//                 console.log(`${i} is odd`)
//             }
//         }

//         let i = 1;                            // number given by user... but doesn't ask for it. confused. lets rewrite it
//         while (i <= 10); {    
//             if (i % 2 === 0 || i % 2) 
//             i = prompt('Type a number 1-10')
//             console.log(i)
//             i++;
//         }

//         let i = Number(prompt('Pick a Number 1-10'))
//         let startNumber = ""
//         while (startNumber <= 10) {               // okay it tells me if the input number is odd or even correctly. but it doesn't stop.it just console logs every number iputed
//             if (i % 2 === 0) {                    // other times this code doesn't even work so let's just restart. 
//                 console.log(`${i} is even`)         
//             } else if (i % 2) {
//                 console.log(`${i} is odd`)           
//             }
//         }   i++    

//         let inputNumber = Number(prompt('Pick a number'))       // okay I know im on the right track but I'm going to write is as a for loop. 
//         //let plus10 = 10
//         while (inputNumber <= inputNumber + 9) {
//             console.log(`${inputNumber}`)
//             inputNumber++
//         }

//         let inputNumber = Number(prompt('Pick a Number'))    // okay yay we are getting somewhere. lets rewriet to say if the numbers are odd or even
//         for (let showNextTen = inputNumber + 9; inputNumber <= showNextTen; inputNumber++) {
//             console.log(inputNumber)                                        
//         }

//     // Final Result

//         // For Loop 

//             let inputNumber = Number(prompt('Pick a Number'))
//             for (let showNextTen = inputNumber + 9; inputNumber <= showNextTen; inputNumber++) {
//                 if (inputNumber % 2 === 0 ) {
//                     console.log(`${inputNumber} is even`)
//                 } else if (inputNumber % 2 !== 0 ) {
//                     console.log(`${inputNumber} is odd`)
//                 }
//              }

//         // While Loops
                
//             let inputNumber = Number(prompt('Pick a Number'))
//             let showNextTen = inputNumber + 9
//             while (inputNumber <= showNextTen) {
//                 if (inputNumber % 2 === 0) {
//                     console.log(`${inputNumber} is even`)
//                 } else if (inputNumber % 2 !== 0) {
//                     console.log(`${inputNumber} is odd`)
//                 }
//                 inputNumber++;
//             }

//         // While or For Loop? I liked this better as a for loop. It was easier to break down and create, and a little easier to read. for me at least. But for appropriateness, I think its still a for loop. I know I want to run it ten times even though my initial value isn't known. 





// // Input Valication

//     // Progress Report

//         let i = 101;                            // asks user until i >= 100. works 
//         while (i >= 100) {
//             i = prompt('Enter a number');
//         }

//     // Final Result

//         // While Loop

//             let greaterThan1Hund = "";               // terminating number is between 50 & 100. works
//             while (greaterThan1Hund < 50  || greaterThan1Hund > 100) {
//                 greaterThan1Hund = prompt('Enter a number');
//             }

//         // For Loop                                         // works

//             for (let greaterThan1Hund = ""; greaterThan1Hund < 50 || greaterThan1Hund > 100;) {
//                 greaterThan1Hund = prompt(`Enter a Number`)
//             }

//         // While or For Loop? This code is more appropriate with a while loop because the exact number of iterations isn't know. It is dependent on user interaction. 





// // Multiplication Table  

//     // Progress Report

//         let multiply = "";                               // hmmm close but I want the number not the string of multiply
//         while (multiply > 2  || multiply < 9) {             // wait can I put two ${``} ? why not. lets try it 
//             multiply = prompt('Enter a number');
//             console.log(`multiply * 2 = ${multiply * 2}`)
//             multiply++
//         }

//         let multiply = 3                                     // testing testing. workssss
//         while (multiply >= 2  &&  multiply <= 9) {                 // wait but it still console.logs answer if higher than 9.. oh needs to be && not ||
//             multiply = prompt('Enter a number');            
//             console.log(`${multiply} * 2 = ${multiply * 2}`)     // when changed to && it did not prompt. oh needs an itinal value. one still prompts but over 9 will end prompt
//             multiply++
//         }
     
//         let multiply = "";                                 // not correct because I shouldn't have to write everything out. that is the whole point of LOOPS. duh
//         while (multiply >= 2 || multiply <= 9) {
//             multiply = prompt('Enter a number');
//             console.log(`${multiply} * 1 = ${multiply * 1}`)
//             console.log(`${multiply} * 2 = ${multiply * 2}`)
//             console.log(`${multiply} * 3 = ${multiply * 3}`)
//             console.log(`${multiply} * 4 = ${multiply * 4}`)
//             console.log(`${multiply} * 5 = ${multiply * 5}`)
//             console.log(`${multiply} * 6 = ${multiply * 6}`)
//             console.log(`${multiply} * 7 = ${multiply * 7}`)
//             console.log(`${multiply} * 8 = ${multiply * 8}`)
//             console.log(`${multiply} * 9 = ${multiply * 9}`)
//             console.log(`${multiply} * 10 = ${multiply * 10}`)
//             console.log(`${multiply} * 11 = ${multiply * 11}`)
//             console.log(`${multiply} * 12 = ${multiply * 12}`)
//             multiply++
//         }
                                                            
//         let multiply = "";                                   
//         while (multiply >= 2  || multiply <= 9) {
//             multiply = prompt('Enter a number');
//             console.log(`${multiply} * 1 = ${multiply * 1}`)
//             multiply++                                                   //how to display 1-12 witout repeating... idk
//         }



// // Multipication Table Start Over! from the very beginning. start basic  // didnt want to delete everyting above cuz I learned things
    
//     // Progress Report

//         let multiply = 1                                  // I want the other number changing not the inputed number. need to make a new value                    
//         while (multiply <= 12) {
//             console.log(`${multiply} * 1 = ${multiply * 1}`)
//             multiply++
//         }
// //
//         let multiply = 3                                     // accidently made an infinte loop lol. but this works. now I need the user to input the multiply value
//         let value = 1   // need to define start value for multiplication table                    
//         while (value <= 12) { // since value is increasing it also needs the limit or it will be infinite
//             console.log(`${multiply} * ${value} = ${multiply * value}`)   
//             value++ // value is what needs to be increasing   // ^ this also needs to be increasing or all the answers will be the same
//         }   

//         let multiply = ""                                       // okay it's prompting but not console logging anything. 
//         let value = 1                                           // i tried the prompt in multiple lines, but order didn't seem to matter but I feel like it would matter
//         while (value <= 12) {
//             console.log(`${multiply} x ${value} = ${multiply * value}`);
//             multiply = prompt('Enter a Number to see its Multiplication Table');
//             value++;                                               // computer must have been having a problem its working now. well not working how I want it to but it will console log 
//         }

//         let multiply = ""                                       //  changed it to a for loop cuz I know how long I want it to run. 
//         for (let value = 1; value <= 12;) {
//             console.log(`${multiply} x ${value} = ${multiply * value}`);
//             multiply = prompt('Enter a Number to see its Multiplication Table');
//             value++;                                             // so its working but it will prompt agian before logging the multiplation up to 12 so lets switch them 
//         }                                                    

//         let multiply = ""                                       // well now it doesn't display the x 1 = 0 incomplete multiplcation at the top before even getting an input 
//         for (let value = 1; value <= 12;) {                 // but still prompts each time until reaches 12 instead of dispalaying all 12 at once
//             multiply = prompt('Enter a Number to see its Multiplication Table'); // when this line is commented out it displaying 12 lines but incomplete cuz no input value was given
//             console.log(`${multiply} x ${value} = ${multiply * value}`);
//             value++;
//         }  

//         let multiply = ""            // tried moving the value++ but it doesn't do anything, It's just the same as above. probably cuz it does the same thing                  
//         for (let value = 1; value <= 12; value++) {                 // we will keep it here cuz this reading says to omit putting the counter in the body
//             multiply = prompt('Enter a Number to see its Multiplication Table'); 
//             console.log(`${multiply} x ${value} = ${multiply * value}`);
//         }  

//         let multiply = ""                                       // need to do something so it displays all 12 at once. 
//         for (let value = 1; value <= 12; value++) {                
//             multiply = prompt('Enter a Number to see its Multiplication Table');
//             console.log(`${multiply} x ${value} = ${multiply * value}`);
//         }  

//     // Final Result 

//         // For Loop

//             let multiply = prompt('Enter a number to see its multiplcation table'); // the propmt cannot be in the loop or it will prompt every iteration. I only want it to ask once
//             for (let value = 1; value <= 12; value++){                            
//                 console.log(`${multiply} * ${value} = ${multiply * value}`);         
//             }                                        // Still hadn't finished. I came back to this weeks later, got it done in 5 minutes lol
            
//         // While Loop

//             let multiply = prompt('Enter a number to see its multiplcation table');
//             let value = 1;
//             while (value <=12){
//                 console.log(`${multiply} * ${value} = ${multiply * value}`);
//                 value++;
//             }

//         // While or For Loop? Easy, for loop. I know how many times I want this to run. 12 times to be exact! 




// // Neither yes nor no

//     // Progress Report

//         let text = "";
//         while (text !== yes || text !== no) {    // console log say yes is not defined. no prompt 
//             text = prompt('Neither yes nor no');
//         }                                           //coming back a few days later. lets just restart. theres so much to add and redo

//     // Final Report

//         // For Loop

//             for (let textInput = ""; textInput !== 'yes' && textInput !== 'no'; textInput = prompt('Neither yes nor no').toLowerCase()) {
//                  // can I really have nothing in here? guess so cuz it works
//             }

//         // While Loop

//             let textInput = ""                                          //tested with || first instead of &&. but then realized it can't be that cuz of the truth table. 
//             while (textInput !== 'yes' && textInput !== 'no') {          
//                 textInput = prompt('Neither yes nor no').toLowerCase()
//             }

//         // While or For Loop? Definetly a while loop. easy answer. Because we do not know how many times the code will run until the user inputs yes or no. 





// // FizzBuzz

//     // Progress Report
        
//         for (let i = 1; i <= 100; i++) {          // test
//             if (i % 3 === 0) {
//                 console.log(`Fizz`)      
//             } 
//         }

//         for (let i = 1; i <= 100; i++) {           // not quite. I want just the string instead of the number
//             if (i % 3 === 0 && i % 5 === 0) {
//                 console.log(`${i} = FizzBuzz`) 
//             } else if (i % 3 === 0) {
//                 console.log(`${i} = Fizz`)
//             } else if (i % 5 === 0) {
//                 console.log(`${i} = Buzz`)
//             } else {
//                 console.log(`${i}`)
//             }
//         }

//         for (let i = 1; i <= 100; i++) {           // doesnt work. displays number then string on new line. ugh
//             console.log(i)                         // looked up something and it messed me up. I put the plain console log at the top when it needed to stay where it was 
//             if (i % 3 === 0 && i % 5 === 0) {      
//                 console.log(`FizzBuzz`) 
//             } else if (i % 3 === 0) {
//                 console.log(`Fizz`)
//             } else if (i % 5 === 0) {
//                 console.log(`Buzz`)
//             } 
//         }

//     // Final Result 
    
//         // For Loop 
            
//             for (let i = 1; i <= 100; i++) {           // doneeeee lets go. 
//                 if (i % 3 === 0 && i % 5 === 0) {
//                     console.log(`FizzBuzz`) 
//                 } else if (i % 3 === 0) {
//                     console.log(`Fizz`)
//                 } else if (i % 5 === 0) {
//                     console.log(`Buzz`)
//                 } else {
//                     console.log(i)
//                 }
//             }

//         // While Loop

//             let i = 1                                    // works
//             while (i <= 100) {
//                 if (i % 3 === 0 && i % 5 === 0) {
//                     console.log(`FizzBuzz`)
//                 } else if (i % 3 === 0){
//                     console.log(`Fizz`)
//                 } else if (i % 5 === 0) {
//                     console.log(`Buzz`)
//                 } else {
//                     console.log(i)
//                 }
//                 i++
//             }
                
//         // While or For Loop? This code is more appropriate written with a for loop because I know I want the code to run 100 times. 





// Notes
    // need to work on names for everything so if someone were to work on this code, they would know what was going on
    // want to show work beginning to end so I know where I started, and how I worked throught the problems