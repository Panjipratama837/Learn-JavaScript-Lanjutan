// My Array
console.log("My Array");
const angka = [-1, 8, 9, 1, 4, -5, -4, 3, 2, 9];
console.log(angka);

// Looking for numbers >= 3 with for
const newAngka = [];
console.log("Looking for numbers >= 3 with for");

for (let i = 0; i < angka.length; i++) {
  if (angka[i] >= 3) {
    newAngka.push(angka[i]);
  }
}
console.log(newAngka);

// With Filter
console.log("Looking for numbers >= 3 with filter");
const filterAngka = angka.filter((a) => a >= 3);
console.log(filterAngka);

// Map
// multiply all numbers by 2

console.log("Multiply all numbers by 2 with map");
const mapAngka = angka.map((a) => a * 2);
console.log(mapAngka);

// Reduce
// Sum all array elements
console.log("Sum all array elements with initial value 0");

const reduceAngka = angka.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0
);
console.log(reduceAngka);

// Method Chaining
// Find number > 5
// multiply 3 (*3)
// Sum

console.log("Method Chaining");

const result = angka
  .filter((a) => a > 5) // 8, 9, 9
  .map((a) => a * 3) // 24, 27, 27
  .reduce((acc, curr) => acc + curr); // 78
console.log(result);
