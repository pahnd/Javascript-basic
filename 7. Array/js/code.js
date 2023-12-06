

const cars = ["Saab", "Volvo", "BMW"];
cars[0] = "Opel";
console.log('Check my data array: ', cars);
console.log('Data array to string: ', cars.toString());


//Bản chất array của JS là object nhưng cách thức quản lý dữ liệu khác

let person = {name: "Duy", age: 27};
console.log("type of person: ", typeof person, person);


let person1 = ["John", "Doe", "Jack"]
console.log("type of person1: ", typeof person1, person1)
console.log("first item: ", person1[0], " second item: ", person1[1])

//Array có thể chứa oject:
let family = [
    {name: "Duy", age: 27},
    {name: "Long", age: 24}
]
console.log('My family: ', family)
console.log('Who is first one ', family[0])
console.log('Age of Duy : ', family[0].age)