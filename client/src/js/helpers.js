const getSearchData = (event, searchTerm, setResults, history) => {
  event.preventDefault();
  history.push('/search')
  fetch(`${process.env.MOVIE_DB_ENDPOINT}/search/movie?api_key=${process.env.API_KEY}&query=${searchTerm}`)
    .then(res => res.json())
    .then(json => setResults(json.results));
};

const getShowDetails = (id, setShowDetails) => {
  fetch(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${process.env.API_KEY}`)
    .then(res => res.json())
    .then(json => setShowDetails(json.cast));
};

const getMovieTitle = (id, setMovieTitle) => {
  fetch(`http://api.themoviedb.org/3/movie/${id}?api_key=${process.env.API_KEY}`)
    .then(res => res.json())
    .then(json => setMovieTitle(json.title));
};

const getPersonDetails = (id, setPersonDetails) => {
  fetch(`https://api.themoviedb.org/3/person/${id}/combined_credits?api_key=${process.env.API_KEY}`)
    .then(res => res.json())
    .then(json => setPersonDetails(json.cast));
};

const getPersonName = (id, setPersonName) => {
  fetch(`https://api.themoviedb.org/3/person/${id}?api_key=${process.env.API_KEY}`)
    .then(res => res.json())
    .then(json => setPersonName(json.name));
};

export { getSearchData, getShowDetails, getMovieTitle, getPersonDetails, getPersonName};
