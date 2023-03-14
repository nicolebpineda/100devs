//Create a function that takes in an array of numbers. Multiply each number together and alert the product. 
let arrayOfNumbers = [1, 2, 3, 4, 5]

function name() {
    let prod = arrayOfNumbers[0] * arrayOfNumbers[1] * arrayOfNumbers[2] * arrayOfNumbers[3] * arrayOfNumbers[4]

    alert(prod)
}

name()


// or

function multiNumsInArr(arr) {
    let product = 1
    arr.forEach( num => product *= num)
    alert(product)
}

multiNumsInArr([10, 2, 3])