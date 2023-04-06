// let userName = 'Sushi';

// userName ? console.log(`Hello ${userName}!`) : console.log('Hello!')

// const userQuestion = 'Should I play in the snow with Ramen tomorrow?'

// console.log(`${userName} asked: ${userQuestion}`)

// let randomNumber = Math.floor(Math.random() * 8);

// // let eightBall = '';
// // if (randomNumber === 0) {
// //   eightBall = 'It is certain'
// // } else if (randomNumber === 1 ) {
// //   eightBall = 'It is decidely so'
// // } else if (randomNumber === 2) {
// //   eightBall = 'Reply hazy, try again'
// // } else if (randomNumber === 3) {
// //   eightBall = 'Without a doubt'
// // } else if (randomNumber === 4) {
// //   eightBall = 'Most likely yes'
// // } else if (randomNumber === 5) {
// //   eightBall = 'Outlook good'
// // } else if (randomNumber === 6) {
// //   eightBall = 'Concentrate, ask again'
// // } else if (randomNumber === 7) {
// //   eightBall = 'Don\'t forget to invite your buddies!'
// // } 

// // console.log(eightBall)




// // Write with a Switch Statement

// let eightBall = '';                         // its not working and I dont know why!!!! argh
// switch (randomNumber) {
//   case 0:
//     eightBall = 'It is certain';
//     break; 
//   case 1:
//     eightBall = 'It is decidely so';
//     break;
//   case 2:
//     eightBall = 'Reply hazy, try again';
//     break;
//   case 3:
//     eightBall = 'Without a doubt';
//     break;
//   case 4:
//     eightBall = 'Most likely yes';
//     break;
//   case 5:
//     eightBall = 'Outlook good';
//     break;
//   case 6:
//     eightBall = 'Concentrate, ask again';
//     break;
//   case 7:
//     eightBall = 'Don\'t forget to invite your buddies!';
//     break;
//   default :
//     eightBall = 'YES'               
//     break;
// }

// console.log(eightBall)






var countSheep = function (num){
  let i = 1;
  while (i <= num) {
    console.log(`${i} sheep...`);
    i++;
  }
}

countSheep(3);