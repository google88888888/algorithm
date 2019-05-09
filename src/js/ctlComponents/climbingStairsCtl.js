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
        self.setState({
            output:"44444444444444444444rrrrrrrrrrrrrr"
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



