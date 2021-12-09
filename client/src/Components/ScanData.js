import React, { Component } from "react";
import $ from "jquery";
var obj;
class ScanData extends Component{

    constructor(props){
        super(props);
        this.scanData = this.scanData.bind(this);
    }

    scanData(){
       
        
        $.ajax({
            url: 'http://localhost:65432',
            method: 'GET',
            success: function(response) {
                obj=JSON.parse(response)
                console.log(obj);
            }  
          });
            setTimeout(()=>{
                
                var today = new Date();
                var dd = String(today.getDate()).padStart(2, '0');
                var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
                var yyyy = today.getFullYear();
    
                today = dd + '/' + mm + '/' + yyyy;
                console.log(today)
                const d = new Date();
                var today1 = new Date();
                var time = today1.getHours() + ":" + today1.getMinutes() + ":" + today1.getSeconds();
                console.log("SFGHJKL");
                let n = obj.length;
                console.log(n);
                for (let i = 2; i < n; i++) 
                { 
                    this.props.contract.methods.addData(obj[i],today,time).send({from: this.props.accounts[0]})
                }
            }, 1500);
            
            console.log("Done");
          
    }

    componentDidMount = async () => {
        this.scanData()
        
      
    }
    render(){
        return(
            <div className="ScanData">
                <h1>Hello {this.props.accounts[0]}</h1>
                <h1> Scan Data</h1>
            </div>
        );
    }
}

export default ScanData;