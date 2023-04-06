// Add Conditions

// Following Day
    let day = prompt('What is the following day').toLowerCase()
    if (day === "sunday") {
        alert("The following day is Monday")
    } else if (day === "monday") {
        alert("The following day is Tuesday")
    } else if (day === "tuesday") {
        alert("The following day is Wednesday")
    } else if (day === "wednesday") {
        alert("The following day is Thursday")
    } else if (day === "thursday") {
        alert("The following day is Friday")
    } else if (day === "friday") {
        alert("The following day is Saturday")
    } else if (day === "saturday") {
        alert("The following day is Sunday")
    } else {
        alert("Not a valid day")
    }
        
// Number Comparison
    let a = 6;
    let b = 8; 
    if (a === b) {
        alert("These are of same value and type")
    } else if (a == b) {
        alert("These are of the same value but not type")
    } else if (a !== b ) {
        alert("These are not of the same value or type")
    } else {
        alert("error")
    }
        // I think this is what it wanted

// Final Values
    let nb1 = Number(prompt("Enter nb1:"))
    let nb2 = Number(prompt("Enter nb2:"))
    let nb3 = Number(prompt("Enter nb3:"))

    if (nb1 > nb2){
        nb1 = nb3 * 2;
    } else {
        nb1++;
        if (nb2 > nb3) {
            nb1 += nb3 * 3;
        } else {
            nb1 = 0;
            nb2 = nb3 * 2 + nb2;
        }
    }
    console.log(nb1, nb2, nb3);

            //Initial Values   // Final values:  // nb1   // nb2   //nb3
            // nb1 = nb2 = nb3 = 4                  0        12      4
            // nb1=4, nb2=3, nb3=2                  4        3       2
            // nb1=2, nb2=4, nb3=0                  3        4       0

// Number of Days In a Month
        /* first I need a value from the user. 
        if they choose 1, i need it to display 31 days
        if they choose 2, i need it to display 28 days

        Jan, Mar, May, July, Aug, Oct, Dec have 31 days 
        Feb has 28 days
        April, June, Sept, Nov have 30 days. 
        */

    let monthNumber = Number(prompt("Choose a month by inputing its corresponding numeber"))

    if (monthNumber === 2) {
        alert("28 days")
    } else if ((monthNumber === 4) || (monthNumber === 6) || (monthNumber === 9) || (monthNumber === 11)) {
        alert("30 days")
    } else if (monthNumber === 1 || (monthNumber === 3) || (monthNumber === 5) || (monthNumber === 7) || (monthNumber === 8) || (monthNumber === 10) || (monthNumber === 12)) {
        alert("31 days")
    } else {
        alert("Invalid Month")
    }

    // apparently there is a math way to do it but I don't even know where to start


// Following Second

    let hour = Number(prompt("Enter hours"))
    let minute = Number(prompt("Enter minutes"))
    let second = Number(prompt("Enter second"))
            
    if ((hour < 0) || (minute < 0 ) || (second < 0)) {
        console.log("Negative Numbers are Invalid")
    } else if ((hour < 24) && (minute <= 59) && (second < 59)) {
        console.log(`${hour}h${minute}m${second + 1}s`)
    } else if ((hour < 24) && (minute < 59) && (second === 59)) {
        console.log(`${hour}h${minute + 1}m${0}s`)
    } else if ((hour === 23) && (minute === 59 ) && (second === 59)) {
        console.log(`${0}h${0}m${0}s`)
    } else if ((hour < 24) && (minute === 59 ) && (second === 59)) {
        console.log(`${hour + 1}h${0}m${0}s`)
    } else {
        console.log("Invaid Time")
    }
        /* 
            first I need the three values from the user. 
            then each of those values need to add by one
            but if the minute is 59, it needs to become 0
            and if the second is 59, it needs to become 0 
        */

