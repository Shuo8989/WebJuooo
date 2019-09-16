import React from 'react';
import {NavLink,withRouter} from "react-router-dom";

class Feedback extends React.Component{
    render(){
        return(
            <div>
                <p onClick={()=>{this.props.history.goBack()}}>{"<"}</p>
                我是意见反馈
            </div>
        )
    }
}
export default withRouter(Feedback)