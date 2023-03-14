//Create a function that takes in an array of numbers. Return a new array containing every even number from the original array (do not use map or filter)
// const array1 = [2, 5, 74, 37, 16, 99, 82, 35]

// const returnEven = array1.map(x => x % 2 === 0)

// console.log(returnEven)

// answer below

function onlyEvens(nums) {
    let evens = []

    nums.forEach(n => {
        if (n % 2 === 0) {
            evens.push(n)
        }
    })
    return evens
}

console.log(onlyEvens([2, 5, 74, 37, 16, 99, 82, 35]))




