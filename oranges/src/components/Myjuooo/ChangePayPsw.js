import React from 'react';
import {NavLink,withRouter} from "react-router-dom";
import MyjuoooTop from './MyjuoooTop'

class ChangePayPsw extends React.Component{
    render(){
        return(
            <div>
                <MyjuoooTop msg={"修改支付密码"} dis={"none"}></MyjuoooTop>
                我是支付密码
            </div>
        )
    }
}
export default withRouter(ChangePayPsw)