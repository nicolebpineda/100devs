// Variables
//You are getting ready to face Brock for the Boulder Badge. You want three pokemon on your team that each have evolved at least once. You have bulbasaur which is at level 5 and evolves at level 16, caterpie which is at level 1 and evolves at level 7, and weedle which is at level 1 and evolves at level 7. Create three variables to store the number of rare candies each of your pokemon would need to evolve (rare candies increase your level by one). Finally, create a fourth variable named totalCandies that sums all the rare candies you would need. 

    let bulbasaurCandies = 11;
    let caterpieCandies = 6;
    let weedleCandies = 6;

    let totalCandies = bulbasaurCandies + caterpieCandies + weedleCandies;

    console.log(totalCandies);

//Conditionals And Functions
//You have a charmander in your party. Charmander can only battle if the temperature is above 0 degrees celcius. Create one function that converts a Fahrenheit value to Celcius and another fuction that tells you whether or not charmander can battle

    function fahrenheitToCelcius(temp){
        return (temp - 32) * (5/9);
    }

        // rewritten as an arrow function 
        // temp => {
        //     return (temp - 32) * (5/9)
        // }
        // wait how do you call an arrow function? 
        // after researching: you don't. so don't write function with arrow syntax if you need to call them.


    function battle(currentTemp){
        let converted = fahrenheitToCelcius(currentTemp);
        if(converted > 0) {
            console.log('Charmander is ready for battle')
        }else {
            console.log('Charmander is not ready for battle')
        }
    }

    battle(33)
    battle(45)
    battle(24)


//Loops
//You have joined an undeground pokemon leauge. In this league, trainers can use any number of pokemon. Print to the console "Pikachu I choose you" x times where x is the number of pokemon the trainer you are battling has in their party

    function undergroundPokemonLeague(partySize){
        for(let i = 0; i < partySize; i++){
        console.log('Pikachu I choose you');
        }
    }

    undergroundPokemonLeague(3)