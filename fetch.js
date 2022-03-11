// JSON
const student = {
    name: 'hero alam',
    age: 38,
    song: ['kaca badam', 'taitanic']
}
const studentJSON = JSON.stringify(student);
console.log(student)
console.log(studentJSON)
const studentObj = JSON.parse(studentJSON);
console.log(studentObj)

// 2.fetch 
// fetch('url')
//     .then(res => res.json())
//     .then(data => console.log(data))

//keus,values
const keys = Object.keys(student)
const values = Object.keys(student)

//for(array in loop)
const numbers = [23, 54, 57, 87, 23, 78];
numbers.forEach(num => console.log(num))

//for of on array like object
//loop on an object using( for in)

//add or remove from an array
const products = [
    { name: 'laptop', price: 3200, brand: 'lenovo', color: 'silver' },
    { name: 'phone', price: 7000, brand: 'iphone', color: 'golden' },
    { name: 'watch', price: 3000, brand: 'casio', color: 'yellow' },
    { name: 'sunglass', price: 300, brand: 'ribon', color: 'black' },
    { name: 'camera', price: 9000, brand: 'canon', color: 'gray' },

];

const newProducts = { name: 'webcam', price: 700, brand: 'lal' };

//requierment: copy products array and then add newproduct
//এখানে একটা নতুন ভেরিয়েবল এর ভিতর নতুন কিন্তু হুবহু কপি products এর ভিতর newProducts কে যোগ করলাম|
const newProduct = [...products, newProducts];
console.log(newProduct)

//creat a new array withort one specific item
//remove phone means create a new array wihout the phone
const remaing = products.filter(p => p.name !== 'phone')