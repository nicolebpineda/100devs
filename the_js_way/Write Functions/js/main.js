// Writing Functions 
  
// Improved Hello
    function sayHello(firstName, lastName) {
        const message = `Hello, ${firstName} ${lastName}!`;
        return message;
    }

    let firstName = prompt('What is your first name?');
    let lastName = prompt('What is your last name'); 

    alert(sayHello(firstName, lastName));               // omg wait I think I actually did it first try
        // I don't understand the point of return message. 

// Number Squaring
    function square1(x) {
        let numberSquared = x * x; 
        return numberSquared;
    }                                // first tryyyyy
    console.log(square1(0));         // shows 0
    console.log(square1(2));         // shows 4
    console.log(square1(5));         // shows 25


    const square2 = x => x * x;      // very minimalist verison
    console.log(square2(0));         // shows 0
    console.log(square2(2));         // shows 4
    console.log(square2(5));         // shows 25


    const square3 = x => {
        let numberSquared = x * x;
        return numberSquared;
    }                                // rewritten with return
    console.log(square3(0));         // shows 0
    console.log(square3(2));         // shows 4
    console.log(square3(5));         // shows 25

// Minimum of Two Numbers
    function min(num1, num2) {
        if (num1 < num2) {                    // first tryyyy
            return num1
        } else if (num2 < num1) {
            return num2
        } else if (num1 === num2) {
            return num1
        }              
    } 

    console.log(min(4.5, 5));           // shows 4.5
    console.log(min(19, 9));            // shows 9
    console.log(min(1, 1));             // shows 1
            

// Calculator

    function calculate(num1, symbol, num2){
        const add = num1 + num2;
        const minus = num1 - num2;
        const multiply = num1 * num2;
        const divide = num1 / num2;
        if (symbol == "+") {            // I was stuck because I was putting the conditon as num1 + num2  
            return add                  // and so on for each symbol and conditonal execution. 
        } else if (symbol == "-") {     // The reason it needs to be symbol == "" is
            return minus                // because the function needs to know what the middle argument is
        } else if (symbol == "*") {     // in order to know which condition run/return
            return multiply
        } else if (symbol == "/") {
            return divide
        } 
    }

    console.log(calculate(4, "+", 6));  // Must show 10
    console.log(calculate(4, "-", 6));  // Must show -2
    console.log(calculate(2, "*", 0));  // Must show 0
    console.log(calculate(12, "/", 0)); // Must show Infinity           

          
// Circumference and area of a circle

    let radius = Number(prompt('Please enter radius of circle'))
    function circumferenceOfCircle() {
        let circumference = 2 * Math.PI * radius            // I think I did it
        return circumference
    }
  
    function areaOfCircle() {
        let area = Math.PI * (radius ** 2)
        return area
    }

    console.log(circumferenceOfCircle())
    console.log(areaOfCircle())