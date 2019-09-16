import React from 'react';
import {NavLink,withRouter} from "react-router-dom";

class MyRealName extends React.Component{
    render(){
        return(
            <div>
                <p onClick={()=>{this.props.history.goBack()}}>{"<"}</p>
                我是实名认证
            </div>
        )
    }
}
export default withRouter(MyRealName)