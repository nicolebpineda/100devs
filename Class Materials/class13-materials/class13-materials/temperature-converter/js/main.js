//Write your pseduo code first! 
// need an input space to put the degree in celcius 
// then a button in the middle that you press 
// and when the button is pressed it then calculates what the farenheite would be in another input

// there could also be drop downs with other optios of 

// need value that is celcius 

document.querySelector('#yell').addEventListener('click', convert)

function convert() {
    let temp = document.querySelector('#cel').value
    temp = temp * 9/5 + 32

    document.querySelector('#placeToYell').innerText = temp
}
