//truth:'almaas',5,ture,{},[]
//',0,false,null,undefined
//check truthy
let myVr = 5;
if (myVr) {
    myVr = 100 * myVr
}
else {
    myVr = 0;
}

//check folsy
let myMoney = 50;
if (!myMoney) {

}

const money = 80;
let food;
if (money > 100) {
    food = 'biryani';
}
else {
    food = 'cha biscuit'
}
//for cute and simple shortcut teqnique of its called (ternary)
let food1 = money > 100 ? 'bryani' : 'cha biscuit';
console.log(food1)

let drink = (money > 100 && myVr > 100) ? 'coke' : 'filter water';
console.log(drink);

//convert number to string
const num1 = 52;
console.log(num1)
const numString = num1 + '';
console.log(numString)

//convert string to number
const input = '560';
const inputnum = +input;

//
let isActive = true;
const showUser = () => console.log('display user')
const hideUser = () => console.log('hide user')
// isActive ? showUser() : hideUser();

//use && if the left side is true then right side will be executed
isActive && showUser();

//use || if the left side is false then right side will be executed
isActive || hideUser();

//toggle boolean
isActive = !isActive;