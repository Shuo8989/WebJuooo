import React from 'react';
import {withRouter} from "react-router-dom";
import Topscoll from '../punlic/Topscoll'
import '../../assets/myjuooo/css/MyRealName.css'


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