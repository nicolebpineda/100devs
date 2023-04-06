//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const choice = document.querySelector('input').value.toLowerCase()
  const url = 'https://deckofcardsapi.com/api/deck/<<deck_id>>/draw/?count=2'

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

function convertToNum(val){
  switch (val){
    case 'ACE':
      return 14;
      break;
    case 'KING': 
      return 13;
      break;
    case 'QUEEN':
      return 12;
      break;
    case 'JACK': 
      return 11;
      break;
    default: 
      return Number(val)
  }
}
