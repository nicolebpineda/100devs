//Example fetch using DnD5eAPI - place subclasses in ul
document.querySelector('button').addEventListener('click', getSpell)

function getSpell(){
  const choice = [document.querySelector('input').value.toLowerCase()]
  let choiceHyphen = choice.toString().split(' ').join('-');
//   console.log(choiceHyphen)
  
  const url = `https://www.dnd5eapi.co/api/spells/${choiceHyphen}`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        // console.log(data);
        // document.querySelector('h3').innerText = data.subclasses[0].name;
        // document.querySelector('ul').innerText = data.subclasses[1].name

        // hard coded above. let's change that
        // data.subclasses.forEach(obj => console.log(obj.name))

        // now lets put it in the dom
        data.subclasses.forEach(obj => {
            console.log(obj.name);
            
            // create li
            const li = document.createElement('li')
            // add text to li
                // document.querySelector('li').innerText = obj.name
                // not written correctly^^   //error
                // another way to write it
            li.textContent = obj.name
            //append the li to the ul
            document.querySelector('ul').appendChild(li)

            // need to learn to remove child
        })
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

