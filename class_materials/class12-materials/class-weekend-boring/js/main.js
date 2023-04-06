document.querySelector('#check').addEventListener('click', check)

function check() {

  const day = document.querySelector('#day').value

  //Conditionals go here
 if (day === "Tuesday" || day === "Thurday"){
  alert('CLASS DAY')
}
else if (day === Saturday || day === Sunday){
  alert('Weekend')
}
else{
  alert('boring!')
}

}


 
