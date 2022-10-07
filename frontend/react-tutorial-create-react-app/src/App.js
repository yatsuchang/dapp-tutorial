import {useState, useEffect} from "react";
//import Movie from './component/Movie/Movie'; would import Movie.css
import Advice from './component/Advice/Advice';
//import './App.css';
import { convertCurrency } from './utils/currency-converter';


const App = (props) => {

  // useEffect(() => {
  //   convertCurrency('USD', 'TWD', 1000)
  //     .then((message) => {
  //       console.log(message)
  //     }).catch(error => console.log(error.message));
  // }, []); // call only once at start
  
  return (
    <>
      {/* <Movie /> */}
      <Advice />
      {/* <h1>To Be Design New feature</h1> */}
    </>
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
