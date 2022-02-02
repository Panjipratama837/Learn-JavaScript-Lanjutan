const btn = document.querySelector(".button");
btn.addEventListener("click", () => {
  setTimeout(function timer() {
    console.log("You clicked the button!");
  }, 2000);
});

console.log("Hi!");

// setTimeout(function timeout() {
//   console.log("Click the button!");
// }, 0);

console.log("Welcome to loupe.");

console.log("\n=> Challange Asynchronous");
console.log("\n=> Nicee dieksekusi terlebih dahulu, walaupun urutannya ke-3");
manusia = () => {
  setTimeout(() => {
    const nama = "Panji Pratama";
    console.log(nama);
  }, 0);
};
binatang = () => {
  setTimeout(() => {
    const hewan = "Macan";
    console.log(hewan);
  }, 0);
};
tumbuhan = () => {
  setTimeout(() => {
    const plant = "Bawang";
    console.log(plant);
  }, 0);
};

manusia();
binatang();
console.log("Nice");
tumbuhan();
