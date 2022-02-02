console.log("Mulai");
$.ajax({
  url: "json/data.json",
  success: (mhs) => {
    mhs.forEach((m) => {
      console.log(m.nama);
    });
  },
  error: (e) => {
    console.log(e.responseText);
  },
});
console.log("Selesai");
