// Closure adalah inner function yang membutuhkan data / variabel dari parentnya

// Example 1
function ucapkanSalam(waktu) {
  return function (nama) {
    console.log(`Halo ${nama}, Selamat ${waktu}, semoga harimu menyenagkan!`);
  };
}

let selamatPagi = ucapkanSalam("Pagi");
let selamatSiang = ucapkanSalam("Siang");
let selamatMalam = ucapkanSalam("Malam");

console.log("Exampe 1");
selamatPagi("Panji");
selamatMalam("Pratama");
console.log("");

// Example 2
console.log("Example 2");

let add = (function () {
  let counter = 0;
  return function () {
    return ++counter;
  };
})();

counter = 100; // Ini tidak akan mengganggu nilai awal

console.log(add());
console.log(add());
console.log(add());
console.log(add());
console.log(add());
