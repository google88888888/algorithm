
import React from 'react';
import ReactDOM from 'react-dom';
import { LocaleProvider } from 'antd';
import {  } from 'antd';
import '../css/index.css';
import $ from 'jquery';
import ClimbingStairsCtl from './ctlComponents/climbingStairsCtl';
const {Component} = React;

class App extends Component {
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
        return (
            <div className="app-div-index">
                <ClimbingStairsCtl />
            </div>

        );
    }
}

ReactDOM.render(
    
        <App/>
    
    ,document.getElementById('root')
);
