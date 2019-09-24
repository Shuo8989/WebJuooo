import React from 'react';
import {withRouter} from "react-router-dom";
import Topscoll from '../punlic/Topscoll'
import '../../assets/myjuooo/css/Feedback.css'

class Feedback extends React.Component{
    render(){
        return(
            <div className={"Feedback_bg"}>
                <Topscoll msg={"意见反馈"} dis={"block"}></Topscoll>
                <div className={"Feedback_top"}>
                    <textarea placeholder={"请输入您的问题或建议，我们将不断改进"}></textarea>
                </div>
                <div className={"Feedback_phone"}>
                    <input type="text" placeholder={"请输入有效的手机号"} value="18610908289"/>
                </div>
                <div className={"Feedback_phone Feedback_address"}>
                    <input type="text" placeholder={"*选择你所在的城市"}/>
                </div>
                <div className={"Mysecuiity_btn"}>提交</div>
            </div>
        )
    }
}
export default withRouter(Feedback)