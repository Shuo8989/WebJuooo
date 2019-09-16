import React from 'react';
import {NavLink,withRouter} from "react-router-dom";

class Myintegral extends React.Component{
    render(){
        return(
            <div>
                <p onClick={()=>{this.props.history.goBack()}}>{"<"}</p>
                我是积分
            </div>
        )
    }
}
export default withRouter(Myintegral)