
import React from 'react';
import ReactDOM from 'react-dom';
import { LocaleProvider } from 'antd';
import { Tabs,message ,Button,Tree } from 'antd';

import '../css/index.css';
import Util from "../libs/util";
import $ from 'jquery';

import * as mock from "../libs/mockData";
import ClimbingStairsCtl from './ctlComponents/climbingStairsCtl';

import en_GB from 'antd/lib/locale-provider/en_GB';
import de_DE from 'antd/lib/locale-provider/de_DE';
import es_ES from 'antd/lib/locale-provider/es_ES';
import fr_FR from 'antd/lib/locale-provider/fr_FR';
import it_IT from 'antd/lib/locale-provider/it_IT';
import ja_JP from 'antd/lib/locale-provider/ja_JP';
import ko_KR from 'antd/lib/locale-provider/ko_KR';
import pt_PT from 'antd/lib/locale-provider/pt_PT';
import zh_CN from 'antd/lib/locale-provider/zh_CN';

const TreeNode = Tree.TreeNode;
const {Component} = React;
const TabPane = Tabs.TabPane;
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isProd:false,
            i18n:{},
            show:"climbingStairsCtl",
            screenAvailWidth:null,

        };
    }

    componentDidMount() {
        let self=this;
        self.getRightI18n();
        $(window.parent.window).resize(function() {
            self.fitScreenWidth();
        });
    }

    fitScreenWidth= () => {
        let self = this;

        if(self.state.isProd===true){
        }else{
            self.setState({
                screenAvailWidth:800,
            })
        }


    }

    getRightI18n= () => {
        let self=this;
        let localeFor=window.localStorage.getItem('localeFor');
        let rightI18n;
        if(localeFor==="de"){
            rightI18n=de_DE;
        }else
        if(localeFor==="es"){
            rightI18n=es_ES;
        }else
        if(localeFor==="fr"){
            rightI18n=fr_FR;
        }else
        if(localeFor==="it"){
            rightI18n=it_IT;
        }else
        if(localeFor==="ja"){
            rightI18n=ja_JP;
        }else
        if(localeFor==="ko"){
            rightI18n=ko_KR;
        }else
        if(localeFor==="pt"){
            rightI18n=pt_PT;
        }else
        if(localeFor==="zh"){
            rightI18n=zh_CN;
        }else{
            rightI18n=en_GB;
        }
        self.setState({
            i18n : rightI18n,
        },function(){
            self.fitScreenWidth();
        })

    }

    changeTabs(show){
        let self=this;
        self.setState({
            show:show,
        })
    }

    render() {
        const {i18n,show,isProd,screenAvailWidth} = this.state;
        let self=this;
        let contentHtml;
        if(show==="climbingStairsCtl"){
            contentHtml=<div>
                <ClimbingStairsCtl 
                    changeTabs={self.changeTabs.bind(self)} 
                    isProd={isProd}
                    screenAvailWidth={screenAvailWidth}
                />
            </div>
        }

        return (
            <div className="app-div-index">
                <LocaleProvider locale={i18n}>
                    {contentHtml}
                </LocaleProvider>
            </div>

        );
    }
}

ReactDOM.render(
    
        <App/>
    
    ,document.getElementById('root')
);
