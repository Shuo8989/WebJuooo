import React from 'react';
import {NavLink,withRouter} from "react-router-dom";
import Topscoll from '../punlic/Topscoll'

class ChangePayPsw extends React.Component{
    render(){
        return(
            <div>
                <Topscoll msg={"修改支付密码"} dis={"none"}></Topscoll>
                我是支付密码
            </div>
        )
    }
}
export default withRouter(ChangePayPsw)