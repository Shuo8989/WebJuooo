import React from 'react';
import {NavLink,withRouter} from "react-router-dom";

class ChangePayPsw extends React.Component{
    render(){
        return(
            <div>
                <p onClick={()=>{this.props.history.goBack()}}>{"<"}</p>
                我是支付密码
            </div>
        )
    }
}
export default withRouter(ChangePayPsw)