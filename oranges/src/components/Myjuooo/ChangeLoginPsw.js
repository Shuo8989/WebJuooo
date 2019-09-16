import React from 'react';
import {NavLink,withRouter} from "react-router-dom";

class ChangeLoginPsw extends React.Component{
    render(){
        return(
            <div>
                <p onClick={()=>{this.props.history.goBack()}}>{"<"}</p>
                我是修改密码
            </div>
        )
    }
}
export default withRouter(ChangeLoginPsw)