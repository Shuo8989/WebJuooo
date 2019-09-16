import React from 'react';
import {NavLink,withRouter} from "react-router-dom";

class Myaddress extends React.Component{
    render(){
        return(
            <div>
                <p onClick={()=>{this.props.history.goBack()}}>{"<"}</p>
                我是收货地址
            </div>
        )
    }
}
export default withRouter(Myaddress)