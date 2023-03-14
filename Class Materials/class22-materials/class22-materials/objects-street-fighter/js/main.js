//Create a street fighter constructor that makes fighting game characters with 4 properties and 3 methods
function MakeCharacter(fighterName, signatureMove, catchPhrase, weapon){
    this.fighterName = fighterName
    this.signatureMove = signatureMove
    this.catchPhrase = catchPhrase
    this.fighterweapon = weapon
    
    this.taunt = function (){
        console.log(`You can't handle my ${this.signatureMove}`)
    }
    this.winning = function (){
        console.log(`Haha! ${this.catchPhrase}`)
    }
}

let sushi = new MakeCharacter('Sushi', 'Sushi ROLL', 'I\'m gonna roll over you!', 'Chopsticks' )

let moosey = new MakeCharacter('Moosey', 'Antler Attack', 'You don\'t want to mess with me and my crew', 'Antlers')

let llamar = new MakeCharacter('Llamar', 'Double Back Kick', 'hmmmmmmmmmm YA!', 'Acid Spit')

let noodles = new MakeCharacter('Ramen Noodles', 'Lasso Tie Down', '*slurp sound* You just got served', 'sticky noodle rope')
