import React, { Component } from "react";
import crime from '../images/crime.jpg';
import cctv from '../images/cctv.jpg';
import '../css/oswald.css'
import '../css/open-sans.css'
import '../css/pure-min.css'
import '../css/home.css'
import history from "./history";

class Home extends Component
{
    constructor(props){
        super(props);
    }

    render()
    {

        return (
            <div className="Home">
              <nav className="navbar pure-menu pure-menu-horizontal">
                <a href="#" className="pure-menu-heading pure-menu-link">PRIVACY PRESERVING CCTV SURVEILLANCE USING BLOCKCHAIN AND HOMOMORPHIC ENCRYPTION SCHEMES</a>
              </nav>
      
              <nav className="navbarr pure-menu pure-menu-horizontal">
                <h2>WEAPON DETECTION</h2>
                </nav>
                <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
                <h2>Hello {this.props.accounts[0]}</h2>
                <br></br><br></br>
                <div className="f1">
                    <img src= {crime} height="180" alt="crime.jpg"/>
                  </div>
      
                  <div className="f2">
                    <img src= {cctv} height="180" alt="cctv.jpg"/>
                  </div>

                <div className="f3">
                    <h3>Crime & Investigation</h3><br></br>
      
                    <form>   
                      <b><input className="pure-menu-heading pure-menu-link" onClick={() => history.push('/SearchWeapons')} type="submit" value="Search Here"  /></b>
                      <br></br>
                      <b><input className="pure-menu-heading pure-menu-link" onClick={() => history.push('/ViewAllData')} type="submit" value="View All Data"  /></b>
                      <br></br>
                      <b><input className="pure-menu-heading pure-menu-link" onClick={() => history.push('/ScanData')} type="submit" value="Scan Data"  /></b>
                    </form>
                  </div>

                  
                 

            </div>
          );
       
    }
}

export default Home;