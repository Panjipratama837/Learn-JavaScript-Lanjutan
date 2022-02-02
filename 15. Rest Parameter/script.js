// Rest Parameter
console.log("Rest Parameter");
function myFunc(...myArgs) {
  return myArgs;
}
console.log(myFunc(1, 2, 3, 4, 5));

// Menjumlahkan isi array
console.log("\n=> Menjumlahkan isi array");

function sum(...angka) {
  return angka.reduce((acc, curr) => acc + curr);
}
console.log(sum(1, 2, 3, 4, 5));

// Array Destructuring
console.log("\n=> Array Destructuring");
const kelompok1 = ["Panji", "Asep", "Reka", "Irpan", "Rizal"];
const team = ([ketua, wakil, ...anggota] = kelompok1);
console.log(wakil);

// Object Destructuring
console.log("\n=> Object Destructuring");
const ourTeam = {
  pm: "Panji Pratama",
  frontEnd: "Aden Rahmat",
  backEnd: "Dimas Arya",
  webDesign: "Asep Kusnawan",
  devOps: "Reka",
};

const { pm, ...myTeam } = ourTeam;
console.log(myTeam);

// Filtering
console.log("\n=> Filtering");
function filterBy(type, ...values) {
  return values.filter((v) => typeof v === type);
}

console.log(filterBy("number", 1, 2, "Panji", false, 10, true, "Dimas"));
