import React, { Component } from "react";
import WeaponData from "../contracts/WeaponData.json";
import { Container, Row, Col } from 'reactstrap';
class ViewAllData extends Component{

    constructor(props){
        super(props);
        this.state = {
            isLoading: true,
        }
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
                            const weaponInst = this.getWeaponDataInst(weaponData);
                            weaponInst.methods.getDetailsResearcher().call().then(
                                (data) => {
                                    console.log(data);
                                    dataArr.push(data);
                                }
                            )
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

    componentDidMount(){
        this.loadWeaponData();
    }
    render(){

        const displayData = this.state.isLoading === false ? (
            this.state.allData !==null ? (this.state.allData.map((k) => {
                                    console.log(k.Hash)
                                    console.log(k.Date)
                     return(
                         <Container className="hover-decoration">
                            <Row className="align-items-center">
                                <Col>
                                    <p>{k.title}</p>
                                    <img src={`https://ipfs.io/ipfs/${k.Hash}`}  width ="500" height="400" alt=""/>
                                    <p>Date: {k.Date}</p> 
                                    <p>Time: {k.Time}</p>
                                </Col>
                            </Row>
                            <hr/>
                         </Container>
                     );
                 }
         )): (<div> No Data Available </div>) ) : (<div> Loading... </div>)

        return(
            
            <div className="ViewAllData">
                <Container>
                    <Row>
                        <h1>View Data</h1>
                        {displayData}
                    </Row>
                </Container>

            </div>
        );
    }
}

export default ViewAllData;