
const person = {
    firstName: "John", 
    lastName: "Doe",
    age: 25, 
    eyeColor: "blue"
};
console.log(person.firstName)

// In JavaScript, the this keyword refers to an object
const person1 = {
    firstName: "David",
    lastName: "Jane",
    id: 5566,
    fullName: function() {
        return this.firstName + " " + this.lastName
    }
}
console.log(person1.fullName())