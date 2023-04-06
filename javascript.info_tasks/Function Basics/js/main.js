//FUNCTION BASICS /////////////////////////////////////////////////////////////////////////////////////
// is "else" required
function checkAge(age) {
    if (age > 18) {
      return true;
    } else {
      return confirm('Did parents allow you?')
    }     
  }
  function checkAge(age) {  // no different they would act the same. 
    if (age > 18) {
      return true;
    }
      return confirm('Did parents allow you?') 
  }
  
  
  // Rewrite the funciton using '?' or ||
  function checkAge(age) {
    age = 'no text given' {
      return true;
    } else {
      return confirm('Did parents allow you?')
    }
  }
  function checkAge(age) {          // my two attempts. very wrong. had no idea what I was doing
    age = age || 'no text given' {
      return true;
    } else {
      return confirm('Did parents allow you?')
    }
  }
  
  function checkAge(age) {          // solutions 
    return (age > 18) ? true : confirm('Did parents allow you?');
  }
  function checkAge(age) {
    return (age > 18) || confirm('Did parents allow you?') 
  }
  // Wrong because you can't have an else, if there is no if. Goal of task was to use ?, did not do that. 
  
  
  //Funtion min(a, b)
  function min(a, b) {          // my attempt. didnt quite work, just give the 2nd number
    return a, b;                // again wasnt quite sure what I was doing
  }
  let result = min(a, b);
  alert ( result ); 
  
  function min(a, b) {          // solutions
    if (a < b) {
      return a;
    } else {
      return b;
    }
  }
  function min(a, b) {
    return a > b ? b : a
  }
  
  
  // Function pow(x, n)
  function pow(n) {
    for (let i = 2; i < n; i++)
    if (!isPrime(i)) continue;
  
    alert (i); 
  }
  function isPrime(n) {                   // literally had no idea what i was doing
    for (let i = 2; i < n; i++) {         // just copied fuctions == comments
      if ( n % i == 0) return false; 
    }
    return true;
  }
  
  function pow(x, n) {                     // solution
    let result = x;                        // i have no idea what is going on 
  
    for (let i = 1, i < n; i=++) {
      result *= x;
    }
  
    return result;
  }
  
  let x = prompt("x?", '');
  let n = prompt('n?', '');
  
  if (n < 1 ) {
    alert(`Power ${n} is not supported use a positive integer`);
  } else {
    alert( pow(x, n));
  }
