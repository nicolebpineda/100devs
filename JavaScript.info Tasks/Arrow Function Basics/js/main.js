// Arrow Functions: the basics /////////////////////////////////////////////////////////////////////////////////
// Rewrite with arrow functions

function ask(question, yes, no) => confirm(question) yes() || no()

let func = (question, yes, no) => ask {
  
}
alert ( ask ('Do you agree?'))    // my attempts writing anything because I did not understand


function ask(question, yes, no) {           // solution
  if (confirm(question)) yes();
  else no();
}

ask (
  "Do you agree?"
  () => alert("You agreed".),
  () => alert("You canceled the execution.")
);
