// Destructuring Assignment

// Destructuring Array
console.log("=> Destructuring Array");
const perkenalan = ["Halo", "nama", "saya", "Panji Pratama"];

const [salam, satu, dua, nama] = perkenalan;
console.log(dua);

// skipping items
console.log("\n=> Skipping Items");
const [greeting, , , name] = perkenalan;
console.log(name);
// Swap items
console.log("\n=> Swap Items");
let a = 1;
let b = 2;
console.log(a);
console.log(b);
[a, b] = [b, a];
console.log(a);
console.log(b);

// Return value pada function
console.log("\n=> Return Value Pada Function");
function coba() {
  return [1, 2];
}

const [one, two] = coba();
console.log(two);

// Rest Parameter
console.log("\n=> Rest Parameter");
const [x, ...values] = [1, 2, 3, 4, 5];
console.log(x);
console.log(values);

// Destructuring Object
console.log("\n=> Destructuring Object");
const mhs = {
  namaMhs: "Panji Pratama",
  umurMhs: 22,
};

const { namaMhs, umurMhs } = mhs;

// Assign ke variabel baru
// const { namaMhs: n, umurMhs: u } = mhs;

console.log(namaMhs);

// Assigment tanpa deklarasi object
console.log("\n=> Assigment tanpa deklarasi object");
({ nama1, umur1 } = { nama1: "Panji Pratama", umur1: 22 });
console.log(`${umur1} years old`);

// Memberikan Default Value
console.log("\n=> Memberikan Default Value");
const mhs1 = {
  nama2: "Panji Pratama",
  umur2: 22,
  email: "panji@gmail.com",
};

const { nama2, umur2, email = "email@default.com" } = mhs1;
console.log(email);

// Mengambil field pada object, setelah dikirim sebagai parameter untuk function
console.log("\n=> Mengambil field pada object");

const mhs2 = {
  id: "20190040052",
  nama3: "Panji Pratama",
  umur3: 22,
  email3: "panji@gmail.com",
};

function getIdMhs({ id }) {
  return id;
}
console.log(getIdMhs(mhs2));
