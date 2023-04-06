// //Create an array of movie titles. Loop through the array and each element to the h2.
// let movieTitles = ['Ready Player One', 'Lilo and Stitch', 'Sing Street']

// for (let i = 0; i < movieTitles.length; i++){
//     document.querySelector('h2').innerText += movieTitles[i]
// }


// //Create an array of numbers. Loop through the array and three to each number and replace the old number.

// let numberList = [13, 27, 72, 90]

// // num[0] = num[0] + 3    // instead of having to repeat, we put this in a forEach loop
// // num[1] = num[2] + 3
// // num[2] = num[3] + 3

// numberList.forEach((item, i) => {
//     numberList[i] = item + 3
// })


// //Find the average of all the numbers from question three

// let average = [(numberList[0] + numberList[1] + numberList[2] + numberList[3]) / numberList.length]
// console.log(average)

// // OR

// let avrg = 0

// for (let i = 0; i < numberList.length; i++){
//     avrg = (avrg + numberList[i]) 
// }
// console.log(avrg / numberList.length)






// TESTING TESTING

function lovefunc(flower1, flower2){
  
    if (flower1 % 2 === 0 && flower2 % 2 !== 0) {
      console.log('In Love')
    } else if (flower1 % 2 !== 0 && flower2 %  2=== 0 ) {
      console.log('In Love')
    } else if (flower1 % 2 === 0 && flower2 % 2 === 0 ) {
      console.log('Not in Love')
    } else if (flower1 % 2 !== 0 && flower2 % 2 !== 0) {
      console.log('Not in Love')
    } else {
      console.log('Error')
    }
  }
  
  lovefunc(2, 3)