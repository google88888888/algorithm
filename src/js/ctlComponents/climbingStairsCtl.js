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
        function * test(){
            let var1=1;
            yield var1+10;
            let var2=2;
            yield let var3=var2+var1+10;
            yield var3;
        }
        let g1=test();
        console.log(g1.next());
        console.log(g1.next());
        console.log(g1.next());
        console.log(g1.next());
        console.log(g1.next());


        // self.setState({
        //     output:count,
        // })
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



