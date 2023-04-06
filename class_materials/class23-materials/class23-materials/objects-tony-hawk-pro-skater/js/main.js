//Create a Tony Hawk Pro Skater constructor that makes fighting game characters with 4 properties and 3 methods

function ProSkater(characterName, catchphrase, skateBoardColor, specialMove){
    this.character = characterName
    this.catchphrase = catchphrase
    this.skateBoardColor = skateBoardColor
    this.specialMove = specialMove

    this.kickFlip = function(){
        console.log('do move')
    }
    this.sayCatchPhrase = function(){
        console.log(`${this.catchphrase}`)
    }
    this.speical = function(){
        console.log(`${this.catchphrase}`)
        console.log(`${this.specialMove}`)
    }
}

let mooseyProSkater = new ProSkater('Moose360', 'Sick sidewalk surfing dude', 'Orange', 'Ollie')