import React from 'react';
import { useWeb3React } from '@web3-react/core'; // hook for wallet connection events
import { InjectedConnector } from "@web3-react/injected-connector";// Injected (e.g. Metamask, safepal, trustwallet)

import './App.css';

const Injected = new InjectedConnector({
  supportedChainIds: [
      1, // Mainet
      3, // Ropsten
      4, // Rinkeby
      5, // Goerli
      42, // Kovan
      56, // BSC
  ],
})

function App() {
  /*  active: boolean indicating connection to user’s wallet
      account: connected user's public wallet address
      chainId: chain id of the currently connected network */
  const { chainId, account, active, activate, deactivate } = useWeb3React()

  return (
    <div className="App">
      <div>Connection Status: {active}</div>
      <div>{Account: {account}</div>
      <div>{Network ID: {chainId}</div>

      <button onClick={() => { activate(Injected) }}>Metamask</button>

      <button onClick={deactivate}>Disconnect</button>
    </div>
  );
}

export default App;
