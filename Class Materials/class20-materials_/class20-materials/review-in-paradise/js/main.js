// *Variables*
// Declare a variable, reassign it to your favorite food, and alert the value
let favFood = 'bacon';
favFood = 'sushi';
alert(favFood)

//Declare a variable, assign it a string, alert the second character in the string (Use your google-fu and the MDN)
let tree = 'sting value';
// const index = 1;
alert(tree.charAt(1) );
//or 

let str = "This is an example";
alert(str[1])


// *Functions*
// Create a function that takes in 3 numbers. Divide the first two numbers and multiply the last. Alert the product. Call the function.
function divide2multiply(num1, num2, num3) {
    let answer = ((num1 / num1) * num3)
     return answer
}
alert(divide2multiply(12, 6, 2))


// Create a function that takes in 1 number. Console log the cube root of the number. Call the function.
function cubeRoot(nb1) {
    console.log(Math.cbrt(nb1));
}
cubeRoot(27)

// *Conditionals*
//Create a function that takes in a month. If it is a summer month alert "YAY". If another other month, alert "Booo"
function whatMonth(){
    let i = prompt('Pick a month').toLowerCase()
    if (i ==='june' || i === 'july' || i === 'august') {
        alert('YAY')
    } else if (i ==='january' || i === 'february' || i === 'march' || i ==='april' || i === 'may' || i === 'september' || i ==='october' || i === 'november' || i === 'december') {
        alert('Booo')
    } else {
        alert('not a month')
    }
}

whatMonth()

//*Loops*
//Create a function that takes in a number. Console log every number from 1 to that number while skipping multiples of 5.

function skip5s() {
    let number = prompt('pick a number');
    for (let i = 1; i <= number; i++) {
        if (i % 5 !== 0) {
            console.log(i)
        }
    }
}

skip5s()