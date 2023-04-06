// Inpirational Quotes
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  // const choice = document.querySelector('input').value
  // console.log(choice)
  const url = 'https://api.goprogram.ai/inspiration'
  // need to generate new quote every click

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        // 

        document.querySelector('h2').innerText = `\"${data.quote}\"`
        document.querySelector('h3').innerText = data.author
        
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

