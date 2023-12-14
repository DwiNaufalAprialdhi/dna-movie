import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import PopularList from './components/PopularList';
import {
  getDiscover,
  getMoviePopularList,
  getNowPlayingList,
  getTopRatedList,
  getUpcomingList,
} from './services/apitmdb.service';
import Discover from './components/Discover';
import SearchResults from './components/SearchResults';
import NowPlayingList from './components/NowPlayingList';
import TopRatedList from './components/TopRatedList';
import UpcomingList from './components/UpcomingList';

function App() {
  const [popularList, setPopularList] = useState([]);

  const [nowPlayingList, setNowPlayingList] = useState([]);

  const [topRatedList, setTopRatedList] = useState([]);

  const [upcomingList, setUpcomingList] = useState([]);

  const [searchResults, setSearchResults] = useState([]);

  const [textResults, setTextResults] = useState('');

  const [discoverList, setDiscoverList] = useState([]);

  const [isLoading, setIsLoading] = useState(false);

  const [scrollTop, setScrollTop] = useState(0);

  useEffect(() => {
    // eslint-disable-next-line no-unused-vars
    const handleScroll = (event) => {
      setScrollTop(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.addEventListener('scroll', handleScroll);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // eslint-disable-next-line no-unused-vars
  const searchMovie = async (q) => {
    // eslint-disable-next-line no-unused-vars
    const searchQuery = await axios.get(
      `https://api.themoviedb.org/3/search/movie?page=1&query=${q}&api_key=f4ef51a0f580fce09bdcb3d88393bc2a`
    );
    return searchQuery.data;
  };

  const search = async (q) => {
    if (q.length > 1) {
      const query = await searchMovie(q);
      setTextResults(q);
      setSearchResults(query.results);
    } else {
      const query = await searchMovie(q);
      setSearchResults(query.results);
    }
  };

  useEffect(() => {
    getMoviePopularList((data) => {
      setPopularList(data);
      setIsLoading(true);
    });
    getDiscover((data) => {
      setDiscoverList(data);
    });
    getNowPlayingList((data) => {
      setNowPlayingList(data);
      setIsLoading(true);
    });
    getTopRatedList((data) => {
      setTopRatedList(data);
      setIsLoading(true);
    });
    getUpcomingList((data) => {
      setUpcomingList(data);
      setIsLoading(true);
    });
  }, []);

  return (
    <>
      <div
        className={`movies-header ${
          scrollTop > 0 ? 'bg-[#0D0D0D] bg-opacity-80' : ''
        }`}
      >
        <a href="/" className="movies-header-logo">
          <h1 className="md:text-2xl text-xl font-bold text-center">
            DNA MOVIE
          </h1>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
          </svg>
        </a>
        <input
          type="text"
          placeholder="Search for movies..."
          className="movies-search"
          onChange={({ target }) => search(target.value)}
        />
      </div>
      <Discover values={discoverList} />
      <SearchResults
        values={searchResults}
        isLoading={isLoading}
        textValues={textResults}
      />
      <UpcomingList values={upcomingList} isLoading={isLoading} />
      <PopularList values={popularList} isLoading={isLoading} />
      <NowPlayingList values={nowPlayingList} isLoading={isLoading} />
      <TopRatedList values={topRatedList} isLoading={isLoading} />
    </>
  );
}

export default App;
