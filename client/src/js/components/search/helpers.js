const getSearchData = (event, searchTerm, setResults, history) => {
  event.preventDefault();
  history.push('/search')
  fetch(`${process.env.MOVIE_DB_ENDPOINT}/search/movie?api_key=${process.env.API_KEY}&query=${searchTerm}`)
    .then(res => res.json())
    .then(json => setResults(json.results));
};

export { getSearchData };
