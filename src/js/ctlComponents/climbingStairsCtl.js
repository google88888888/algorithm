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
            output:'output123'
        };
    }
    componentDidMount() {
        let self=this;  
    }
    render() {
        const {output} = this.state;

        return (
            <div className="global-div-climbingStairsCtl" >
                {output}
            </div>
            
        )
    }
}


export default Form.create()(climbingStairsCtl);



