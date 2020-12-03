export const addCombinedToURLIfPerson = (mediaType) => {
  if (mediaType ==='person'){
    return 'combined_'
  }
  return ''
};

export const setCorrectTitle = (mediaType, json) => {
  if (mediaType === 'tv' || mediaType === 'person') {
    return json.name
  } else if (mediaType === 'movie'){
    return json.title
  }
  return {};
};

export const filterMediaTypes = (json, checkedBox) => {
  const { movie, person, tv } = checkedBox;
  let results = [];

  if(movie || person || tv) {
    for (const [key, value] of Object.entries(checkedBox)) {
      if (value) {
        const movieResults = json.results.filter(result => result.media_type === key);
        results.push(...movieResults)
      }
    }

    return results;
  }
  return json.results;
};

const getSearchData = (event, searchTerm, setResults, history, checkedBox) => {
  event.preventDefault();
  history.push('/search')
  fetch(`${process.env.MOVIE_DB_ENDPOINT}/search/multi?api_key=${process.env.API_KEY}&query=${searchTerm}`)
    .then(res => res.json())
    .then(json => {
      setResults(filterMediaTypes(json, checkedBox));
    }
    );
};

const getDetails = (id, setDetails, mediaType) => {
  fetch(`https://api.themoviedb.org/3/${mediaType}/${id}/${addCombinedToURLIfPerson(mediaType)}credits?api_key=${process.env.API_KEY}`)
    .then(res => res.json())
    .then(json => setDetails(json.cast));
};

const getTitle = (id, setMovieTitle, mediaType) => {
  fetch(`http://api.themoviedb.org/3/${mediaType}/${id}?api_key=${process.env.API_KEY}`)
    .then(res => res.json())
    .then(json => setMovieTitle(setCorrectTitle(mediaType, json)));
};

export { getSearchData, getTitle, getDetails};
