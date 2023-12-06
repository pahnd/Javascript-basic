function sum(a, b) {
    return a + b 
}


function noReturn(a, b) {
    console.log('Value of a: ', a)
    console.log('Value of b: ', b)
}

function returnZero(a, b) {
    console.log('Value of a: ', a)
    console.log('Value of b: ', b)
    if (a === 30) {
        return
    }
    return a + b 
}

returnZeroArrow = (a, b) => {
    console.log('Value of a: ', a)
    console.log('Value of b: ', b)  
    return; 
}


//Arrow function
sum = (a, b) => {
    return a + b 
}

//Arrow functionc return value by default. Return "Hello World"
hello = () => "Hello World";


let c = sum(10, 20)

console.log('sum: ', c)
console.log('sum: ', sum(20,30))

console.log('noReturn function: ', noReturn(10,20))

console.log('returnZero function: ', returnZero(30,40))

console.log('returnZeroArrow function: ', returnZeroArrow(50,60))
console.log(hello())