import moment from 'moment';

console.log('Hello from Javascript!!!')
console.log(moment().startOf('day').fromNow());
console.log(moment().endOf('day').fromNow());

var name = "Bob";
var time = "today";
console.log(`Hello ${name}, how are you ${time}?`);
