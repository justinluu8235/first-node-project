function helloClass(){
    return 'Good morning. Please put sonic emoji in Slack.';
}

//run the function
//console.log(helloClass());


class Human{
    constructor(name, age){
        this.name = name;
        this.age = age;
        this.introduction = function(){
            return 'Hi';
        }
    }


}

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

module.exports = {
     helloClass,
     human: Human,
     person
};

