// Come up with with a parent class
// Extend that parent class into two children
// Use Encapsulation, Abstraction, Inheritance, and Polymorphism 

class Contractor {
    constructor(name, role){
        this._name = name
        this._role = role
    }
    get name(){
       return this._name
    }

    get role(){
        return this._role
    }
    sayHello(){
        console.log(`Hello, I am on the ${this._role} team at #100Devs!`)
    }
    
}

class Front extends Contractor {
    constructor(name, role, tech){
        super(name, role)
        this._tech = tech 
    }
    get tech(){
        return this._tech
    }

    sayHello(){
        console.log(`Hello! My name is ${this._name}. I am on the ${this._role} team and I use ${this._tech}`)
    }
}

class Back extends Contractor {
    constructor(name, role, tech){
        super(name, role)
        this._tech = tech
    }

    get tech(){
        return this._tech
    }

    sayHello(){
        console.log(`Hello! My name is ${this._name}. I am on the ${this._role} team and I use ${this.tech}`)
    }
}

let jude = new Contractor('Jude', 'Front-end')
let steph = new Front('Steph', 'Front-end', 'JavaScript')
let kevin = new Back('Kevin', 'Back-end', 'Ruby')

let agencyList = [jude, steph, kevin]

// a loop that runs a piece of code for each elements in the agencyList aray. 
for(person of agencyList){
    person.sayHello()
}



// LEON'S CODE
// class Contractor{
//     constructor(name,role){
//         this._name = name
//         this._role = role
//     }
//     get name(){
//         return this._name
//     }
//     get role(){
//         return this._role
//     }
//     sayHello(){
//         console.log(`Hello, I am on the ${this._role} team at #100Devs!`)
//     }
// }
// class Front extends Contractor{
//     constructor(name,role,tech){
//         super(name,role)
//         this._tech = tech
//     }
//     get tech(){
//         return this._tech
//     }
//     sayHello(){
//         console.log(`Hello, I am on the ${this._role} team at #100Devs and I use ${this._tech}`)
//     }
// }
// class Back extends Contractor{
//     constructor(name,role,tech){
//         super(name,role)
//         this._tech = tech
//     }
//     get tech(){
//         return this._tech
//     }
//     sayHello(){
//         console.log(`Hello, I am on the ${this._role} team at #100Devs and I use ${this._tech}`)
//     }
// }
// let bob = new Contractor('Bob','Front-end')
// let simba = new Front('Simba','Front-end','React')
// let machi = new Back('The Machine','Back-end','Node')

// let agency = [bob,simba,machi]

// for(person of agency){
//     person.sayHello()
// }



