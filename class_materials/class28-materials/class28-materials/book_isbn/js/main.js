//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)

document.querySelector('h2').innerText = localStorage.getItem('books')

function getFetch(){
  const input = document.querySelector('input').value
  console.log(input)
  // const url = `https://openlibrary.org/isbn/9780140328721.json`
  const url = `https://openlibrary.org/isbn/${input}.json`


fetch(url)
  .then(res => res.json()) // parse response as JSON
  .then(data => {
    console.log(data.title)
    
    // without this if else staements, we would get null when this is ran the first time
    if(!localStorage.getItem('books')){
      localStorage.setItem('books', data.title)
    }else{
      // put title in localStorage 
      let books = localStorage.getItem('books') + " ; " + data.title
      localStorage.setItem('books', books)
    }

    // being put into DOM using localStorage instead of raw data
    document.querySelector('h2').innerText = localStorage.getItem('books')

  })
  .catch(err => {
      console.log(`error ${err}`)
  });
}
