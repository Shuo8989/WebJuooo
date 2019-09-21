import React from 'react';
import {NavLink,withRouter} from "react-router-dom";
import Topscoll from '../punlic/Topscoll'
import '../../assets/myjuooo/css/CouponExchange.css'

class CouponExchange extends React.Component{
    render(){
        return(
            <div className={" CouponExchange"}>
                <Topscoll msg={"优惠券"} dis={"none"}></Topscoll>
                <div className={"CouponExchange_box"}>
                    <input type="text" placeholder="优惠券码"/>
                    <span>兑换</span>
                </div>
                <p>
                    <span className={"CouponExchange_tipso"}>0张未使用</span>
                    <span className={"CouponExchange_tipst"}>优惠券规则说明</span>
                </p>
                <div className={"CouponExchange_bottom"}>查看已过期优惠券></div>
            </div>
        )
    }
}
export default withRouter(CouponExchange)