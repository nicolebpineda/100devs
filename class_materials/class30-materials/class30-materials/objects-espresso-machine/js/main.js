//Create an espresso machine constructor that makes machines with 4 properties and 3 methods

class MachineMaker{
    constructor(make, model, price, color ){
        this.make = make
        this.model = model
        this.price = price
        this.color = color
    }
    pressButton(){
        console.log('beep boop')
    }
    welcomeMessage(){
        console.log('Hello. How can I help you')
    }
    errorMessage(){
        console.log('Error. Please restart machine')
    }
}

let coffeeMachine = new MachineMaker('Best Brand', 2000, 400, 'hot pink')