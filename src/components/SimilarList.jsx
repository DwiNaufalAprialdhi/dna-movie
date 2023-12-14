/* eslint-disable react/prop-types */
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import { FreeMode, Autoplay } from 'swiper/modules';
import { Link } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const SimilarList = ({ similar }) => {
  return (
    <>
      <div className={similar.length > 0 ? 'block' : 'hidden'}>
        <h2 className="lg:text-3xl md:text-2xl text-xl font-bold mb-5">
          Similar
        </h2>
        <Swiper
          loop={true}
          autoplay={{
            delay: 2500,
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
          {similar &&
            // eslint-disable-next-line react/prop-types
            similar.map((values) => {
              return (
                <SwiperSlide key={values.id} className="swiper-slide">
                  <Link
                    to={`/movie/${values.id}`}
                    className="card-recomendations"
                    target="_blank"
                  >
                    <img
                      src={
                        values.poster_path
                          ? `https://image.tmdb.org/t/p/original/${values.poster_path}`
                          : 'https://placehold.co/231x347?text=Poster+Not+Found'
                      }
                      alt="poster"
                      className="cr-img"
                    />
                    <h2 className="cr-title">{values.title}</h2>
                  </Link>
                </SwiperSlide>
              );
            })}
        </Swiper>
      </div>
    </>
  );
};

export default SimilarList;
