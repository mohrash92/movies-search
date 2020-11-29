export const getSearchData = (event, searchTerm) => {
  event.preventDefault();
  fetch(`${process.env.MOVIE_DB_ENDPOINT}/search/movie?api_key=${process.env.API_KEY}&query=${searchTerm}`)
    .then(res => res.json())
    .then(json => console.log(json));
};
