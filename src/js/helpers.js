import config from '../config';
const { apiUrl } = config;
const { API_KEY } = process.env;

const addCombinedToURLIfPerson = (mediaType) => {
  if (mediaType ==='person'){
    return 'combined_'
  }
  return ''
};

const setCorrectTitle = (mediaType, json) => {
  if (mediaType === 'tv' || mediaType === 'person') {
    return json.name
  } else if (mediaType === 'movie'){
    return json.title
  }
  return '';
};

const filterMediaTypes = (json, checkedBox) => {
  const { movie, person, tv } = checkedBox;
  let results = [];

  if(movie || person || tv) {
    for (const [key, value] of Object.entries(checkedBox)) {
      if (value) {
        const mediaResults = json.results.filter(result => {
          return result.media_type === key
        });
        results.push(...mediaResults)
      }
    }

    return results;
  }
  return json.results;
};

const getSearchData = (event, searchTerm, setResults, history, checkedBox) => {
  event.preventDefault();
  history.push('/search')
  fetch(`${apiUrl}/search/multi?api_key=${API_KEY}&query=${searchTerm}`)
    .then(res => res.json())
    .then(json => {
      setResults(filterMediaTypes(json, checkedBox));
    }
    );
};

const getDetails = (id, setDetails, mediaType) => {
  const combined = addCombinedToURLIfPerson(mediaType);
  fetch(`${apiUrl}/${mediaType}/${id}/${combined}credits?api_key=${API_KEY}`)
    .then(res => res.json())
    .then(json => setDetails(json.cast));
};

const getTitle = (id, setTitle, mediaType) => {
  fetch(`${apiUrl}/${mediaType}/${id}?api_key=${API_KEY}`)
    .then(res => res.json())
    .then(json => setTitle(setCorrectTitle(mediaType, json)));
};

export {
  getSearchData,
  getTitle,
  getDetails,
  setCorrectTitle,
  filterMediaTypes,
  addCombinedToURLIfPerson
};
