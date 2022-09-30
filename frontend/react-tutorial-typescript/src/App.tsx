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
      chainId: chain id of the currently connected network
      library: to add/switch networks, must make a request to Web3Provider */
  const { chainId, account, active, activate, deactivate, library } = useWeb3React()

  // example of switching or adding network with Harmony Mainnet
  const switchNetwork = async () => {
    // https://rpc.info/ or https://docs.rango.exchange/integrations
    try {
      await library.provider.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: "0x63564c40" }],
      });
    } catch (switchError: any) {
      // 4902 error code indicates the chain is missing on the wallet
      if (switchError.code === 4902) {
        try {
          await library.provider.request({
            method: "wallet_addEthereumChain",
            params: [
              {
                chainId: "0x63564c40",
                rpcUrls: ["https://api.harmony.one"],
                chainName: "Harmony Mainnet",
                nativeCurrency: { name: "ONE", decimals: 18, symbol: "ONE" },
                blockExplorerUrls: ["https://explorer.harmony.one"],
                iconUrls: ["https://harmonynews.one/wp-content/uploads/2019/11/slfdjs.png"]
              }
            ],
          });
        } catch (error) {
          console.error(error)
        }
      }
    }
  };

  return (
    <div className="App">
      <div>Connection Status: {active ? 'already' : 'not'} connected</div>
      <div>Account: {account}</div>
      <div>Network ID: {chainId}</div>

      <button onClick={() => { activate(Injected) }}>Metamask</button>

      <button onClick={deactivate}>Disconnect</button>
      <button onClick={switchNetwork}>Switch to Harmony Mainnet</button>
    </div>
  );
}

export default App;
