//Arrays

//Create and array of tv shows. Loop through and print each show to the console
let tvShows = ['Brooklyn 99', 'Parks & Rec', 'The Office', 'Friends', 'How I Met Your Mother']

// tvShows.map(console.log(tvShows)) 

tvShows.forEach( show => console.log(show))


//Create and array of numbers
let arrayOfNums = [1, 2, 3, 4, 5, 6]
//Return a new array of numbers that includes every even number from the previous Arrays


let onlyEvens = arr => arr.filter(n => n % 2 === 0)

console.log(onlyEvens(arrayOfNums))


//Create a function that takes in an array of numbers
//Alert the sum of the second lowest and the second highest number

function alertSum(array){
    let sorted = array.sort((a,b)=> a-b)
    alert(sorted[1] + sorted[sorted.length - 2])
}

alertSum([2, 3, 1, 5, 4])