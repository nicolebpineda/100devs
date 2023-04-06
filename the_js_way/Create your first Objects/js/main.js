// Objects

// Adding caracter experience
    // // Auroura Character Object
    // const aurora = {
    //     name: 'Aurora', 
    //     health: 150,
    //     strength: 25, 

    //     describe() { // describe method inside object
    //         return `${this.name} has ${this.health} health points, ${this.strength} as strength and ${this.xp} XP points`;
    //     }
    // };

    // // // Return chracter description (funciton outside of object)
    // // function describe(character) {
    // //     return `${character.name} has ${character.health} health points, ${character.strength} as strength and ${character.xp} XP points`;
    // // }

    // // New property in array
    // aurora.xp = 0;

    // // Aurora is harmed by an arrow
    // aurora.health -= 20;

    // // Aurora equips a strength necklace
    // aurora.strength += 10;

    // // Aurora learns a new skill
    // aurora.xp += 15; 

    // // console.log(describe(aurora)) // (calling funciton outside of object)
    // console.log(aurora.describe());

// Modeling a dog
    // const dog = {
    //     name: 'Fang',
    //     species: 'boarhound', 
    //     size: 75, 
        
    //     bark() {
    //         return 'Grrr! Grrr!'
    //     }
    // }

    // console.log(`${dog.name} is a ${dog.species} dog measuring ${dog.size}`); 
    // console.log(`Look, a cat! ${dog.name} barks: ${dog.bark()}`);

// Modeling a circle
    // const r = Number(prompt('Enter the circle radius'));

    // const circle = {
    //     circumference(){
    //         return (2 * Math.PI * r)
    //     },
    //     area() {
    //         return (Math.PI * r ** 2)
    //     }
    // }

    // console.log(`Its circumference is ${circle.circumference()}`);
    // console.log(`Its area is ${circle.area()}`)

// Modeling a bank account
    const account = {
        name: 'Alex',
        balance: 0,
        credit(number){
            return this.balance += number;
        },
        describe(){
            return `owner: ${this.name}, balance ${this.balance}`
        }
    };
    console.log(account.describe());

    // crediting 250, then debiting 80
    account.credit(250);
    account.credit(-80);

    console.log(account.describe());