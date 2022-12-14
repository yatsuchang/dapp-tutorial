import {useState, useEffect} from "react";
import MovieCard from '../MovieCard';
import './Movie.css';
import searchIcon from '../../assets/images/search.svg'

//OMDb API: http://www.omdbapi.com/?i=tt3896198&apikey=XXX
const OMDB_API_URL = `http://www.omdbapi.com?apiKey=${process.env.REACT_APP_OMDB_API_KEY}`

const Movie = (props) => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const searchMovies = async (title) => {
    const response = await fetch(`${OMDB_API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  }

  useEffect(() => {
    searchMovies('Spiderman');
    // return () => {
    //   cleanup
    // };
  }, []); // call only once at start
  
  return (
    <div className="app">
      <h1>Movies King</h1>

      <div className="search">
        <input
          placeholder="Search for movies"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <img
          src={searchIcon}
          alt="search"
          onClick={() => searchMovies(searchTerm)}
        />
      </div>

      {movies?.length > 0
          ? (
            <div className="container">
              {/* <MovieCard movie1={movie1} /> */}
              {movies.map((movie) => (
                <MovieCard key={movie.imdbID} movie={movie} />
              ))}
            </div>
          ) : (
            <div className="empty">
              <h2>No movies found</h2>
            </div>
          )
      }      
    </div>
  );
}
export default Movie;