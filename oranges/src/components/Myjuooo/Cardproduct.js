import React from 'react';
import {NavLink,withRouter} from "react-router-dom";

class Cardproduct extends React.Component{
    render(){
        return(
            <div>
                <p onClick={()=>{this.props.history.goBack()}}>{"<"}</p>
                我是卡包
            </div>
        )
    }
}
export default withRouter(Cardproduct)