// Tagged Templates
// const nama = "Panji Pratama";
// const umur = 22;

// function coba(strings, ...values) {
//   return strings.reduce(
//     (result, str, i) => `${result}${str}${values[i] || ""}`,
//     ""
//   );
// }

// const str = coba`Halo, nama saya ${nama}, saya ${umur} tahun.`;

// Highlight
const nama = "Panji Pratama";
const umur = 22;
const email = "panji@gmail.com";

function highlight(strings, ...values) {
  return strings.reduce(
    (result, str, i) =>
      `${result}${str}<span class="hl">${values[i] || ""}</span>`,
    ""
  );
}

const str = highlight`Halo, nama saya ${nama}, saya ${umur} tahun. Dengan email ${email}`;

document.body.innerHTML = str;
