/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';
import 'react-loading-skeleton/dist/skeleton.css';
import Skeleton from '@mui/material/Skeleton';
import RekomendationsList from '../components/RecomendationsList';
import SimilarList from '../components/SimilarList';
const movie = () => {
  const param = useParams();

  const [movie, setMovie] = useState([]);

  const [recommendations, setRecommendations] = useState([]);

  const [similar, setSimilar] = useState([]);

  const [isLoading, setIsLoading] = useState(false);

  const getMovie = () => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${param.id}?api_key=f4ef51a0f580fce09bdcb3d88393bc2a`
      )
      .then((res) => {
        setMovie(res.data);
        setIsLoading(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getRecommendation = () => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${param.id}/recommendations?language=en-US&page=1&api_key=f4ef51a0f580fce09bdcb3d88393bc2a`
      )
      .then((res) => {
        setRecommendations(res.data.results);
        setIsLoading(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getSimilar = () => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${param.id}/similar?language=en-US&page=1&api_key=f4ef51a0f580fce09bdcb3d88393bc2a`
      )
      .then((res) => {
        setSimilar(res.data.results);
        setIsLoading(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getMovie();
    getRecommendation();
    getSimilar();
  }, []);

  return (
    <>
      <div className="movie-details">
        <div className="movie-details-header">
          <div className="movie-details-header-between">
            <Link className="movie-details-back" to="/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
              </svg>
              Back
            </Link>
            <Link className="movie-details-gallery" to={`/gallery/${param.id}`}>
              Gallery
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
              </svg>
            </Link>
          </div>

          <img
            src={
              isLoading ? (
                `https://image.tmdb.org/t/p/original/${movie.backdrop_path}`
              ) : (
                <Skeleton
                  sx={{ bgcolor: 'grey.500' }}
                  variant="rectangular"
                  width="100%"
                  animation="wave"
                />
              )
            }
            alt="banner"
            className="movie-details-backdrop-image"
          />
          <img
            src={
              isLoading ? (
                `https://image.tmdb.org/t/p/original/${movie.poster_path}`
              ) : (
                <Skeleton
                  sx={{ bgcolor: 'grey.500' }}
                  variant="rectangular"
                  width={210}
                  height={118}
                  animation="wave"
                />
              )
            }
            alt="banner"
            className="movie-details-poster-image"
          />
        </div>
        <div className="movie-details-body">
          <h2 className="movie-details-title">
            {isLoading ? (
              movie.title
            ) : (
              <Skeleton
                sx={{ bgcolor: 'grey.900' }}
                animation="wave"
                height={50}
                width="100%"
              />
            )}
          </h2>
          <p className="movie-details-overview">
            {isLoading ? (
              movie.overview
            ) : (
              <Skeleton
                sx={{ bgcolor: 'grey.900' }}
                animation="wave"
                variant="rounded"
                width="100%"
              />
            )}
          </p>
          <div className="movie-details-info">
            <div className="movie-details-info-item">
              <h2 className="text-base font-bold">Original Language</h2>
              <h2>
                {isLoading ? (
                  movie.original_language
                ) : (
                  <Skeleton
                    width="100%"
                    animation="wave"
                    sx={{ bgcolor: 'grey.900' }}
                  />
                )}
              </h2>
            </div>
            <div className="movie-details-info-item">
              <h2 className="text-base font-bold">Original Title</h2>
              <h2>
                {isLoading ? (
                  movie.original_title
                ) : (
                  <Skeleton
                    width="100%"
                    animation="wave"
                    sx={{ bgcolor: 'grey.900' }}
                  />
                )}
              </h2>
            </div>
            <div className="movie-details-info-item">
              <h2 className="text-base font-bold">Budget</h2>
              <h2>
                ${' '}
                {isLoading ? (
                  movie.budget
                ) : (
                  <Skeleton
                    width="100%"
                    animation="wave"
                    sx={{ bgcolor: 'grey.900' }}
                  />
                )}
              </h2>
            </div>
          </div>
        </div>
        <div className="movie-details-footer">
          <SimilarList similar={similar} />
          <RekomendationsList recommendations={recommendations} />
        </div>
      </div>
    </>
  );
};

export default movie;
