import React from 'react';
import {NavLink,withRouter} from "react-router-dom";

class MyOrderList extends React.Component{
    render(){
        return(
            <div>
                <p onClick={()=>{this.props.history.goBack()}}>{"<"}</p>
                我是订单
            </div>
        )
    }
}
export default withRouter(MyOrderList)