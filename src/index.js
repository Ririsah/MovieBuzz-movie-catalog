const recommended = [
    { title: "Echoes of Tomorrow", year: "2019", genre: "Drama", image: "movie_1" },
    { title: "Neon Rain", year: "1998", genre: "Sci-Fi", image: "movie_2" },
    { title: "The Glass Shore", year: "2007", genre: "Mystery", image: "movie_3" },
    { title: "Crimson Pulse", year: "2024", genre: "Thriller", image: "movie_4" },
    { title: "Parallel Tides", year: "1985", genre: "Sci-Fi", image: "movie_5" },
    { title: "Lunar Veil", year: "2011", genre: "Horror", image: "movie_6" },
    { title: "Ashes and Code", year: "2025", genre: "Adventure", image: "movie_7" }
];

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
    { title: "The Last Broadcast", year: "2018", duration: "2 Hr 0 Mns", raiting: "raiting_2", poster: "movie_12", genre: "Mystery" },
    { title: "Crimson Skies", year: "2021", duration: "1 Hr 58 Mns", raiting: "raiting_4", poster: "movie_8", genre: "Drama" },
    { title: "Midnight Circuit", year: "2023", duration: "2 Hr 1 Mns", raiting: "raiting_3", poster: "movie_9", genre: "Sci-Fi" },
    { title: "The Hollow Net", year: "2022", duration: "2 Hr 4 Mns", raiting: "raiting_2", poster: "movie_10", genre: "Thriller" },
    { title: "Echoes of Steel", year: "2019", duration: "1 Hr 55 Mns", raiting: "raiting_5", poster: "movie_9", genre: "Action" },
    { title: "Silent Protocol", year: "2020", duration: "2 Hr 9 Mns", raiting: "raiting_1", poster: "movie_11", genre: "Mystery" },
    { title: "Gravity's Edge", year: "2021", duration: "2 Hr 2 Mns", raiting: "raiting_2", poster: "movie_12", genre: "Sci-Fi" },
    { title: "Afterlight", year: "2017", duration: "1 Hr 50 Mns", raiting: "raiting_3", poster: "movie_13", genre: "Drama" },
    { title: "Signal Void", year: "2022", duration: "1 Hr 56 Mns", raiting: "raiting_4", poster: "movie_12", genre: "Thriller" },
    { title: "Beyond Mercury", year: "2018", duration: "2 Hr 13 Mns", raiting: "raiting_2", poster: "movie_8", genre: "Sci-Fi" },
    { title: "Broken Spectrum", year: "2019", duration: "1 Hr 49 Mns", raiting: "raiting_1", poster: "movie_9", genre: "Mystery" },
    { title: "Digital Souls", year: "2023", duration: "2 Hr 6 Mns", raiting: "raiting_5", poster: "movie_10", genre: "Drama" },
    { title: "Noir Interface", year: "2020", duration: "2 Hr 7 Mns", raiting: "raiting_3", poster: "movie_9", genre: "Crime" },
    { title: "The Fifth Echo", year: "2021", duration: "2 Hr 0 Mns", raiting: "raiting_4", poster: "movie_11", genre: "Thriller" },
    { title: "Polaris Trap", year: "2018", duration: "1 Hr 45 Mns", raiting: "raiting_2", poster: "movie_12", genre: "Sci-Fi" },
    { title: "Dream Catch Code", year: "2017", duration: "2 Hr 3 Mns", raiting: "raiting_3", poster: "movie_13", genre: "Fantasy" },
    { title: "Urban Nexus", year: "2023", duration: "1 Hr 59 Mns", raiting: "raiting_4", poster: "movie_12", genre: "Action" },
    { title: "The Static War", year: "2019", duration: "2 Hr 12 Mns", raiting: "raiting_1", poster: "movie_8", genre: "Drama" },
    { title: "Crystal Anomaly", year: "2022", duration: "2 Hr 1 Mns", raiting: "raiting_3", poster: "movie_9", genre: "Mystery" },
    { title: "Firewall Dreams", year: "2020", duration: "1 Hr 48 Mns", raiting: "raiting_2", poster: "movie_10", genre: "Sci-Fi" },
    { title: "Shadow Circuit", year: "2024", duration: "2 Hr 3 Mns", raiting: "raiting_3", poster: "movie_9", genre: "Thriller" },
    { title: "Neural Storm", year: "2025", duration: "1 Hr 55 Mns", raiting: "raiting_4", poster: "movie_11", genre: "Action" },
    { title: "Quantum Rift", year: "2024", duration: "2 Hr 0 Mns", raiting: "raiting_5", poster: "movie_12", genre: "Sci-Fi" },
    { title: "Silent Echo", year: "2023", duration: "1 Hr 50 Mns", raiting: "raiting_1", poster: "movie_13", genre: "Mystery" },
    { title: "Digital Mirage", year: "2024", duration: "2 Hr 2 Mns", raiting: "raiting_2", poster: "movie_12", genre: "Drama" },
    { title: "Broken Code", year: "2023", duration: "1 Hr 47 Mns", raiting: "raiting_3", poster: "movie_8", genre: "Thriller" },
    { title: "Vortex Shift", year: "2025", duration: "2 Hr 10 Mns", raiting: "raiting_4", poster: "movie_9", genre: "Sci-Fi" },
    { title: "Echo Nexus", year: "2024", duration: "1 Hr 53 Mns", raiting: "raiting_5", poster: "movie_10", genre: "Action" },
    { title: "Static Pulse", year: "2023", duration: "2 Hr 1 Mns", raiting: "raiting_1", poster: "movie_9", genre: "Thriller" },
    { title: "Phantom Grid", year: "2024", duration: "1 Hr 54 Mns", raiting: "raiting_2", poster: "movie_11", genre: "Mystery" },
    { title: "Cyber Drift", year: "2025", duration: "2 Hr 5 Mns", raiting: "raiting_3", poster: "movie_12", genre: "Sci-Fi" },
    { title: "Silent Horizon", year: "2023", duration: "1 Hr 58 Mns", raiting: "raiting_4", poster: "movie_13", genre: "Drama" },
    { title: "Neon Flux", year: "2024", duration: "2 Hr 0 Mns", raiting: "raiting_5", poster: "movie_12", genre: "Action" },
];


const container_cover = document.querySelector('.cover-wrapper');
const navbar = document.querySelector('.header-wrapper');

const btn_menu_toggle = document.querySelector('.menu-toggle');
const nav_links = document.querySelector('.header-div-2');

const recommended_container = document.querySelector('.recommended-movies');

const movies_catalog = document.querySelector('.catalog-movies');
const div1 = document.querySelector('.div-1');
const div2 = document.querySelector('.div-2');
const div3 = document.querySelector('.div-3');

const btn1 = document.querySelector('.search-movies-1');
const btn2 = document.querySelector('.search-movies-2');
const btn3 = document.querySelector('.search-movies-3');

const btn_search = document.querySelector('.search-btn');


// Sticky navbar animation
const nav_height = navbar.getBoundingClientRect().height;

const stickyNav = function (entries) {
    const [entry] = entries;

    if (!entry.isIntersecting) {
        navbar.classList.add('sticky-nav');
        container_cover.style.paddingTop = `${nav_height}px`;
    } else {
        navbar.classList.remove('sticky-nav');
        container_cover.style.paddingTop = `0`;
    }
};

const coverObserver = new IntersectionObserver (stickyNav, {
    root: null,
    threshold: 0,
});

coverObserver.observe(container_cover);


// Menu toggle funtionality
btn_menu_toggle.addEventListener('click', function() {
    if (nav_links.classList.contains('nav-links-hidden')) {
        nav_links.classList.remove('nav-links-hidden');
    } else {
        nav_links.classList.add('nav-links-hidden');
    }
});

window.addEventListener('resize', () => {
    if (window.innerWidth > 1400) {
        nav_links.classList.remove('nav-links-hidden');
    }
});


// Recommended movies
recommended.forEach((film, i) => {
    const filmHTML = `
        <div class="recommended-movie-card recommended-${i}">
            <button class="recommended-movie-img" style="background: url('src/assets/images/${film.image}.jpg') center center / cover no-repeat;"></button>
            <h4>${film.title}</h4>
            <p>${film.year} • ${film.genre}</p>
        </div>
    `;
    recommended_container.innerHTML += filmHTML;
});


// Catalog movies
const filmsPerPage = 16;

function renderFilmsToDiv(filmsArray, containerDiv) {
    containerDiv.innerHTML = '';

    filmsArray.forEach(film => {
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
        containerDiv.innerHTML += filmHTML;
    });
}

const page1Films = films.slice(0, filmsPerPage);
const page2Films = films.slice(filmsPerPage, filmsPerPage * 2);
const page3Films = films.slice(filmsPerPage * 2, filmsPerPage * 3);

renderFilmsToDiv(page1Films, div1);
renderFilmsToDiv(page2Films, div2);
renderFilmsToDiv(page3Films, div3);

function showPage(pageNumber) {
    div1.classList.toggle('active-page', pageNumber === 1);
    div1.classList.toggle('hidden', pageNumber !== 1);

    div2.classList.toggle('active-page', pageNumber === 2);
    div2.classList.toggle('hidden', pageNumber !== 2);

    div3.classList.toggle('active-page', pageNumber === 3);
    div3.classList.toggle('hidden', pageNumber !== 3);
}

btn1.addEventListener('click', () => showPage(1));
btn2.addEventListener('click', () => showPage(2));
btn3.addEventListener('click', () => showPage(3));

showPage(1);


// Search bar functionality
btn_search.addEventListener('click', function () {
    const input_search = document.querySelector('.search-input').value.toLowerCase().trim();

    const filmsSearch = films.filter(film =>
        film.title.toLowerCase().includes(input_search)
    );

    movies_catalog.innerHTML = '';

    filmsSearch.forEach(film => {
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
});

const input_search = document.querySelector('.search-input');

input_search.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        btn_search.click();
    }
});



