// ajax

// $(".search-button").on("click", function () {
//   $.ajax({
//     url:
//       "http://www.omdbapi.com/?apikey=1e12e633&s=" + $(".input-keyword").val(),
//     success: (results) => {
//       const movies = results.Search;
//       let cards = "";
//       movies.forEach((e) => {
//         cards += showCards(e);
//       });
//       $(".movie-container").html(cards);

//       // Ketika tombol detail di click
//       $(".modal-detail-button").on("click", function () {
//         $.ajax({
//           url:
//             "http://www.omdbapi.com/?apikey=1e12e633&i=" +
//             $(this).data("imdbid"),
//           success: (e) => {
//             const movieDetail = showMovieDetail(e);
//             $(".modal-body").html(movieDetail);
//           },
//           error: (e) => {
//             console.log(e.responseText);
//           },
//         });
//       });
//     },

//     error: (e) => {
//       console.log(e.responseText);
//     },
//   });
// });

// fetch
// const searchButton = document.querySelector(".search-button");
// searchButton.addEventListener("click", function () {
//   const inputKeyword = document.querySelector(".input-keyword");
//   fetch("http://www.omdbapi.com/?apikey=1e12e633&s=" + inputKeyword.value)
//     .then((response) => response.json())
//     .then((response) => {
//       const movies = response.Search;
//       let cards = "";
//       movies.forEach((e) => (cards += showCards(e)));
//       const movieContainer = document.querySelector(".movie-container");
//       movieContainer.innerHTML = cards;

//       // Ketika tombol detail di-klik
//       const modalDetailButton = document.querySelectorAll(
//         ".modal-detail-button"
//       );
//       modalDetailButton.forEach((btn) => {
//         btn.addEventListener("click", function () {
//           const imdbid = this.dataset.imdbid;
//           fetch("http://www.omdbapi.com/?apikey=1e12e633&i=" + imdbid)
//             .then((response) => response.json())
//             .then((e) => {
//               const movieDetail = showMovieDetail(e);
//               const modalBody = document.querySelector(".modal-body");
//               modalBody.innerHTML = movieDetail;
//             });
//         });
//       });
//     });
// });

// Fetch Refactor (dengan async/await)
const searchButton = document.querySelector(".search-button");
searchButton.addEventListener("click", async function () {
  try {
    const inputKeyword = document.querySelector(".input-keyword");
    const movies = await getMovies(inputKeyword.value);
    updateUI(movies);
  } catch (err) {
    alert(err);
  }
});

function getMovies(keyword) {
  return fetch("http://www.omdbapi.com/?apikey=1e12e633&s=" + keyword)
    .then((response) => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json();
    })
    .then((response) => {
      if (response.Response === "False") {
        throw new Error(response.Error);
      }
      return response.Search;
    }); // return a promise
}

function updateUI(movies) {
  let cards = "";
  movies.forEach((e) => (cards += showCards(e)));
  const movieContainer = document.querySelector(".movie-container");
  movieContainer.innerHTML = cards;
}

// event binding (dengan async/await)
document.addEventListener("click", async function (e) {
  if (e.target.classList.contains("modal-detail-button")) {
    const imdbid = e.target.dataset.imdbid;
    const movieDetail = await getMovieDetail(imdbid);
    updateUIDetail(movieDetail);
  }
});

function getMovieDetail(imdbid) {
  return fetch("http://www.omdbapi.com/?apikey=1e12e633&i=" + imdbid)
    .then((response) => response.json())
    .then((e) => e);
}

function updateUIDetail(e) {
  const movieDetail = showMovieDetail(e);
  const modalBody = document.querySelector(".modal-body");
  modalBody.innerHTML = movieDetail;
}

function showCards(e) {
  return `<div class="col-md-3 my-3">
    <div class="card">
      <img src="${e.Poster}" class="card-img-top" />
      <div class="card-body">
        <h5 class="card-title">${e.Title}</h5>
        <h6 class="card-subtitle mb-2 text-muted">${e.Year}</h6>
        <a href="#" class="btn btn-primary modal-detail-button" data-bs-toggle="modal"
        data-bs-target="#movieDetailModal" data-imdbid="${e.imdbID}">Show Details</a>
      </div>
    </div>
  </div>`;
}

function showMovieDetail(e) {
  return `<div class="container-fluid">
    <div class="row">
      <div class="col-md-3">
        <img src="${e.Poster}" class="img-fluid" />
      </div>
      <div class="col-md">
        <ul class="list-group">
          <li class="list-group-item"><h4>${e.Title} (${e.Year})</h4></li>
          <li class="list-group-item">
            <strong>Director : </strong> ${e.Director}
          </li>
          <li class="list-group-item">
            <strong>Actors : </strong> ${e.Actors}
          </li>
          <li class="list-group-item">
            <strong>Writer : </strong> ${e.Writer}
          </li>
          <li class="list-group-item">
            <strong>Plot : </strong> ${e.Plot}
          </li>
          <li class="list-group-item">
            <strong>Rating : </strong> ${e.imdbRating}
          </li>
        </ul>
      </div>
    </div>
  </div>`;
}
