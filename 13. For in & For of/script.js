// for .. of
const mhs = ["Panji", "Dimas", "Asep"];

for (const m of mhs) {
  console.log(m);
}

// Looping String
console.log("\n=> Looping String");
const nama = "Panji";
for (const n of nama) {
  console.log(n);
}

// looping array & index
console.log("\n=> looping array & index");
const mhs1 = ["Reka", "Mega", "Putri"];
for (const [i, m] of mhs1.entries()) {
  console.log(`${m} adalah mahasiswa ke-${i + 1}`);
}

// Nodelist
console.log("\n=> Looping NodeList");
const liNama = document.querySelectorAll(".nama");

for (n of liNama) {
  console.log(n.innerHTML);
}

// Arguments / parameter
console.log("\n=> Arguments / Parameter");

function jumlahkanAngka() {
  let jumlah = 0;
  for (a of arguments) {
    jumlah += a;
  }
  return jumlah;
}
console.log(jumlahkanAngka(1, 2, 3, 4, 5));

// For in (Untuk melooping object)
console.log("\n=> For in (Untuk melooping object)");

const mahasiswa = {
  namaMhs: "Panji Pratama",
  umur: 33,
  email: "panji@gmail.com",
};

for (m in mahasiswa) {
  console.log(m, mahasiswa[m]);
}
