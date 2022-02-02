function satu() {
  var nama = "Panji";
  console.log(nama);
}

function dua() {
  console.log(nama);
}

console.log(nama);
var nama = "Dimas";

satu();
dua("Asep");

console.log(nama);

// Explanation
/*
Hasil output :
Panji
Dimas
Dimas

Kenapa hasil outputnya seperti ini, bukan :
Panji
Asep
Dimas

Karena, dua("Asep");
Parameter "Asep" tidak ditangkap oleh function dua(), (Function dua tidak mempunyai parameter)

Ilustrasi Function dua()
console.log(nama), nama akan mencari diparameter, karena parameter tidak ada, lanjut mencari ke global variabel, yg dimana global variabel terdapat (var = "Dimas"), maka yang dicetak "Dimas" bukan "Asep"

*/
