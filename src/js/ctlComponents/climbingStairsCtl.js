import React from 'react';

import {Popover, Form, Button,Switch,Icon,message,Input, Checkbox,Row,Tree,Radio  ,Select,Spin,Tooltip ,Table,Modal } from 'antd';

import {RequestApi,RequestApiForEmptyResponse,UnixToDate,urlEncode,formatNum,isPositiveInteger} from "../../libs/util";     
import '../../css/ctlComponents/climbingStairsCtl.css';
import '../../libs/common.css';

import * as mock from "../../libs/mockData";
import $ from 'jquery';

const { TextArea } = Input;
const RadioGroup = Radio.Group;
const Option = Select.Option;
const FormItem = Form.Item;
const {Component} = React;

class climbingStairsCtl extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    
    componentDidMount() {
        let self=this;  
    }
    render() {
        const {} = this.state;
        const {isProd,screenAvailWidth} = this.props;
        const { getFieldDecorator } = this.props.form;
        let self = this;

        return (
            <div className="global-div-climbingStairsCtl" style={{width:screenAvailWidth+"px"}}  >
            </div>
            
        )
    }
}


export default Form.create()(climbingStairsCtl);



