import {useState, useEffect} from "react";
import './App.css';
import searchIcon from './assets/images/search.svg'

//OMDb API: http://www.omdbapi.com/?i=tt3896198&apikey=1b5af3c4
const OMDB_API_URL = 'http://www.omdbapi.com?apiKey=1b5af3c4'

const movie1 = {
  "Title": "Spiderman in Cannes",
  "Year": "2016",
  "imdbID": "tt5978586",
  "Type": "movie",
  "Poster": "https://m.media-amazon.com/images/M/MV5BZDlmMGQwYmItNTNmOS00OTNkLTkxNTYtNDM3ZWVlMWUyZDIzXkEyXkFqcGdeQXVyMTA5Mzk5Mw@@._V1_SX300.jpg"
}

const App = (props) => {

  const searchMovies = async (title) => {
    const response = await fetch(`${OMDB_API_URL}&s=${title}`);
    const data = await response.json();

    console.log(data.Search);
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
          value="Superman"
          onChange={() => {}}
        />
        <img
          src={searchIcon}
          alt="search"
          onClick={() => {}}
        />
      </div>

      <div className="container">
        <div className="movie">
          <div>
            <p>{movie1.Year}</p>
          </div>

          <div>
            <img src={movie1.Poster !== 'N/A' ? movie1.Poster : 'https://via.placeholder.com/400'} alt={movie1.Title} />
          </div>

          <div>
            <span>{movie1.Type}</span>
            <h3>{movie1.Title}</h3>
          </div>
        </div>
      </div>      
    </div>
  );
}

// // Add function
// const isMetaMaskInstalled = () => {
//   const { ethereum } = window;
//   console.log('ethereum:', ethereum)
//   if(typeof ethereum === 'undefined') {
//       return false;
//   }
//   return Boolean(ethereum && ethereum.isMetaMask);
// }

// // A component is a piece of code that returns / renders some jsx
// const Person = (props) => {
//   return (
//     <>
//       <h1>Name: {props.name}</h1>
//       <h2>Last Name: {props.lastName}</h2>
//       <h2>Age: {props.age}</h2>
//     </>
//   )
// }

// Make function App() {} to an arrow function component
// const App = (props) => {
//   const [value, setValue] = useState(1);
//   const hasManager = true;
//   const [mmInstalled, setMMInstalled] = useState(false);

//   useEffect(() => {
//     console.log('This should be called only 1 time')
//     setMMInstalled(isMetaMaskInstalled());

//   }, []); // will only called at 1st time

//   useEffect(() => {
//     console.log('You have changed the value to ' + value);
//   }, [value]);

//   return (
//     <div className="App">
//       <h1>Hello, React!</h1>
//       {/* You can type web3 or ethereum in developer console, it prints a Proxy object */}
//       <p>Metamask: { mmInstalled ? "Installed" : "Not Found" }</p>
//       {hasManager ? (
//         <>
//           I have a manager
//         </>
//       ) : (
//         <>
//           <h2>hasManager: false</h2>
//           <h2>give me a manager</h2>
//         </>
//       )}

//       <hr/>
//       <Person name="John" lastName="Doe" age={25} />
//       <Person name='Bell' lastName='Los' age={36} />
      
//       <hr/>
//       <div>
//         <p>I am props.name: {props.name}</p>
//         <p>I am a state: {value}</p>
//         <button onClick={() => setValue((value + 1))}>Increment Value</button>
//         <button onClick={() => setValue((preValue) => preValue - 1)}>Decrease Value</button>
//       </div>
//     </div>
//   );
// }

export default App;
