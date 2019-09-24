import React from 'react';
<<<<<<< HEAD
import {withRouter} from "react-router-dom";
import Topscoll from '../punlic/Topscoll'
import '../../assets/myjuooo/css/MyRealName.css'
=======
import {NavLink,withRouter} from "react-router-dom";
>>>>>>> 3906d4851a9ed10668e99ac509a352d0954cdf62

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