const numbers = [89, 35, 98, 12];
const student = {
    name: 'hero alam',
    age: 38,
    song: ['kaca badam', 'taitanic']
}

// 1. template string 
const about = `My name is ${student.name} age of ${student.age} has number ${numbers[2]} also liked movies ${student.song[1]}`;
console.log(about)

// 2.arrow function 
const getFiftyFive = () => {
    55;
}
const sixtyFive = num => num + 65;
const isEven = x => x % 2 == 0;
const addThree = (n1, n2, n3) => n1 + n3 + n2;
const doMath = (num1, num2) => {
    const sum = num1 + num2
    return sum;
}

// 3. spread operator
const newNumbers = [...numbers];
//create a new array from an older array and add an element
const currentNumbers = [...numbers, 55]


numbers.push(98)
numbers.push(98)
numbers.push(98)
console.log(numbers)
console.log(newNumbers)
console.log(currentNumbers)
