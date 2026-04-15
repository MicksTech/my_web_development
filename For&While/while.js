let i = 0;

while (i < 6) {
    console.log(`The value of i: ${i}`);
    i++;
}

let x = 0;

while (x < 6) {
    console.log(`The value of x: ${x}`);
    return;
}

let flips = 0;
let isHeads = false;

while (!isHeads) {
  flips++;
  isHeads = Math.random() < 0.5;
}

console.log(`It took ${flips} flips to land on heads.`);