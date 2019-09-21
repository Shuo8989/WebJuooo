import React from 'react';
import {NavLink,withRouter} from "react-router-dom";
<<<<<<< HEAD
import Topscoll from '../punlic/Topscoll'
import '../../assets/myjuooo/css/Myintegral.css'
=======
>>>>>>> 0890166a1168576e6c26aaceedcfac5fc9dd98ec

class Myintegral extends React.Component{
    render(){
        return(
            <div>
<<<<<<< HEAD
                <Topscoll msg={"我的积分"} dis={"block"}></Topscoll>
                <div className={"Myintegral_top"}>
                    <NavLink to={"/Myjuooo/integralRule"}><span>积分规则</span></NavLink>
                    <p className={"Myintegral_yuan"}>可用积分</p>
                    <p className={"Myintegral_num"}>0</p>
                    <NavLink to={"/Scores/index"}><p className={"Myintegral_scoreshop"}>积分商城</p></NavLink>
                </div>
                <div className={"Myintegral_center"}>积分明细</div>
                <div className={"Myintegral_but"}>
                    <div className={"Myintegral_no"}>没有消息记录</div>
                </div>
=======
                <p onClick={()=>{this.props.history.goBack()}}>{"<"}</p>
                我是积分
>>>>>>> 0890166a1168576e6c26aaceedcfac5fc9dd98ec
            </div>
        )
    }
}
export default withRouter(Myintegral)