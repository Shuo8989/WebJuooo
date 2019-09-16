import React from 'react';
import {NavLink,withRouter} from "react-router-dom";

class Mymoney extends React.Component{
    render(){
        return(
            <div>
                <p onClick={()=>{this.props.history.goBack()}}>{"<"}</p>
                我是余额
            </div>
        )
    }
}
export default withRouter(Mymoney)