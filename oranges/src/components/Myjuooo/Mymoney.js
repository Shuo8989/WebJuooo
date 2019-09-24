import React from 'react';
import {withRouter} from "react-router-dom";
import Topscoll from '../punlic/Topscoll'
import '../../assets/myjuooo/css/Mymoney.css'


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