// Arrays
// Your pokemon party order which is a list of pokemon has been leaked to Misty. Please create a function that reverses your list and prints it to the console. 

    function reverseList(list){
        console.log(list.reverse())
    }
    
    reverseList([5, 6, 7, 8])


// Given two integer arrays a, b, both of length >= 1, create a program that returns true if the sum of the squares of each element in a is strictly greater than the sum of the cubes of each element in b.

    function isAGreater(x, y){
        
        let aSquaredSum = x.forEach(element => {
            let sum = 0;
            sum = sum + (element * element);
        });
        let bSquaredSum = y.forEach(element => {
            let sum = 0;
            sum = sum + (element **3);
        });

        if (aSquaredSum > bSquaredSum){
            return true 
        } else {
            return false
        }
    }

    console.log(isAGreater([2, 2, 2], [2, 2, 2])) // should return false. a = 12, b = 24
    console.log(isAGreater([5, 5, 5], [2, 2, 2])) // should return true. a = 75, b = 24
    // I am making this much more complicated than it needs to be. and its not even working. thought it was, guess not

    // Leons Method
    function compareSquareCube(a, b){
        return a.reduce((acc, c) => acc + c **2, 0) > b.reduce((acc, c) => acc + c **3, 0)
    }

    console.log(compareSquareCube([2, 2, 2], [2, 2, 2])) // returns false. a = 12, b = 24
    console.log(compareSquareCube([5, 5, 5], [2, 2, 2])) // returns true. a = 75, b = 24


// Return a new array consisting of elements which are multiple of their own index in input array (length > 1).
// Some cases:
// [22, -6, 32, 82, 9, 25] =>  [-6, 32, 25]
// [68, -1, 1, -7, 10, 10] => [-1, 10]

    function isMultiple(arr){
        return arr.filter((e, i) => e % i === 0)
    }


// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers. Return your answer as a number.
    // anytime "sum of array" is said, what method should come to mind. .reduce()

    function sumOfValues(arr){
        return arr.reduce((acc, c) => acc + Number(c), 0)
    };

    console.log((sumOfValues([1, 2, '3', '4', 5]))) // console.logs 15

    // codewars soultion (when you do the codewars, then submit it and the first answer is this seemingly simple one line solution)
    const s = r => r.reduce((a, c)=>+a+ +c, 0);
