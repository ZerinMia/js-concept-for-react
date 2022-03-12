const addToLocalStorage = () => {
    const idInput = document.getElementById('storage-id')
    const id = idInput.value;
    const valueInput = document.getElementById('storage-value');
    const value = valueInput.value;

    //
    localStorage.setItem(id, value);
    idInput.value = '';
    valueInput.value = '';

}
localStorage.setItem('friends', JSON.stringify([54, 97, 84]))
const pen = {
    price: 10,
    color: 'black'
};
//when you set a object property in local storage
localStorage.setItem('pen', JSON.stringify(pen))

//convert reeturn to the stringfied local storage to the object
const storePen = localStorage.getItem('pen')
const penObj = JSON.parse(storePen);


//update price and  kono property er value change kore jodi local storage e rakte cai tokon
pen.price = 50;
localStorage.setItem('pen', JSON.stringify(pen))

const x = 50;
const y = 100;
const obj = {
    x: x,
    y: y
}
//shortcut 
const obj1 = { x, y }

const name = 'solimullah';
const area = 'Dhaka';
const nobab = {
    name: name,
    area: area
}
// shortcut
const nobab2 = { name, area };