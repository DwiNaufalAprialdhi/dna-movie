/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
const gallery = () => {
  const param = useParams();

  const [backdrops, setBackdrops] = useState([]);
  const [logos, setLogos] = useState([]);
  const [posters, setPosters] = useState([]);
  const [movie, setMovie] = useState([]);

  const getImages = () => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${param.id}/images?api_key=f4ef51a0f580fce09bdcb3d88393bc2a`
      )
      .then((res) => {
        setBackdrops(res.data.backdrops);
        setLogos(res.data.logos);
        setPosters(res.data.posters);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getMovie = () => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${param.id}?api_key=f4ef51a0f580fce09bdcb3d88393bc2a`
      )
      .then((res) => {
        setMovie(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getImages();
    getMovie();
  }, []);

  return (
    <>
      <div className="gallery">
        <div className="gallery-header">
          <img
            src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
            alt="movie"
            className="gallery-backrop-movie"
          />
          <div className="gallery-flex-movie">
            <img
              src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
              alt="movie"
              className="gallery-poster-movie"
            />
            <div className="flex flex-col gap-2">
              <h2 className="text-3xl font-bold">{movie.title}</h2>
              <Link
                to={`/movie/${movie.id}`}
                className="text-xs font-bold hover:translate-x-1 duration-200 opacity-50"
              >
                Back To Main
              </Link>
            </div>
          </div>
        </div>
        <div className="gallery-body">
          <div className="gallery-item">
            <h2 className="gallery-title">Backdrop ({backdrops.length})</h2>
            <div className="gallery-grid">
              {backdrops.map((backdrop) => (
                <img
                  key={backdrop.file_path}
                  src={`https://image.tmdb.org/t/p/original/${backdrop.file_path}`}
                  alt="movie"
                  className="gallery-img"
                />
              ))}
            </div>
          </div>
          <div className="gallery-item">
            <h2 className="gallery-title">Poster ({posters.length})</h2>
            <div className="gallery-grid">
              {posters.map((poster) => (
                <img
                  key={poster.file_path}
                  src={`https://image.tmdb.org/t/p/original/${poster.file_path}`}
                  alt="movie"
                  className="gallery-img"
                />
              ))}
            </div>
          </div>
          <div className="gallery-item">
            <h2 className="gallery-title">Logo ({logos.length})</h2>
            <div className="gallery-grid">
              {logos.map((logo) => (
                <img
                  key={logo.file_path}
                  src={`https://image.tmdb.org/t/p/original/${logo.file_path}`}
                  alt="movie"
                  className="gallery-img"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default gallery;
