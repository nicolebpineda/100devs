// Ledgend of Zelda: Hyrule Compendium
document.querySelector('button').addEventListener('click', getItem)

function getItem(){
  const choice = document.querySelector('input').value
  // let userChoice = choice.toString().split(' ').join('_')
  // console.log(userChoice)

  // const test = 'https://botw-compendium.herokuapp.com/api/v2/entry/white-maned_lynel'
  const url = `https://botw-compendium.herokuapp.com/api/v2/entry/${choice}`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(item => {
        console.log(item)
        
        document.querySelector('h2').innerText = item.data.name
        document.querySelector('img').src = item.data.image
        document.querySelector('#description').innerText = item.data.description
        document.querySelector('#location').innerText = item.data.common_locations
        
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

