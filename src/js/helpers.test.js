import {
  addCombinedToURLIfPerson,
  setCorrectTitle,
  filterMediaTypes
} from './helpers';

describe('addCombinedToURLIfPerson', () => {
  test('returns an empty string by default', () => {
    expect(addCombinedToURLIfPerson()).toBe('');
  });

  test('returns "combined_" if person is passed as mediaType', () => {
    expect(addCombinedToURLIfPerson('person')).toBe('combined_');
  })
});

describe('setCorrectTitle', () => {
  test('returns an empty string by default', () => {
    expect(setCorrectTitle()).toEqual('');
  });

  test('returns the name when the mediaType is tv', () => {
    expect(setCorrectTitle('tv', { name: 'lala land'})).toBe('lala land');
  });

  test('returns the name when the mediaType is person', () => {
    expect(setCorrectTitle('person', { name: 'lala land'})).toBe('lala land');
  });

  test('returns the title when the mediaType is movie', () => {
    expect(setCorrectTitle('movie', { title: 'lala land'})).toBe('lala land');
  });
});

describe('filterMediaTypes', () => {
  const json = {
    results: [{
      adult: false,
      backdrop_path: "/xySCWwZVuU03xOsJfs1Qk8yG2DF.jpg",
      id: 226979,
      media_type: "movie",
      total_pages: 61,
      total_results: 1201
    },
    {
      adult: false,
      backdrop_path: "/xySCWwZVuUfsdfsdfsdfsdffasdfs.jpg",
      id: 226979,
      media_type: "tv",
      total_pages: 61,
      total_results: 5342
    },
    {
      adult: false,
      backdrop_path: "/xySCWwZdfgdfgdsfgsdfgdfgdfgdfg.jpg",
      id: 226979,
      media_type: "person",
      total_pages: 79,
      total_results: 124
    }]
  }
  test('returns results when non of the checkedBox data is set', () => {
    expect(filterMediaTypes(json, {})).toEqual(json.results);
  });

  test('returns results for movies when it is defined in checkedBox', () => {
    const expectedResults = [{
      adult: false,
      backdrop_path: "/xySCWwZVuU03xOsJfs1Qk8yG2DF.jpg",
      id: 226979,
      media_type: "movie",
      total_pages: 61,
      total_results: 1201
    }]
    expect(filterMediaTypes(json, { movie: true })).toEqual(expectedResults);
  });

  test('returns results for tv when it is defined in checkedBox', () => {
    const expectedResults = [{
      adult: false,
      backdrop_path: "/xySCWwZVuUfsdfsdfsdfsdffasdfs.jpg",
      id: 226979,
      media_type: "tv",
      total_pages: 61,
      total_results: 5342
    }]
    expect(filterMediaTypes(json, { tv: true })).toEqual(expectedResults);
  });

  test('returns results for person when it is defined in checkedBox', () => {
    const expectedResults = [  {
      adult: false,
      backdrop_path: "/xySCWwZdfgdfgdsfgsdfgdfgdfgdfg.jpg",
      id: 226979,
      media_type: "person",
      total_pages: 79,
      total_results: 124
    }]
    expect(filterMediaTypes(json, { person: true })).toEqual(expectedResults);
  });
});

