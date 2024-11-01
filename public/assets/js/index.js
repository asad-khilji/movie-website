const API_KEY = '7d3d79b1'; // Replace with your OMDb API Key
const APILINK = `http://www.omdbapi.com/?s=popular&apikey=${API_KEY}`;
const SEARCHAPI = `http://www.omdbapi.com/?s=`;

const main = document.getElementById('section');
const form = document.getElementById('form');
const search = document.getElementById('query');

// Fetch popular movies (OMDb API doesn't have popularity like TMDB, so search for a common term)
returnMovies(APILINK);

function returnMovies(url) {
    fetch(url)
        .then(res => res.json())
        .then(function(data) {
            console.log(data.Search); // OMDb returns an array under 'Search'
            data.Search.forEach(element => {
                const div_card = document.createElement('div');
                div_card.setAttribute('class', 'card');

                const div_row = document.createElement('div');
                div_row.setAttribute('class', 'row');

                const div_column = document.createElement('div');
                div_column.setAttribute('class', 'column');

                const image = document.createElement('img');
                image.setAttribute('class', 'thumbnail');
                image.setAttribute('id', 'image');

                const title = document.createElement('h3');
                title.setAttribute('id', 'title');

                const center = document.createElement('center');

                title.innerHTML = `${element.Title}`;
                if (element.Poster !== "N/A") {
                    image.src = element.Poster;
                } else {
                    image.src = 'path/to/default-image.jpg'; // Set a default image if no poster is available
                }

                center.appendChild(image);
                div_card.appendChild(center);
                div_card.appendChild(title);
                div_column.appendChild(div_card);
                div_row.appendChild(div_column);

                main.appendChild(div_row);
            });
        });
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    main.innerHTML = ''; // Clear the previous results

    const searchItem = search.value;

    if (searchItem) {
        returnMovies(SEARCHAPI + searchItem + `&apikey=${API_KEY}`);
        search.value = ''; // Clear the search input
    }
});
