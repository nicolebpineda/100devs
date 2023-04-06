//Create a constructor with 4 properties and 3 methods

function MakePizza(size, crust, sauce, toppings){
    this.size = size
    this.crust = crust
    this.sauce = sauce
    this.toppings = toppings
    
    this.burnMouth = function(){
        console.log('FJowg[apmvpaojalsbb')
    }

}

let meatLoversPizza = new MakePizza ('large', 'normal', 'red', ['bacon', 'sausage', 'ham', 'pepperoni', 'salami'])

