import React from 'react';
import { useState, useEffect } from "react";
import { useWeb3React } from '@web3-react/core'; // hook for wallet connection events
import { WalletLinkConnector } from "@web3-react/walletlink-connector";
import { WalletConnectConnector } from "@web3-react/walletconnect-connector";
import { InjectedConnector } from "@web3-react/injected-connector";// Injected (e.g. Metamask, safepal, trustwallet)
import { ethers } from 'ethers';

//import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown'

const CoinbaseWallet = new WalletLinkConnector({
  url: `https://mainnet.infura.io/v3/${process.env.INFURA_KEY}`,
  appName: "Web3-react Demo",
  supportedChainIds: [1, 3, 4, 5, 42],
});

const WalletConnect = new WalletConnectConnector({
  rpc: `https://mainnet.infura.io/v3/${process.env.INFURA_KEY}`,
  bridge: "https://bridge.walletconnect.org",
  qrcode: true,
});

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

// make it a component
const ConnectWallet = () => {
  const { chainId, account, active, activate, deactivate, library } = useWeb3React()
  const [ balance, setBalance] = useState("")
  useEffect(() => {
    library?.getBalance(account).then((result: any)=>{
      console.log(result)
      if (account)
        setBalance(ethers.utils.formatEther(result))
    })
    
  }, [account]);

  return (
    <>
      <div>Connection Status: {active ? 'already' : 'not'} connected</div>
      <div>Account: {account}</div>
      <div>Balance: {balance}</div>
      <div>Network ID: {chainId}</div>

      <Button variant="primary" onClick={() => { activate(CoinbaseWallet) }}>Coinbase Wallet</Button>{' '}
      <Button variant="primary" onClick={() => { activate(WalletConnect) }}>Wallet Connect</Button>{' '}
      <Button variant="primary" onClick={() => { activate(Injected) }}>Metamask</Button>{' '}

      <Button onClick={deactivate}>Disconnect</Button>
    </>
  )

}

function App() {
  /*  active: boolean indicating connection to user’s wallet
      account: connected user's public wallet address
      chainId: chain id of the currently connected network
      library: to add/switch networks, must make a request to Web3Provider */
  const {library } = useWeb3React()
  const [ddNetwork, setDdNetwork] = useState('Dropdown Button');
  const [ddChainId, setDdChainId] = useState('0x1');
  let networkOptions = ['Binance Smart Chain Mainnet', 'Ethereum Mainnet', 'Polygon Mainnet'];

  useEffect(() => {
    if (ddNetwork === 'Binance Smart Chain Mainnet')
      setDdChainId('0x38');
    else if (ddNetwork === 'Ethereum Mainnet')
      setDdChainId('0x1');
    else if (ddNetwork === 'Polygon Mainnet')
      setDdChainId('0x89');
    else if (ddNetwork === 'Harmony Mainnet')
      setDdChainId('0x63564c40');
  }, [ddNetwork]);

  // example of switching or adding network with Harmony Mainnet
  const switchNetwork = async () => {
    // https://rpc.info/ or https://docs.rango.exchange/integrations
    try {
      await library.provider.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId : ddChainId }],
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

  const handleSelectNetwork=(e: any)=>{
    setDdNetwork(e);
    console.log(e);
  }

  return (
    <div className="App">
      <ConnectWallet />

      <DropdownButton 
       id="dropdown-basic-button"
       title={ddNetwork}
       onSelect={handleSelectNetwork}
      >
        {networkOptions.map(
          (option) => (
            <Dropdown.Item key={option} eventKey={option}>{option}</Dropdown.Item>
          ),
        )}
      </DropdownButton>
      <button onClick={switchNetwork}>Switch Network</button>
    </div>
  );
}

export default App;
