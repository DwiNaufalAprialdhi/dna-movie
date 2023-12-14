import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination, Autoplay } from 'swiper/modules';
import { Link } from 'react-router-dom';
import Rating from './Rating';

// eslint-disable-next-line react/prop-types
const Discover = ({ values = [] }) => {
  return (
    <>
      <Swiper
        slidesPerView={'auto'}
        loop={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiperDiscover"
      >
        {values &&
          // eslint-disable-next-line react/prop-types
          values.map((item) => {
            return (
              <SwiperSlide className="swiper-discover-slide" key={item.id}>
                <img
                  src={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`}
                  alt=""
                  className="discover-img"
                />
                <div className="discover-info">
                  <h2 className="discover-date">{item.release_date}</h2>
                  <h2 className="discover-title">{item.title}</h2>
                  <div className="flex items-center gap-2 mb-[24px]">
                    <Rating value={item.vote_average} />
                    <Link to={`/movie/${item.id}`} className="discover-btn">
                      See
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-3 h-3"
                      >
                        <path d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                        <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </Link>
                  </div>
                  <p className="discover-overview">{item.overview}</p>
                </div>
              </SwiperSlide>
            );
          })}
      </Swiper>
    </>
  );
};

export default Discover;
