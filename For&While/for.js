for (let i = 0; i <= 2; i++) {
    console.log(i);
}

for (let i = 1; i <= 10; i++) {
    console.log(i);
}

for (let i = 1; i <= 10; i+=2) {
    console.log(i);
}

for (let i = 2; i <= 10; i+=2) {
    console.log(i);
}

for (let i = 10; i > 0; i--) {
    console.log(i);
}

console.log("Happy New Year!");

for (let i = 10; i >= 1; i--) {
    console.log(i);
}// reverse code number 10 to 1

for (let x = 1; x < 20; x += 3) {
    console.log(x);
} // code number 1 to 19 with increment of 3

let heads = 0;
let tails = 0;
for (x = 1; x <= 10; x++) {
    if (Math.random() < 0.5) {
        tails++;
    } else {
        heads++;
    }
}

console.log("Tossed the coin ten times");
console.log(`Number of heads: ${heads}`);
console.log(`Number of tails: ${tails}`);


let pyramid = 5;
for (let i = 1; i <= pyramid; i++) {
    let row = '';
    for (let j = 1; j <= i; j++) {
        row += '*';
    }
    console.log(row);
}

let pyramidr = 5;

for (let i = 5; i >= 1; i--) {
    let pyramidr = '';
    for (let j = 1; j <= i; j++) {
        pyramidr += '*';
    }
    console.log(pyramidr);
}