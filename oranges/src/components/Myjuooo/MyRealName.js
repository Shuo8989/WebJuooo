import React from 'react';
import {NavLink,withRouter} from "react-router-dom";
import Topscoll from '../punlic/Topscoll'
import '../../assets/myjuooo/css/MyRealName.css'

class MyRealName extends React.Component{
    render(){
        return(
            <div>
                <Topscoll msg={"实名认证"} dis={"none"}></Topscoll>
                <div className={"MyRealName_tab"}>
                    <input className={"MyRealName_tab_t"} type="text" placeholder={"*真实姓名"} />
                    <input className={"MyRealName_tab_t MyRealName_tab_b"}type="text" placeholder={"*身份证号码"} />
                </div>
                <div className={"MyRealName_but"}>
                    <p className={"MyRealName_txt"}>实名认证后将不可更改或取消，请谨慎填写</p>
                    <p className={"MyRealName_txt"}>聚橙网将尊重并保护您的隐私</p>
                    <div className={"MyRealName_btn"}>下一步</div>
                </div>
            </div>
        )
    }
}
export default withRouter(MyRealName)