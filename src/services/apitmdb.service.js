// eslint-disable-next-line no-unused-vars
import axios from 'axios';

export const getMoviePopularList = (callback) => {
  axios
    .get(
      'https://api.themoviedb.org/3/movie/popular?limit=5&page=1&api_key=f4ef51a0f580fce09bdcb3d88393bc2a'
    )
    .then((res) => {
      callback(res.data.results);
    })
    .catch((err) => {
      console.log(err);
    });
};

// eslint-disable-next-line no-unused-vars
export const getDiscover = (callback) => {
  axios
    .get(
      'https://api.themoviedb.org/3/discover/movie?api_key=f4ef51a0f580fce09bdcb3d88393bc2a'
    )
    .then((res) => {
      callback(res.data.results);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getNowPlayingList = (callback) => {
  axios
    .get(
      'https://api.themoviedb.org/3/movie/now_playing?api_key=f4ef51a0f580fce09bdcb3d88393bc2a'
    )
    .then((res) => {
      callback(res.data.results);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getTopRatedList = (callback) => {
  axios
    .get(
      'https://api.themoviedb.org/3/movie/top_rated?api_key=f4ef51a0f580fce09bdcb3d88393bc2a'
    )
    .then((res) => {
      callback(res.data.results);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getUpcomingList = (callback) => {
  axios
    .get(
      'https://api.themoviedb.org/3/movie/upcoming?api_key=f4ef51a0f580fce09bdcb3d88393bc2a'
    )
    .then((res) => {
      callback(res.data.results);
    })
    .catch((err) => {
      console.log(err);
    });
};
