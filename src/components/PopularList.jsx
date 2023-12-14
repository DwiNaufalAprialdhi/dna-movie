import { Link } from 'react-router-dom';
import SkeletonCard from './SkeletonCard';
import Rating from './Rating';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
// eslint-disable-next-line react/prop-types
const PopularList = ({ values = [], isLoading }) => {
  return (
    <section>
      <h2 className="lg:text-3xl md:text-2xl text-xl font-bold mb-5">
        Popular
      </h2>
      <Swiper
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        slidesPerView={6}
        spaceBetween={10}
        freeMode={true}
        modules={[FreeMode, Autoplay]}
        className="mySwiper"
        breakpoints={{
          640: {
            slidesPerView: 3,
          },
          768: {
            slidesPerView: 5,
          },
          1024: {
            slidesPerView: 6,
          },
        }}
      >
        {values &&
          values.map((value) => {
            return (
              <SwiperSlide key={value.id} className="swiper-slide">
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
                          'https://placehold.co/600x400?text=Image+Not+Found'
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
              </SwiperSlide>
            );
          })}
      </Swiper>
    </section>
  );
};

export default PopularList;
