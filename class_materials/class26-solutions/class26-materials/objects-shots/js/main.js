//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM

fetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic")
    .then(res => res.json())
    .then(data => {
        console.log(data.drinks[37])

        document.querySelector('h2').innerText = data.drinks[38].strDrink

        document.querySelector('img').src = data.drinks[37].strDrinkThumb
        
        // document.querySelector('h3').innerText = data.drinks[0].strInstructions

    })


