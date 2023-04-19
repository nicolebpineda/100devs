// Dogs 
class Dog {
    constructor(dogName, species, size){
        this.name = dogName;
        this.species = species;
        this.size = size;
    };

    bark(){
        if (this.size > 60){
            console.log('Grrr! Grrr!');
        }else {
            console.log('Woof! Woof!');
        }
    } 
}

const fang = new Dog ('Fang', 'boarhound', 75);
console.log(`${fang.name} is a ${fang.species} dog measuring ${fang.size}`);
console.log(`Look, a cat! ${fang.name} barks: ${fang.bark()}`);

const snowy = new Dog('Snowy', 'terrier', 22);
console.log(`${snowy.name} is a ${snowy.species} dog measuring ${snowy.size}`);
console.log(`Look, a cat! ${snowy.name} barks: ${snowy.bark()}`);
            // bark() method will console.log undefined and I'm not sure why

// Character Inventory


// Account List
