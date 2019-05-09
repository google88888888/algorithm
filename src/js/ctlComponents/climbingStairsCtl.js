import React from 'react';

import {Form} from 'antd';

import {} from "../../libs/util";     
import '../../css/ctlComponents/climbingStairsCtl.css';
import '../../libs/common.css';

const {Component} = React;

class climbingStairsCtl extends Component {
    constructor(props) {
        super(props);
        this.state = {
            output:"",
        };
    }
    
    componentDidMount() {
        let self=this;  

        var input=[-2,1,-3,4,-1,2,1,-5,4];

        var a=[];
        for(var i=0;i<input.length;i++){
            a.push([]);
        }

        for(var i=0;i<input.length;i++){
                a[i][i]=input[i]; 
        }
        var max=[0][0];
        for(var i=0;i<input.length;i++){
            for(var j=i+1;j<input.length;j++){
                console.log("11111111111111111111111");
                console.log(a[i][j-1]);
                console.log(input[j]);
                a[i][j]=a[i][j-1]+input[j];
                if(a[i][j]>max){
                    max=a[i][j];
                }
            }
            
        }
        

        self.setState({
            output:max,
        })
    }
    render() {
        const {output} = this.state;
        const {screenAvailWidth} = this.props;

        return (
            <div className="global-div-climbingStairsCtl" style={{width:screenAvailWidth+"px"}}  >
                {output}
            </div>
            
        )
    }
}


export default Form.create()(climbingStairsCtl);



