// Spread Operator
// Memecah iterables menjadi single element
console.log("Memecah iterables menjadi single element");
const mhs = ["Panji", "Dimas", "Asep"];
console.log(...mhs[0]);

// Menggabungkan 2 Array atau lebih
console.log("\n=> Menggabungkan 2 Array atau lebih");
const mahasiswa = ["Reka", "Rizal", "Mega"];
const dosen = ["Gina", "Ivana", "Somantri"];
const people = [...mahasiswa, "Panji", ...dosen];
console.log(people);

// Meng-copy array
console.log("\n=> Meng-copy array");
const friends = ["Sarah", "Sally", "Armel"];
const friends2 = [...friends];
friends2[0] = "Via";
console.log(friends);
console.log(friends2);

// Mengambil textContent HTML, dan dimasukan ke array
console.log("\n=> Mengambil textContent HTML, dan dimasukan ke array");
const liMhs = document.querySelectorAll("li");
const student = [...liMhs].map((m) => m.textContent);
console.log(student);

// Interaksi h1 Per Huruf
const nama = document.querySelector(".nama");
const huruf = [...nama.textContent].map((h) => `<span>${h}</span>`).join("");
console.log(huruf);
nama.innerHTML = huruf;
