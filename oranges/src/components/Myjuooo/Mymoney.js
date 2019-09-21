import React from 'react';
import {NavLink,withRouter} from "react-router-dom";
import MyjuoooTop from './MyjuoooTop';
import '../../assets/myjuooo/css/Mymoney.css'

class Mymoney extends React.Component{
    render(){
        return(
            <div>
                <MyjuoooTop msg={"我的余额"} dis={"block"}></MyjuoooTop>
                <div className={"Mymoney_top"}>
                    <p className={"Mymoney_yuan"}>账户余额(元)</p>
                    <p className={"Mymoney_num"}>0.00</p>
                </div>
                <div className={"Mymoney_center"}>余额明细</div>
                <div className={"Mymoney_but"}>
                    <div className={"Mymoney_no"}>没有消息记录</div>
                </div>
            </div>
        )
    }
}
export default withRouter(Mymoney)