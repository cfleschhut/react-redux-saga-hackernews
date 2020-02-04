const HN_BASE_URL = 'https://hn.algolia.com/api/v1/search';

const getHackerNewsUrl = (query, page) =>
  `${HN_BASE_URL}?query=${query}&page=${page}&hitsPerPage=3`;

const fetchStories = (query, page) =>
  fetch(getHackerNewsUrl(query, page)).then(response => response.json());

export { fetchStories };
