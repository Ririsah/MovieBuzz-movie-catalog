const recommended = [
    { title: "Echoes of Tomorrow", year: "2019", genre: "Drama", image: "movie_1" },
    { title: "Neon Rain", year: "1998", genre: "Sci-Fi", image: "movie_2" },
    { title: "The Glass Shore", year: "2007", genre: "Mystery", image: "movie_3" },
    { title: "Crimson Pulse", year: "2024", genre: "Thriller", image: "movie_4" },
    { title: "Parallel Tides", year: "1985", genre: "Sci-Fi", image: "movie_5" },
    { title: "Lunar Veil", year: "2011", genre: "Horror", image: "movie_6" },
    { title: "Ashes and Code", year: "2025", genre: "Adventure", image: "movie_7" }
];


const recommended_container = document.querySelector('.recommended-movies');

recommended.forEach(film => {
    const filmHTML = `
        <div class="recommended-movie-card">
            <button class="recommended-movie-img" style="background: url('src/assets/images/${film.image}.jpg') center center / cover no-repeat;"></button>
            <h4>${film.title}</h4>
            <p>${film.year} • ${film.genre}</p>
        </div>
    `;
    recommended_container.innerHTML += filmHTML;
});







const films = [
    { title: "The City", year: "2019", duration: "2 Hr 15 Mns", raiting: "raiting_1", poster: "movie_8", genre: "Drama" },
    { title: "Iron Vow", year: "2020", duration: "1 Hr 48 Mns", raiting: "raiting_2", poster: "movie_9", genre: "Action" },
    { title: "Shadows Within", year: "2021", duration: "2 Hr 5 Mns", raiting: "raiting_2", poster: "movie_10", genre: "Thriller" },
    { title: "Solar Drift", year: "2018", duration: "1 Hr 59 Mns", raiting: "raiting_1", poster: "movie_9", genre: "Sci-Fi" },
    { title: "Whispered Lies", year: "2022", duration: "2 Hr 12 Mns", raiting: "raiting_3", poster: "movie_11", genre: "Crime" },
    { title: "Arcadia's Fall", year: "2019", duration: "2 Hr 3 Mns", raiting: "raiting_3", poster: "movie_12", genre: "Fantasy" },
    { title: "Echo District", year: "2023", duration: "1 Hr 51 Mns", raiting: "raiting_2", poster: "movie_13", genre: "Drama" },
    { title: "Burning Code", year: "2020", duration: "2 Hr 10 Mns", raiting: "raiting_4", poster: "movie_12", genre: "Thriller" },
    { title: "Frozen Paths", year: "2017", duration: "1 Hr 46 Mns", raiting: "raiting_1", poster: "movie_8", genre: "Adventure" },
    { title: "Neon Reign", year: "2021", duration: "2 Hr 8 Mns", raiting: "raiting_5", poster: "movie_9", genre: "Action" },
    { title: "Phantom Skies", year: "2018", duration: "1 Hr 57 Mns", raiting: "raiting_2", poster: "movie_10", genre: "Mystery" },
    { title: "Tide of Ashes", year: "2023", duration: "2 Hr 11 Mns", raiting: "raiting_3", poster: "movie_9", genre: "Action" },
    { title: "Mirror Town", year: "2020", duration: "1 Hr 54 Mns", raiting: "raiting_4", poster: "movie_11", genre: "Action" },
    { title: "Wired Fate", year: "2019", duration: "2 Hr 6 Mns", raiting: "raiting_5", poster: "movie_12", genre: "Thriller" },
    { title: "Deep Signal", year: "2022", duration: "1 Hr 52 Mns", raiting: "raiting_1", poster: "movie_13", genre: "Horror" },
    { title: "The Last Broadcast", year: "2018", duration: "2 Hr 0 Mns", raiting: "raiting_2", poster: "movie_12", genre: "Mystery" }
];

const movies_catalog = document.querySelector('.movies-catalog-movies');

films.forEach(film => {
    const filmHTML = `
        <div class="movie-card">
            <button class="movie-card-img" style="background: url('src/assets/images/${film.poster}.jpg') center center / cover no-repeat;">
                <div class="overlay">watch now!</div>
            </button>
            <div class="movie-descriptions">
                <div class="movie-card-text">
                    <h4>${film.title}</h4>
                    <p>${film.year} • ${film.genre} • ${film.duration}</p>
                </div>
                <img class="raiting-img" src="src/assets/images/${film.raiting}.png" alt="">
            </div>
        </div>
    `;
    movies_catalog.innerHTML += filmHTML;
});
