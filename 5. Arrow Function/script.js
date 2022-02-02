// Example 1
// Jika hanya mereturn satu baris, (return, dan {}) tidak perlu ditulis
console.log("Example 1");

const tampilNama = (nama, waktu) => `Selamat ${waktu}, ${nama}`;

console.log(tampilNama("Panji", "Pagi"));

// Example 2
// Menampilkan isi dengan object
console.log("Example 2");

const nama = ["Panji Pratama", "Dimas Arya", "Asep Kusnawan"];

let tampilJmlhHuruf = nama.map((nama) => ({
  nama: nama,
  jumlahHuruf: nama.length,
}));

console.table(tampilJmlhHuruf);

// Example 3
// W3schools
// Before Arrow Function
hello = function () {
  return "Hello World!";
};

// After Arrow Function
helloArrow = () => {
  return "Hello World!";
};

console.log(hello());
console.log(helloArrow());
