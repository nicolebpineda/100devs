// Yes or No
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const choice = document.querySelector('input').value
  console.log(choice)
  const url = `https://yesno.wtf/api`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        // document.querySelector('h3').innerText = data.answer
        
        if (data.answer === 'yes'){
          document.querySelector('img').src = "img/yes.png"
        } else if (data.answer === 'no'){
          document.querySelector('img').src = "img/no.png"
        }
         
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}
