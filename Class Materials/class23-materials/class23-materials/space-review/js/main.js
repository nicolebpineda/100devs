//Arrays

//Create and array of numbers. Sum all of the numbers. Alert the sum.
    let arrOfNums = [7, 8, 9, 1, 3];
    let sumOfNums = 0;
    for (let i = 0; i < arrOfNums.length; i++){
        sumOfNums = sumOfNums + arrOfNums[i]
    }
    console.log(sumOfNums);

        // other ways

        console.log( arrOfNums.reduce( (acc, c) => acc + c, 0) )
        // first parameter is accumulation
        // second parameter c is current value



//Create a function that takes in an array of numbers
//Return a new array of numbers that is every original number squared
    let newArr = arrOfNums => arrOfNums.map( num => num**2)


//Create a function that takes string
//Print the reverse of that string to the console
    let unoReverse = str => console.log( str.split('').reverse().join('') )

//Create a function that takes in a string
//Alert if the string is a palindrome or not

    const palindromeCheck = string => alert(string === string.split('').reverse().join(''))

    palindromeCheck('racecar')