const numbers = [1,2,4,6,22,34];

const person = {
    name: "John Doe",
    age: 39,
    foods: ['burgers', 'fries'],
    car: {
        name:'Tesla',
        model: 'Model S',
        year: 2020
    }
}

//console.log(numbers);
//console.log(person.foods);

const myModule = require('./utils/myModule');
/*
console.log(myModule);
myModule.hello();
console.log(myModule.hello);
console.log(myModule.hello());
console.log(myModule.result);
console.log(myModule.goodbyeClass());

console.log(myModule.gBye()());
*/

const fs = require('fs');

fs.readFile('story.txt', 'utf8', function(err, data){
    if(err) {
        console.log("There was a problem reading the file.");
    } else {
        console.log(data);
    }
});



/*
const http = require('http');

http.createServer((req, res) => { 
   res.write('Goodbye, World!');
   res.end();
})
.listen(8000);
*/

const faker = require('faker');

let randomName = faker.name.findName();
console.log(randomName);

const randomAddress = {
    streetAddress: faker.address.streetAddress(),
    city: faker.address.city(),
    zipCode: faker.address.zipCode(),
    streetName: faker.address.streetName()

}

console.log(randomAddress);

const axios = require('axios'); // allows us to make API calls and retrieve data. fetch wont work on Node project

axios.get('https://api.github.com/users/justinluu8235')
.then(function(response){
    console.log(response.data);
})
.catch(function(err){
    console.log(err);
});

