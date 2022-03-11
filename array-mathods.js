const products = [
    { name: 'laptop', price: 3200, brand: 'lenovo', color: 'silver' },
    { name: 'phone', price: 7000, brand: 'iphone', color: 'golden' },
    { name: 'watch', price: 3000, brand: 'casio', color: 'yellow' },
    { name: 'sunglass', price: 300, brand: 'ribon', color: 'black' },
    { name: 'camera', price: 9000, brand: 'canon', color: 'gray' },

];
//kono object er property k nia jodi amra array banate cai tobe map use korbo with return
const brands = products.map(product => product.brand)
// console.log(brands)
const price = products.map(product => product.price)
// console.log(price)

//without get return use forEach 
products.forEach(product => console.log(product.color))

//for multiline arrow function with return using forEach
products.forEach(product => {
    // console.log(product)
})

// 3. filter if you need to any fulfill conditon to get an array with object you try (filter)
const cheap = products.filter(product => product.price <= 5000);
// console.log(cheap)
const specificNam = products.filter(pd => pd.name.includes('n'))
// console.log(specificNam)

// 4.find if you need to get only first one include any object or array use (find)
const special = products.find(p => p.name.includes('n'));
console.log(special)