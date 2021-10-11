const API_KEY = process.env.REACT_APP_API_KEY;

let id;

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  fetchTheater: {
    title: "Theater",
    url: `/discover/movie?primary_release_date.gte=2021-06-15&primary_release_date.lte=2021-10-22&api_key=${API_KEY}`,
  },
  fetchPopularity: {
    title: "Popular",
    url: `/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}`,
  },
  fetchTopRated: {
    title: "Top Rated",
    url: `/discover/movie/?certification_country=US&certification=R&sort_by=vote_average.desc&api_key=${API_KEY}`,
  },
  fetchKids: {
    title: "Kids",
    url: `/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&api_key=${API_KEY}`,
  },
  fetchBestYear: {
    title: "best",
    url: `/discover/movie?primary_release_year=2021&sort_by=vote_average.desc&api_key=${API_KEY}`,
  },
  fetchById: {
    url: `/movie/${id}?&api_key=${API_KEY}`,
  },
  fetchFeatured: `/trending/all/day?api_key=${API_KEY}`,

  fetchActionAdventure: `/discover/movie?with_genres=28&with_genres=12&api_key=${API_KEY}`,

  fetchComedy: `/discover/movie?with_genres=35&api_key=${API_KEY}`,

  fetchCrimeMestery: `/discover/movie?with_genres=80&with_genres=9648&api_key=${API_KEY}`,
  fetchDrama: `/discover/movie?with_genres=18&api_key=${API_KEY}`,

  fetchHoror: `/discover/movie?with_genres=27&api_key=${API_KEY}`,
  fetchRomance: `/discover/movie?with_genres=10749&api_key=${API_KEY}`,

  fetchScienceFic: `/discover/movie?with_genres=878&api_key=${API_KEY}`,

  fetchSuspenceThriller: `/discover/movie?with_genres=53&with_genres=14&api_key=${API_KEY}`,
};
