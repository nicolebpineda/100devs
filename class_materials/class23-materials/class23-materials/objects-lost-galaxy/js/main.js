//Create a dog object that has four properties and three methods

let dog = {};

dog.legs = 3;
dog.color = 'brown';
dog.ears = 'pointy';
dog.status = 'good boy';

dog.bark = function speak(){
    alert('WOOF')
}

dog.happy = function happy(){
    console.log('wag tail')
}

dog.fetch = function(){
    console.log('run')
}