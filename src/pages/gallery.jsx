/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Modal } from "semantic-ui-react";
import SkeletonCard from "../components/SkeletonCard";
import SkeletonDiscoverGallery from "../components/SkeletonDiscoverGallery";
const gallery = () => {
  const param = useParams();

  const [backdrops, setBackdrops] = useState([]);
  const [logos, setLogos] = useState([]);
  const [posters, setPosters] = useState([]);
  const [movie, setMovie] = useState([]);
  const [openBackdrops, setOpenBackdrops] = useState(false);
  const [openPosters, setOpenPosters] = useState(false);
  const [openLogos, setOpenLogos] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const getImages = () => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${param.id}/images?api_key=f4ef51a0f580fce09bdcb3d88393bc2a`
      )
      .then((res) => {
        setBackdrops(res.data.backdrops);
        setLogos(res.data.logos);
        setPosters(res.data.posters);
        setIsLoading(true);
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
        setIsLoading(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    setTimeout(() => {
      getImages();
      getMovie();
    }, 2 * 3000);
  }, []);

  return (
    <>
      <div className="gallery">
        <div className="gallery-header">
          {isLoading ? (
            <img
              src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
              alt="movie"
              className="gallery-backrop-movie"
            />
          ) : (
            <SkeletonDiscoverGallery />
          )}

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
            <div className="flex items-center justify-between">
              <h2 className="gallery-title">Backdrop ({backdrops.length})</h2>
              <Modal
                open={openBackdrops}
                onClose={() => setOpenBackdrops(false)}
                onOpen={() => setOpenBackdrops(true)}
                trigger={
                  backdrops.length > 6 ? (
                    <button className="text-base font-bold">See All</button>
                  ) : (
                    ""
                  )
                }
              >
                <Modal.Header>Backdrop ({backdrops.length})</Modal.Header>
                <Modal.Content>
                  <Modal.Description>
                    <div className="flex flex-wrap justify-center gap-5">
                      {backdrops.map((backdrop) => (
                        <img
                          key={backdrop.file_path}
                          src={`https://image.tmdb.org/t/p/original/${backdrop.file_path}`}
                          alt="movie"
                          className="lg:w-1/4 md:w-1/4 w-1/3 rounded-lg object-cover"
                        />
                      ))}
                    </div>
                  </Modal.Description>
                </Modal.Content>
              </Modal>
            </div>
            {isLoading ? (
              <div className="gallery-grid">
                {backdrops.length > 6
                  ? backdrops
                      .slice(0, 6)
                      .map((backdrop) => (
                        <img
                          key={backdrop.file_path}
                          src={`https://image.tmdb.org/t/p/original/${backdrop.file_path}`}
                          alt="movie"
                          className="gallery-img"
                        />
                      ))
                  : backdrops.map((backdrop) => (
                      <img
                        key={backdrop.file_path}
                        src={`https://image.tmdb.org/t/p/original/${backdrop.file_path}`}
                        alt="movie"
                        className="gallery-img"
                      />
                    ))}
              </div>
            ) : (
              <SkeletonCard />
            )}
          </div>
          <div className="gallery-item">
            <div className="flex items-center justify-between">
              <h2 className="gallery-title">Poster ({posters.length})</h2>
              <Modal
                open={openPosters}
                onClose={() => setOpenPosters(false)}
                onOpen={() => setOpenPosters(true)}
                trigger={
                  posters.length > 6 ? (
                    <button className="text-base font-bold">See All</button>
                  ) : (
                    ""
                  )
                }
              >
                <Modal.Header>Poster ({posters.length})</Modal.Header>
                <Modal.Content>
                  <Modal.Description>
                    <div className="flex flex-wrap justify-center gap-5">
                      {posters.map((poster) => (
                        <img
                          key={poster.file_path}
                          src={`https://image.tmdb.org/t/p/original/${poster.file_path}`}
                          alt="movie"
                          className="lg:w-1/4 md:w-1/4 w-1/3 rounded-lg object-cover"
                        />
                      ))}
                    </div>
                  </Modal.Description>
                </Modal.Content>
              </Modal>
            </div>
            {isLoading ? (
              <div className="gallery-grid">
                {posters.length > 6
                  ? posters
                      .slice(0, 6)
                      .map((poster) => (
                        <img
                          key={poster.file_path}
                          src={`https://image.tmdb.org/t/p/original/${poster.file_path}`}
                          alt="movie"
                          className="gallery-img"
                        />
                      ))
                  : posters.map((poster) => (
                      <img
                        key={poster.file_path}
                        src={`https://image.tmdb.org/t/p/original/${poster.file_path}`}
                        alt="movie"
                        className="gallery-img"
                      />
                    ))}
              </div>
            ) : (
              <SkeletonCard />
            )}
          </div>
          <div className="gallery-item">
            <div className="flex items-center justify-between">
              <h2 className="gallery-title">Logo ({logos.length})</h2>
              <Modal
                open={openLogos}
                onClose={() => setOpenLogos(false)}
                onOpen={() => setOpenLogos(true)}
                trigger={
                  logos.length > 6 ? (
                    <button className="text-base font-bold">See All</button>
                  ) : (
                    ""
                  )
                }
              >
                <Modal.Header>Logo ({logos.length})</Modal.Header>
                <Modal.Content>
                  <Modal.Description>
                    <div className="flex flex-wrap justify-center gap-5">
                      {logos.map((logo) => (
                        <img
                          key={logo.file_path}
                          src={`https://image.tmdb.org/t/p/original/${logo.file_path}`}
                          alt="movie"
                          className="lg:w-1/4 md:w-1/4 w-1/3 rounded-lg object-cover"
                        />
                      ))}
                    </div>
                  </Modal.Description>
                </Modal.Content>
              </Modal>
            </div>
            {isLoading ? (
              <div className="gallery-grid">
                {logos.length > 6
                  ? logos
                      .slice(0, 6)
                      .map((logo) => (
                        <img
                          key={logo.file_path}
                          src={`https://image.tmdb.org/t/p/original/${logo.file_path}`}
                          alt="movie"
                          className="gallery-img"
                        />
                      ))
                  : logos.map((logo) => (
                      <img
                        key={logo.file_path}
                        src={`https://image.tmdb.org/t/p/original/${logo.file_path}`}
                        alt="movie"
                        className="gallery-img"
                      />
                    ))}
              </div>
            ) : (
              <SkeletonCard />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default gallery;
