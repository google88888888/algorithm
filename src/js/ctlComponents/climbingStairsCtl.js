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
            output:false,
        };
    }
    
    componentDidMount() {
        let self=this;  
        
        var A=[1, 2, 3, 4];

        //var A=[1,2,3,8,9,10];
        // fromToIsArray=[
        //     [0,1,1,null,0,0],
        //     [0,0,1,null,0,0],
        //     [0,0,0,5,null,0],
        //     [0,0,0,0,1,1],
        //     [0,0,0,0,0,1],
        //     [0,0,0,0,0,0],
        // ]

        //var A=[1, 2, 3, 4];
        // fromToIsArray=[
        //     [0,1,1,1],
        //     [0,0,1,1],
        // ]

        var fromToIsArray=[];
        for(var i=0;i<A.length-2;i++){
            fromToIsArray.push([])
        }
        for(var j=0;j<A.length-2;j++){
            fromToIsArray[j][j+1]=A[j+1]-A[j]
        }
        for(var row=0;row<A.length-2;row++){
            for(var col=row+2;col<A.length;col++){
                if(fromToIsArray[row][col-1]==(A[col]-A[col-1])){
                    fromToIsArray[row][col]=fromToIsArray[row][col-1];
                }else{
                    fromToIsArray[row][col]=undefined;
                }
            }
        }
        var count=0;
        for(var row=0;row<A.length-2;row++){
            var colLast=undefined;
            for(var col=row+2;col<A.length;col++){
                if(fromToIsArray[row][col]==undefined&&col==row+2){
                    break;
                }else
                if(fromToIsArray[row][col]==undefined){
                    colLast=col-1;
                    break;
                }else{
                    colLast=col;
                }
            }
            if(colLast!=undefined){
                var n=colLast-row+1;
                count=count+((n-2)+(n-2)*(n-3)/2);
            }
        }

        console.log(fromToIsArray);

        self.setState({
            output:count,
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



