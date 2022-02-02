// Destructuring function arguments
console.log("=> Destructuring function arguments");
const mhs1 = {
  nama: "Panji Pratama",
  umur: 22,
  email: "panji@gmail.com",
  nilai: {
    tugas: 90,
    uts: 85,
    uas: 80,
  },
};

function cetakMhs({ nama, umur, nilai: { tugas, uts, uas } }) {
  return `Halo, nama saya ${nama}, saya berumur ${umur} tahun. Nilai uas saya adalah ${uas}`;
}
console.log(cetakMhs(mhs1));

// Destructuring return
console.log("\n=> Destructuring return");
function kalkulasi(a, b) {
  return {
    tambah: a + b,
    kurang: a - b,
    kali: a * b,
    bagi: a / b,
  };
}

const { bagi, tambah, kali, kurang } = kalkulasi(2, 3);
console.log(kali);
