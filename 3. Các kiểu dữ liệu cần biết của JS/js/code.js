console.log(`Hello ' ' " ' world from javascript: `)

//Khai báo một biến. Js sẽ tự định nghĩa kiểu giá trị biến
let x = 5, y = 6, z = 7;

console.log("Test string", 'x= ', x, 'y= ', y, 'z= ', z)
//Sẽ in ra sai vì js khi có dấu + sẽ hiểu là cộng các giá trị lại với nhau. NaN error. Ở đây Test string 222: + x nghĩa là string + string => JS sẽ báo lỗi not a number.
console.log("Test string 222:", + 'x= ' + x + 'y= ' + y + 'z= ' +z )
//Đúng phải
console.log("Test string 222:", 'x= ' + x + 'y= ' + y + 'z= ' +z )


const a = 6;

let car;    // Value is undefined, type is undefined
car = "";    // The value is "", the typeof is "string"
car = 5;       // Now x is a Number
car = "John";  // Now x is a String
const cars = ["Saab", "Volvo", "BMW"]; //Now cars is a array


const person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"}; // person is a object and has 4 properties: firstName, lastName, age, and eyeColor