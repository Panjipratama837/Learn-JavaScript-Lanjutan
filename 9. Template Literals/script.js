const loop = document.querySelector(".looping");
const cond = document.querySelector(".conditional");
const nested = document.querySelector(".nested");

// Looping
const mhs = [
  {
    nama: "Panji Pratama",
    email: "panji@gmail.com",
  },

  {
    nama: "Dimas Arya",
    email: "dimas@gmail.com",
  },

  {
    nama: "Asep Kusnawan",
    email: "asep@gmail.com",
  },
];

const el = `
<h3>Studi kasus looping</h3>
<div class="mhs">
    ${mhs
      .map(
        (m) => `<ul>
    <li>${m.nama}</li>
    <li>${m.email}</li>
</ul>`
      )
      .join("")}
</div>
`;

loop.innerHTML = el;

// Conditionals
// Ternary
const lagu = [
  {
    judul: "Kau Adalah",
    penyanyi: "Isyana Sarasvati",
    feat: "Rayi Putra",
  },

  {
    judul: "Animals",
    penyanyi: "Maroon 5",
  },
];

const el2 = `
<h3>Studi kasus conditional</h3>
<div class="lagu">
    ${lagu
      .map(
        (song) => `<ul>
        <li>${song.penyanyi} </li>
        <li>${song.judul} ${song.feat ? `(feat. ${song.feat})` : ""} </li>
</ul>`
      )
      .join("")}
</div>
`;

cond.innerHTML = el2;

// Nested
// HTML Fragments bersarang

const mahasiswa = {
  nama: "Panji Pratama",
  semester: 5,
  mataKuliah: [
    "Analisa Numerik",
    "Machine Learning",
    "Pemograman Mobile",
    "Pemograman Berbasis Web",
  ],
};

function cetakMataKuliah(mataKuliah) {
  return `
    <ol>
        ${mataKuliah.map((mk) => `<li>${mk}</li>`).join("")}
    </ol>
    `;
}

const el3 = `
<div class="mahasiswa">
<h3>Studi Kasus Nested</h3>
<h3>${mahasiswa.nama}</h3>
<span class="semester">Semester : ${mahasiswa.semester}</span>
<h3>Mata Kuliah</h3>
${cetakMataKuliah(mahasiswa.mataKuliah)}
</div>
`;

nested.innerHTML = el3;
