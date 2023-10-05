const apiKey = '2db7c03e';
const searchButton = document.getElementById('movieSearch');
const searchInput = document.getElementById('movieName');
const movieDetails = document.getElementById('movieDetails');

searchButton.addEventListener('click', async () => {
    const query = searchInput.value;
    const response = await fetch(`https://www.omdbapi.com/?apikey=${apiKey}&t=${query}`);
    const data = await response.json();

    if (data.Response === 'True') {
        movieDetails.innerHTML = `
            <h2>${data.Title}</h2>
            <img src="${data.Poster}" alt="${data.Title} Poster">
            <p>Year: ${data.Year}</p>
            <p>Genre: ${data.Genre}</p>
            <p>Director: ${data.Director}</p>
            <p>Plot: ${data.Plot}</p>
        `;
    } else {
        movieDetails.innerHTML = '<p>Movie not found or invalid input.</p>';
    }
});
