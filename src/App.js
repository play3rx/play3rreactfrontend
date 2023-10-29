import { useState } from 'react';
import {
  EtherspotBatch,
  EtherspotBatches,
  EtherspotContractTransaction,
  EtherspotTransaction,
  useEtherspotTransactions,
  useWalletAddress,
} from '@etherspot/transaction-kit';
import { ethers } from 'ethers';
import { ERC20_ABI } from './ERC20_ABI.ts';
import { PrimeSdk } from '../src';
import logo from './etherspot-logo.svg';
import logo1 from './123.jpg';
import logo2 from './team1-banner-252x332.png';
import logo3 from './team7-banner-252x332.png';
import logo4 from './vs_finished.png';
import './App.css';
//import * as dotenv from 'dotenv';
import { utils } from 'ethers';
const tokenAddress = '0xffaF077b8593D19f52cB5Aa9cF23Ce95a9ac616D';

//dotenv.config();

function myFunction2() {
  document.getElementByClass("button2").style.borderColor = "lightblue";
}

function App() {

  
  const onEstimateReceiver3 = (estimationData) => {
    console.log(
      'This is the cost estimate for all the batches',
      estimationData,
    );
  }
  


  const etherspotAddress = useWalletAddress();
  const { estimate, send } = useEtherspotTransactions();
  const [address, setAddress] = useState(
    '0xffaF077b8593D19f52cB5Aa9cF23Ce95a9ac616D'
  );
  const [amount, setAmount] = useState('0.00001');
  const [latestEstimationData, setLatestEstimationData] = useState(null);
  const [latestSendData, setLatestSendData] = useState(null);

  /**
   * This runs an estimation for our transaction. We must
   * ALWAYS estimate before sending. If we change anything about
   * the transaction, we need to estimate again. This performs
   * essential cost calculations and validations before it
   * can be sent.
   */
/*
  async function main() {
    const provider = new ethers.providers.JsonRpcProvider(process.env.BUNDLER_URL)
    const erc20Instance = new ethers.Contract(tokenAddress, ERC20_ABI, provider);
  };

*/
  

// In your functional component or elsehwere
const onEstimateReceiver = (estimationData) => {
  console.log(
    'This is the cost estimate for all the batches',
    estimationData,
  );
}

// In your render or as a component...
// In your functional component or elsehwere
const onEstimateReceiver2 = (estimationData) => {
  console.log(
    'This is the cost estimate for all the batches',
    estimationData,
  );
}

// In your render or as a component...



const dosomething2 = async () => {
  
}

  const dosomething1 = async () => {


  }
  const runEstimation = async () => {
    // Reset the latest send data
    setLatestSendData(null);

    // Perform the estimation
    const estimationData = await estimate();
    console.log('Estimation Data:', estimationData);

    /**
     * Sometimes the estimation fails. If the estimation fails,
     * it usually means the transaction could not be validated and
     * something, usually the transaction values, were invalid.
     */
    if (JSON.stringify(estimationData).includes('reverted')) {
      alert(
        'Sorry, an estimation error occured. This may happen if:\n\n- The address or amount entered were invalid\n- Your Etherspot Smart Wallet account has no funds\n\nPlease check these points and try again.'
      );

      return;
    }

    /**
     * Otherwise, we have a successful estimation! Lets set it
     * so we can display / yse it later.
     */
    setLatestEstimationData(estimationData);
  };

  /**
   * The send method will now submit this transaction to
   * Etherspot. Etherspot will queue, submit and monitor your
   * transaction to ensure that it eventually reaches the
   * blockchain.
   */
  const runSend = async () => {
    // We must always estimate first.
    if (!latestEstimationData) {
      alert(
        'You must always estimate successfully before sending. This ensures that the transaction cost is up to date and validated.\n\nPlease try to estimate and send again.'
      );

      return;
    }

    

    // Lets send this transaction!
    const sendResult = await send();
    console.log('Send Data:', sendResult);

    /**
     * Sometimes the sending fails. If the sending fails, it
     * is usually due to bad network conditions or the estimation
     * is now outdated. In this scenario, try to estimate and
     * send again.
     */
    if (JSON.stringify(sendResult).includes('reverted')) {
      alert(
        'There was a problem trying to send your transaction. This can happen for a variety of reasons, but the most common problems are bad blockchain conditions or an out of date estimate.\n\nPlease try to estimate, then send again.'
      );

      return;
    }

    /**
     * Otherwise, we have a successful send! Lets set it
     * so we can display it later.
     */
    setLatestSendData(sendResult);
  };

  return (
    
    <div className="App">
      <table>
      <div className="row">
  <div className="column">
    <h2>Red</h2>
    <p><img src={logo2} className="button2" alt="logo" /></p>
  </div>
  <div className="column">
    <h2></h2>
    <p><img src={logo4} className="App-logo" alt="logo" /></p>
  </div>
  <div className="column">
    <h2>Blue</h2>
    <p><img src={logo3} className="button2" alt="logo" /></p>
  </div>
</div>

<div className="column1">
    <form>
      <label>Enter amount:
        <input type="text" />
      </label>

    

<button className="button" onClick={onEstimateReceiver2}>Value</button>
    </form>
    </div>
    </table>
   
    </div>
  );
}

export default App;
