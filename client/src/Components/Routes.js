import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";
import ViewAllData from "./ViewAllData";
import SearchWeapons from "./SearchWeapons.js";
import Home from "./Home.js";
import ScanData from "./ScanData";
export default class Routes extends Component {

    constructor(props){
        super(props);
    }
    render() {
        
        return (
            
                <Switch>

                    <Route path="/" exact render={
                        () => <Home contract={this.props.contract} accounts={this.props.accounts} web3={this.props.web3}/>
                    }/>

                    <Route path="/SearchWeapons" exact render={
                        () => <SearchWeapons contract={this.props.contract} accounts={this.props.accounts} web3={this.props.web3}/>
                    }/>

                    <Route path="/ViewAllData" exact render={
                        () => <ViewAllData contract={this.props.contract} accounts={this.props.accounts} web3={this.props.web3}/>
                    }/>

                    <Route path="/ScanData" exact render={
                        () => <ScanData contract={this.props.contract} accounts={this.props.accounts} web3={this.props.web3}/>
                    }/>

                </Switch>
            
        )
    }
}