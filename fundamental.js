//1. how to declare a variable using let and const
const fathersName = 'ponir';
let season = 'winter';
season = 'summer';

//condition basic condition <,>,===,!==,<=,>=
// multiple condition : && ,|| 
if (fathersName === 'Ponir' || season === 'rainy') {

}
else if (fathersName === 'ponir') {

}
else {

}
// 3. array
// length
// index,push
const numbers = [89, 35, 98, 12];
numbers[0] = 56;

// 4.for loop ami cai numbers array theke element nia set korte
for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];

}

// 5. function 
const multiple = (a, b) => a * b;


function multiply(num1, num2) {
    const result = num1 * num2;
    return result;
}
const output = multiply(5, 7);

// 6. object
// 3 ways to access property by name 
const student = {
    name: 'hero alam',
    age: 38,
    song: ['kaca badam', 'taitanic']
}
const myAge = 'age'
console.log(student.age) //direct by property
console.log(student['age']) //access via property name string
console.log(student[myAge]); //access via property name in a variable.