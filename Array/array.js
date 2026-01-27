let nums = ["0", "1", "2", "3"];

console.log(nums[0]);
// ["0", "1", "2", "3"]

let birds = ["Sparrow", "Eagle", "Parrot", "Penguin"];
birds[2] = 'Canary';

console.log(birds[2]);
// ["Sparrow", "Eagle", "Canary", "Penguin"]

let fruits = ["Apple", "Banana", "Cherry", "Date"];

console.log(fruits[1]);
// ["Apple", "Banana", "Cherry", "Date"]

let cars = ["Toyota", "Honda", "BMW", "Audi"];

console.log(cars[2]);
// ["Toyota", "Honda", "BMW", "Audi"]
let phone = ["iPhone", "Samsung Galaxy", "Google Pixel", "Huawei"];

console.log(phone[3]);
// ["iPhone", "Samsung Galaxy", "Google Pixel", "Huawei"]

let colors = ['Red', 'Green'];

colors.push('Blue');

console.log(colors);
// ['Red', 'Green', 'Blue']

let color = ['Red', 'Green'];

color.pop();

console.log(color);
// ['Red', 'Green']

let animals = ['Dog', 'Cat', 'Elephant'];

animals.unshift('Bird');

console.log(animals);
// ['Bird', 'Dog', 'Cat', 'Elephant']

let animal = ['Dog', 'Cat', 'Elephant'];

animal.shift();

console.log(animal);
// ['Cat', 'Elephant']

let fishes = ['Salmon', 'Goldfish', 'Tuna'];

let pos = fishes.indexOf('Tuna');

console.log(pos); // 2
// ['Salmon', 'Goldfish', 'Tuna']

let fish = ['Salmon', 'Goldfish', 'Tuna'];

console.log(fish.length); // 3