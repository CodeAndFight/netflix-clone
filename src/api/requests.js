const API_KEY = "b1a9bc4109c933318a10cda77e68691a";

const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionsMovies: `/discover/all/week?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies: `/discover/all/week?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMovies: `/discover/all/week?api_key=${API_KEY}&with_genres=27`,
  fetchRomanceMovies: `/discover/all/week?api_key=${API_KEY}&with_genres=10749`,
  fetchDocumentaries: `/discover/all/week?api_key=${API_KEY}&with_genres=99`,
};

export default requests;
