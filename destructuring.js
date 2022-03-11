// 1.array destructuring 
const numbers = [42, 65];
// const x = numbers[0];
// const y = numbers[1];

// const [x, y] = [42, 65]

const [x, y] = numbers;

function getvalues(n1, n2) {
    const nums = [n1, n2]
    return nums;
}

const student = {
    name: 'hero alam',
    age: 38,
    song: ['kaca badam', 'taitanic']
}
const [firstSong, secondeSong] = ['kaca badam', 'taitanic']
const [song1, song2] = student.song;

// object destructuring 
const { name, age } = { name: 'alu', age: 14 };
const { names, ages } = { id: 12, name: 'alu', age: 14 };

const employee = {
    id: 'vs code',
    designation: 'developer',
    machine: 'mac',
    languages: ['html', 'css', 'js'],
    specification: {
        height: 66,
        weight: 67,
        address: 'kumarkhali',
        drink: 'water',
        watch: {
            color: 'black',
            price: 500,
            brand: 'garmin'
        }
    }

}

const { machine, id } = employee;
const { weight, address } = employee.specification;
const [html, css] = employee.languages
const { brand } = employee?.specification?.watch;