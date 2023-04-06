//Write your pseduo code first! 


// need first temp value 
document.querySelector('#yell').addEventListener('click', convert)


// need a button to click to convert the temp
function convert() {
    let degree = document.querySelector('#cel').value
    // convert temp
    degree = degree * 9/5 + 32
    // need to display the converted temp
    document.querySelector('#placeToYell').innerText = degree
  }



