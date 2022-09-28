import {useState} from "react";
import './App.css';

// Add function
const isMetaMaskInstalled = () => {
  const { ethereum } = window;
  console.log('ethereum:', ethereum)
  //web3js = new Web3(Web3.currentProvider);
  //console.log('web3js:', web3js)
  if(typeof ethereum === 'undefined') {
      return false;
  }
  return Boolean(ethereum && ethereum.isMetaMask);
}

// Make function App() {} to an arrow function component
const App = () => {
  const [value, setValue] = useState(1);

  return (
    <div className="App">
      <h1>Hello, React!</h1>
      <p>You can type web3 or ethereum in developer console, it prints a Proxy object</p>
      <p>Metamask: { isMetaMaskInstalled() ? "Installed" : "Not Found" }</p>

      <div>
        <p>{value}</p>
        <button onClick={() => setValue((value + 1))}>Increment Value</button>
      </div>
    </div>
  );
}

export default App;
