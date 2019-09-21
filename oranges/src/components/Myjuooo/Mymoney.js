import React from 'react';
import {NavLink,withRouter} from "react-router-dom";
<<<<<<< HEAD
import Topscoll from '../punlic/Topscoll'
import '../../assets/myjuooo/css/Mymoney.css'
=======
>>>>>>> 0890166a1168576e6c26aaceedcfac5fc9dd98ec

class Mymoney extends React.Component{
    render(){
        return(
            <div>
<<<<<<< HEAD
                <Topscoll msg={"我的余额"} dis={"block"}></Topscoll>
                <div className={"Mymoney_top"}>
                    <p className={"Mymoney_yuan"}>账户余额(元)</p>
                    <p className={"Mymoney_num"}>0.00</p>
                </div>
                <div className={"Mymoney_center"}>余额明细</div>
                <div className={"Mymoney_but"}>
                    <div className={"Mymoney_no"}>没有消息记录</div>
                </div>
=======
                <p onClick={()=>{this.props.history.goBack()}}>{"<"}</p>
                我是余额
>>>>>>> 0890166a1168576e6c26aaceedcfac5fc9dd98ec
            </div>
        )
    }
}
export default withRouter(Mymoney)