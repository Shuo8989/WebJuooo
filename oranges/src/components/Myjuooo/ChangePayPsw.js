import React from 'react';
import {NavLink,withRouter} from "react-router-dom";
import Topscoll from '../punlic/Topscoll'
import '../../assets/myjuooo/css/ChangePayPsw.css'
class ChangePayPsw extends React.Component{
    render(){
        return(
            <div>

                <Topscoll msg={"修改支付密码"} dis={"none"}></Topscoll>
                
        
                <div className={"ChangePP_top"}>
                    <span className={"Change_PP_top_left"}>1.验证手机</span>
                    <span className={"Change_PP_top_center"}>{">"}</span>
                    <span>2.设置密码</span>
                </div>
                <div className={"Change_PP_bottom"}>
                    <div className={"Change_PP_bottom_tab"}>
                        <p className={"Change_pbt_t"}>18610908289</p>
                        <p className={"Change_pbt_b  Change_pbt_t"}>
                            <input type="text" placeholder={"请输入验证码"}/>
                            <span className={"Change_pbtb_but"}>获取验证码</span>
                        </p>
                    </div>
                    <div className={"changLoginPSW_btn"}>下一步</div>
                </div>
            </div>
        )
    }
}
export default withRouter(ChangePayPsw)