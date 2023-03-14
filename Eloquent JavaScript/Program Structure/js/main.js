// //Program Structure
    
//     // Looping a Triangle
//         let tri = '#'        
//         for (let i = 0; i <= tri; i++) {    
//             console.log(tri)        // Tried to do it, got kinda stuck, wasn't sure. looked at hints.
//             tri = '#' += '#'        // should have spent more time testing and trying before going to the hints
//         }

//         let counter = 0
//         let triangle = '#'
//         while(counter < 7) {
//             console.log(triangle)
//             triangle = triangle += '#'
//             counter++
//         }

//     // FizzBuzz for the third time
//         for (let i = 0; i <= 100; i++) {        // started with zero cuz gotta get used to starting with zero
//             if (i % 3 !== 0 && i % 5 !== 0) {
//                 console.log(i)
//             } else if (i  % 3 === 0 && i % 5 === 0) {
//                 console.log('FizzBuzz')
//             } else if ((i % 3 === 0)) {
//                 console.log('Fizz')
//             } else if (i % 5 === 0) {
//                 console.log('Buzz')
//             }    
//         }

//         for (let i = 0; i <= 100; i++) {        // written a little simpler
//             if (i  % 3 === 0 && i % 5 === 0) {
//                 console.log('FizzBuzz')
//             } else if ((i % 3 === 0)) {
//                 console.log('Fizz')
//             } else if (i % 5 === 0) {
//                 console.log('Buzz')
//             }else {
//                 console.log(i)
//             } 
//         }

//         let i = 0;                              // written as a while loop
//         while (i <= 100){
//             if (i % 3 === 0 && i % 5 === 0) {
//                 console.log('FizzBuzz')
//             } else if (i % 3 === 0) {
//                 console.log('Fizz')
//             } else if (i % 5 === 0) {
//                 console.log('Buzz')
//             } else {
//                 console.log(i)
//             } i++;
//         }


//     // Chessboard
//         let i = 0;
//         while (i < 8) {                 // Okay so this works, but now I gotta do it so if the "binding size"
//             if (i % 2 === 0) {          // In this case *, changes, I know how many characters to do 
//                 console.log('# # # # ')
//             } else if (i % 2 !== 0) {
//                 console.log(' # # # #')
//             }
//             i++
//         }


//         let i = 0;                          // i don't know how to write that I want " #" to console.log one after another
//         let bindingSize = 15                // (bindingSize) times to make the width. and then also console.log it
//         while (i < bindingSize) {           // (binginsSize) more times to make the height
//             console.log(' #')               // I read the hints and I am still confused. accept the loop in a loop. 
//             i++                            // That makes sense. 
//         }

