import React from 'react';
import {NavLink,withRouter} from "react-router-dom";
import Topscoll from '../punlic/Topscoll'
import { Icon } from 'antd';
import '../../assets/myjuooo/css/ChangeLoginPsw.css'
class ChangeLoginPsw extends React.Component{
    render(){
        return(
            <div>
                <Topscoll msg={"修改登录密码"} dis={"none"}></Topscoll>
                <p className={"changLoginPSW_tit"}>为保障您的账户安全，修改前请先验证原密码</p>
                <p className={"changLoginPSW_inp"}>
                    <Icon type="shopping" className={"changLoginPSW_ico"}/>
                    <input  type={"text"} placeholder={"输入当前密码"}/>
                </p>
                <div className={"changLoginPSW_btn"}>下一步</div>
            </div>
        )
    }
}
export default withRouter(ChangeLoginPsw)