import React, { Component } from "react";
import '../css/oswald.css'
import '../css/open-sans.css'
import '../css/pure-min.css'
import WeaponData from "../contracts/WeaponData.json";
import { Container, Row, Col } from 'reactstrap';
class SearchWeapons extends Component{

    constructor(props){
        super(props);
        
    this.state = {value: ''};
 

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    }

    getWeaponDataInst(address){
        const instance = new this.props.web3.eth.Contract(WeaponData.abi, address);
        return instance;
    }

    loadWeaponData(){
        let dataArr = [];
        try {
            this.props.contract.methods.returnAllData().call({from: this.props.accounts[0]}).then(
                (weaponDataList) => {
                    console.log(weaponDataList);
                    weaponDataList.forEach((weaponData) =>{
                        // setTimeout(()=>{
                            const weaponInst = this.getWeaponDataInst(weaponData);
                            weaponInst.methods.getDetailsResearcher().call().then(
                                (data) => {
                                    console.log(data);
                                    dataArr.push(data);
                                }
                            )
                            
                        // })
                    });
                    setTimeout(()=>{
                        this.setState({
                            allData : dataArr,
                            isLoading : false
                        });
                    }, 1500);                    
                } 
            ).then( async() =>{
                this.setState({allData : dataArr});
            });
        }catch (error) {
            alert(
              `WeaponData not called`,
            );
        }
        console.log("Weapon Data Loaded");
    }

    handleChange(event) 
    {    
      this.setState({value: event.target.value});  
    }
    
    handleSubmit(event) 
    {
      event.preventDefault();
    }

    componentDidMount(){
        this.loadWeaponData();
    }
    render(){

        const displayData = this.state.isLoading === false ? (
            this.state.allData !==null ? (this.state.allData.map((k) => {
                                    console.log(k.Hash)
                                    console.log(k.Date)
                    if(k.Date==this.state.value)
                    {
                        return(
                          
                            <Container className="hover-decoration">
                               <Row className="align-items-center">
                                   <Col>
                                        <h2>Data Fetched</h2>
                                        <img src={`https://ipfs.io/ipfs/${k.Hash}`} width ="500" height="400" alt=""/>
                                        <p>Date: {k.Date}</p> 
                                        <p>Time: {k.Time}</p>
                                   </Col>
                               </Row>
                               <hr/>
                            </Container>
                        );
                        
                    }
                    else
                    console.log('sorry, error')
                 }
         )): (<div> No Data Available </div>) ) : (<div><br></br> Loading... </div>)

        return(
            
            <div className="SearchWeapons">
              <div>
              <nav className="navbar pure-menu pure-menu-horizontal">
                <a href="#" className="pure-menu-heading pure-menu-link">PRIVACY PRESERVING CCTV SURVEILLANCE USING BLOCKCHAIN AND HOMOMORPHIC ENCRYPTION SCHEMES</a>
              </nav>
      
              <nav className="navbarr pure-menu pure-menu-horizontal">
                <h2>WEAPON DETECTION</h2>
                </nav>

                  <br></br><br></br><br></br><br></br><br></br><br></br>
                  <div className="sf3">
                    <h3>Crime & Investigation</h3>

                    <form onSubmit={this.handleSubmit}>
                        <input className="sformb"   placeholder="Date [DD/MM/YYYY]" type="text" value={this.state.value} onChange={this.handleChange} />
                    </form>
                  </div>
                        {displayData}
                  </div>
                </div>
             
        );
    }
}

export default SearchWeapons;