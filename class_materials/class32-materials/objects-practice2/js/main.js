// Come up with with a parent class
// Extend that parent class into two children
// Use Encapsulation, Abstraction, Inheritance, and Polymorphism 


class Sushi{
    constructor(name,type,cooked){
        this._name = name
        this._type = type
        this._cooked = cooked
    }
    get name(){
        return this._name
    }
    get type(){
        return this._type
    }
    get cooked(){
        return this._cooked
    }
}

class Rolls extends Sushi{
    constructor(name,type,cooked,contents){
        super(name,type,cooked)
        this._contents = contents
        this.sides = ['soy sauce','ginger','wasabi']
    }
    
    get contents(){
        return this._contents
    }

    describe(){
        console.log(`The ${this._name} roll contains ${this._contents} and is served with ${this.sides} on the side.`)
    }


    deepFried(){
        return `${this._name} deep fried!`
    }
}

class Nigiri extends Sushi{
    constructor(name, type, cooked, topping){
        super(name,type,cooked)
        this._topping = topping
    }

    get topping(){
        return this._topping
    }

    describe(){
        if (this._cooked === true){
            console.log(`${this.name} is a raw piece of ${this._topping} served on a pillow of rice.`)
        } else {
            console.log(`${this.name} is a cooked piece of ${this._topping} served on a pillow of rice`)
        }
    }
}


const lasVegas = new Rolls('Las Vegas', 'Maki', true, ['rice', 'crab', 'smoked salmon', 'cream cheese', 'avocado']);
const rainbow = new Rolls('Rainbow Roll', 'Uramaki', false, ['imitation crab', 'avocado', 'cucumebr', 'tuna', 'yellowtail', 'salmon'])

const sake = new Nigiri('Sake Nigiri', 'Nigiri', false, 'Salmon')
const tamago = new Nigiri('Tamago Nigiri', 'Nigiri', true, 'Egg Omelete')