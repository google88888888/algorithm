import React from 'react';

import {Popover, Form, Button,Switch,Icon,message,Input, Checkbox,Row,Tree,Radio  ,Select,Spin,Tooltip ,Table,Modal } from 'antd';

import Base64  from 'base-64';
import {RequestApi,RequestApiForEmptyResponse,UnixToDate,urlEncode,formatNum,isPositiveInteger} from "../../libs/util";     
import '../../css/ctlComponents/inventoryCtl.css';
import '../../libs/common.css';

import * as mock from "../../libs/mockData";
import $ from 'jquery';

import {i18nde} from "../../i18n/ctlComponents/nls/de/inventoryCtl";
import {i18nes} from "../../i18n/ctlComponents/nls/es/inventoryCtl";
import {i18nfr} from "../../i18n/ctlComponents/nls/fr/inventoryCtl";
import {i18nit} from "../../i18n/ctlComponents/nls/it/inventoryCtl";
import {i18nja} from "../../i18n/ctlComponents/nls/ja/inventoryCtl";
import {i18nko} from "../../i18n/ctlComponents/nls/ko/inventoryCtl";
import {i18npt} from "../../i18n/ctlComponents/nls/pt/inventoryCtl";
import {i18nzh} from "../../i18n/ctlComponents/nls/zh/inventoryCtl";
import {i18n} from "../../i18n/ctlComponents/nls/inventoryCtl";

const { TextArea } = Input;
const RadioGroup = Radio.Group;
const Option = Select.Option;
const FormItem = Form.Item;
const {Component} = React;

class inventoryCtl extends Component {
    constructor(props) {
        super(props);
        this.state = {
            i18n:{},
            loading : false,
        };

    }
    

    componentDidMount() {
        let self=this;
        self.getRightI18n();
        

    }
    componentWillUnmount() {
    }
    getRightI18n= () => {
        let self=this;
        let localeFor=window.localStorage.getItem('localeFor');
        let rightI18n;
        if(localeFor==="de"){
            rightI18n=i18nde;
        }else
        if(localeFor==="es"){
            rightI18n=i18nes;
        }else
        if(localeFor==="fr"){
            rightI18n=i18nfr;
        }else
        if(localeFor==="it"){
            rightI18n=i18nit;
        }else
        if(localeFor==="ja"){
            rightI18n=i18nja;
        }else
        if(localeFor==="ko"){
            rightI18n=i18nko;
        }else
        if(localeFor==="pt"){
            rightI18n=i18npt;
        }else
        if(localeFor==="zh"){
            rightI18n=i18nzh;
        }else{
            rightI18n=i18n;
        }
        self.setState({
            i18n : rightI18n,
        },function(){

        })

    }



    render() {
        const {loading} = this.state;
        const {isProd,screenAvailWidth} = this.props;
        const { getFieldDecorator } = this.props.form;
        let self = this;
        message.config({
            duration: 10,
        });

        return (
            <div className="global-div-inventoryCtl" id="global-div-inventoryCtl-id" 
                style={{width:screenAvailWidth+"px"}} 
            >
                    <div className="function-div-inventoryCtl" style={{width:screenAvailWidth+"px"}} > 
                        <div className="flex-direction1-div-inventoryCtl" >
                            1
                        </div >
                        <div className="flex-direction2-div-inventoryCtl" >
                            2
                        </div >
                        <div className="flex-direction3-div-inventoryCtl" >
                            3
                        </div >
                        <div className="flex-direction4-div-inventoryCtl" >
                            4
                        </div >
                    </div>
            </div>
            
        )
    }
}


export default Form.create()(inventoryCtl);



