// Magic Eight Ball
document.querySelector('button').addEventListener('click', getAnswer);

const userQuestion = document.querySelector('input').value;
let randomNumber = Math.floor(Math.random() * 8);
let eightBall = ''; 

function getAnswer(){
  if (userQuestion.length === 0){
    document.querySelector('h3').innerText = 'Please Enter Question';
  } else if (userQuestion.length > 0) {
    switch (randomNumber) {
      case 0:
        eightBall = 'It is certain';
        break; 
      case 1:
        eightBall = 'Don\'t count on it';
        break;
      case 2:
        eightBall = 'Better not tell you now';
        break;
      case 3:
        eightBall = 'Without a doubt';
        break;
      case 4:
        eightBall = 'Signs point to yes';
        break;
      case 5:
        eightBall = 'My sources say no';
        break;
      case 6:
        eightBall = 'Concentrate and ask again';
        break;
      case 7:
        eightBall = 'Outlook not so good';
        break;
      default :
        eightBall = 'YES'               
        break;
    }
  } else {
    eightBall = 'Cannot predict now'
  }
}

console.log(eightBall);
document.querySelector('#answer').innerText = eightBall;


// it will add the answer to the h3 but it will not say... something wrong with page load but idk what it is 