import React from 'react';
import {NavLink,withRouter} from "react-router-dom";
<<<<<<< HEAD
import Topscoll from '../punlic/Topscoll'
import '../../assets/myjuooo/css/CouponExchange.css'
=======
>>>>>>> 0890166a1168576e6c26aaceedcfac5fc9dd98ec

class CouponExchange extends React.Component{
    render(){
        return(
<<<<<<< HEAD
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
=======
            <div>
                <p onClick={()=>{this.props.history.goBack()}}>{"<"}</p>
                我是优惠券
>>>>>>> 0890166a1168576e6c26aaceedcfac5fc9dd98ec
            </div>
        )
    }
}
export default withRouter(CouponExchange)