// Play with Variables

// Improved Hello
    const userName = prompt('Please enter your name.');
    alert(`Welcome to the program ${userName}. \nWe are excited to have you.`);

// Final Values
    // the code             // my prediction
    let a = 2;              // 2
    a -= 1;                 // 1
    a++                     // 2
    let b = 8               // 8
    b += 2;                 // 10
    const c = a + b * b;    // 102
    const d = a * b + b;    // 30
    const e = a * (b + b);  // 40
    const f = a * b / a;    // 10
    const g = b / a * a;    // 10
    console.log(a, b, c, d, e, f, g);

// VAT calculation
    let price = Number(prompt('Pleace enter price item'));
    let i = (price * .206) + price;
    alert(`The price after tax equals ${i}`);
    // I think this is correct. I have never heard of a VAT 
    // but I googled a VAT calculater and got the same answer so *shrug*

// From Celsius to Fahrenheit degrees
    let celsius = Number(prompt('Celsius to Fahrenheit Conversion'));
    let conversion = celsius * (9 / 5) + 32;
    alert(`${conversion}\u00B0F`);
        // even made it have the degree symobol. I know, I'm cool. 

// Variable swapping
    let number1 = 5;
    let number2 = 3

    let number3 = 2
    number1 -= number3
    number2 += number3

    console.log(number1); // shows 3
    console.log(number2); // shows 5 

        // okay I did start to write out:
            // number1 = number2
        // but stoped there and erased cuz my thought process went as follows: I can't put number2 = number1 afterwards cuz now number1 is changed. 
        // so I tried a new approach, but if I would have stuck with it, then I might have figured out using a temporary variable, as shown below 
            // temp = number1
            // number1 = number2
            // number 2 = temp
        // which is what I just read in an article about swapping variables after completing the task. 

