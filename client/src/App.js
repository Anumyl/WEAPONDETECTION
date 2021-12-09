import React, { Component } from "react";
import WeaponDetection from './contracts/WeaponDetection.json'
import getWeb3 from "./getWeb3";

import "./App.css";
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from "./Components/Routes";
class App extends Component {
  state = { storageValue: 0, web3: null, accounts: null, contract: null };

  componentDidMount = async () => {
    try 
    {
      // Get network provider and web3 instance.
      const web3 = await getWeb3();

      // Use web3 to get the user's accounts.
      const accounts = await web3.eth.getAccounts();

      // Get the contract instance.
      const networkId = await web3.eth.net.getId();
      console.log(networkId);
      const deployedNetwork = WeaponDetection.networks[networkId];
      const instance = new web3.eth.Contract
      (
        WeaponDetection.abi,
        deployedNetwork && deployedNetwork.address,
      );

      // Set web3, accounts, and contract to the state, and then proceed with an
      // example of interacting with the contract's methods.
      //this.setState({ web3, accounts, contract: instance }, this.runExample);
      this.setState({ web3, accounts, contract: instance }, this.runExample);
    } catch (error) {
      // Catch any errors for any of the above operations.
      alert(
        `Failed to load web3, accounts, or contract. Check console for details.`,
      );
      console.error(error);
    }
  };

  runExample = async () => {
    const { accounts, contract } = this.state;

    // Stores a given value, 5 by default.
    
    //await contract.methods.set(5).send({ from: accounts[0] });

    // Get the value from the contract to prove it worked.
    const response = await contract.methods.display().call();

    // Update state with the result.
    this.setState({ storageValue: response });
  };

  render() {
    if (!this.state.web3) {
      return <div>
        <nav className="navbar pure-menu pure-menu-horizontal">
          <a href="#" className="pure-menu-heading pure-menu-link">PRIVACY PRESERVING CCTV SURVEILLANCE USING BLOCKCHAIN AND HOMOMORPHIC ENCRYPTION SCHEMES</a>
        </nav>

        <nav className="navbarr pure-menu pure-menu-horizontal">
          <h2>WEAPON DETECTION</h2>
          </nav><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
          
        <h3>Loading Web3, accounts, and contract...</h3>
        </div>;
    }
    return (
      <Router>
        <div className="App">
          <Routes contract={this.state.contract} accounts={this.state.accounts} web3={this.state.web3}/>
        </div>
      </Router>
    );
  }
}

export default App;

