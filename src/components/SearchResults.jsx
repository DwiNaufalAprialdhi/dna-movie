/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import SkeletonCard from './SkeletonCard';
import Rating from './Rating';

const SearchResults = ({ values = [], isLoading, textValues }) => {
  return (
    <>
      <section className={values.length > 0 ? 'block' : 'hidden'}>
        <h2 className="text-3xl font-bold mb-5">{`Results for "${textValues}"`}</h2>
        <div className="movies-container">
          {values &&
            values.map((value) => {
              return (
                <Link
                  key={value.id}
                  to={`/movie/${value.id}`}
                  className="movies-card"
                >
                  <img
                    src={
                      isLoading ? (
                        value.poster_path ? (
                          `https://image.tmdb.org/t/p/w500/${value.poster_path}`
                        ) : (
                          'https://placehold.co/150x300?text=Poster+Not+Found'
                        )
                      ) : (
                        <SkeletonCard />
                      )
                    }
                    alt="images"
                    className="movies-img"
                  />
                  <div className="movies-info">
                    <h2 className="movies-title">
                      {value.title.substring(0, 15)}...
                    </h2>
                    <h2 className="movies-date">{value.release_date}</h2>
                    <Rating
                      value={value.vote_average}
                      className={
                        'text-xs py-1 px-2 flex items-center gap-1 bg-black max-w-max rounded-full'
                      }
                    />
                  </div>
                </Link>
              );
            })}
        </div>
      </section>
    </>
  );
};

export default SearchResults;
