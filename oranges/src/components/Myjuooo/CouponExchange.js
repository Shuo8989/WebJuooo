import React from 'react';
import {NavLink,withRouter} from "react-router-dom";

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