import React from 'react';
import {withRouter} from "react-router-dom";
import Topscoll from '../punlic/Topscoll'
import '../../assets/myjuooo/css/CouponExchange.css'

class CouponExchange extends React.Component{
    render(){
        return(
            <div>
                <p onClick={()=>{this.props.history.goBack()}}>{"<"}</p>
                我是优惠券
            </div>
        )
    }
}
export default withRouter(CouponExchange)