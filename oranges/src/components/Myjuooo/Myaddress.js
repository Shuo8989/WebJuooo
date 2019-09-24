import React from 'react';
import {withRouter} from "react-router-dom";
import Topscoll from "./Myaddress";

import '../../assets/myjuooo/css/Myaddress.css'
import MyaddressAdd from './MyaddressAdd'

class Myaddress extends React.Component{
    constructor(){
        super();
        this.state={
            isShow : false
        }
    }
    render(){
        return(
            <div className={"Myaddress_box"}>
                {/*<Topscoll msg={"收货地址"} dis={"block"}></Topscoll>*/}
                {
                    this.state.isShow?<MyaddressAdd click={this.click.bind(this)}></MyaddressAdd>:this.list()
                }
            </div>
        )
    }
    list(){
        return(
            <div className={"Myaddress_nolistbg"}>
                {/*<Topscoll msg={"收货地址"} dis={"block"}></Topscoll>*/}
                <div className={"Myaddress_nolist"}>暂时没有收获地址</div>
                <div className={"Myaddress_btnbox"}>
                    <div className={"Myaddress_btn"} onClick={this.click.bind(this)}>+添加收货地址</div>
                </div>
            </div>
        )
    }
    click(){
        this.setState({
            isShow:!this.state.isShow
        })
        console.log(this.state.isShow)
    }
}
export default withRouter(Myaddress)