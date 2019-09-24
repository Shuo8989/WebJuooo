import React from 'react';
import {NavLink,withRouter} from "react-router-dom";
import MyjuoooTop from './MyjuoooTop'
import { Icon } from 'antd';
import '../../assets/myjuooo/css/Mysecurity.css'
import mypic from '../../assets/myjuooo/img/myjuooo-mypic.png'
// 如果使用createBrowserHistory
// // import {createBrowserHistory} from 'history'
// import creatHistory from 'history/createBrowserHistory'
// const history = creatHistory();
class Mysecurity extends React.Component{
    render(){


        return(
            <div>
                <MyjuoooTop msg={"账户设置"} dis={"block"}></MyjuoooTop>
                {/*设置*/}

                <div className={"Mysecurity_mymsg"}>
                    {/*我的信息*/}
                    <div className={"Mysecurity_mypic"}>
                        <span>头像</span>
                        <img src={mypic}/>
                    </div>
                    <div className={"Mysecurity_myname"}>
                        <span>昵称</span>
                    </div>
                </div>

                <div className={"Mysecurity_myset"}>
                    {/*支付信息*/}
                    <div className={"Mysecurity_myname Mysecurity_mine"}>
                        <span>手机号</span>
                        <span style={{color:"#999999",fontSize:"12px"}}>186****8289</span>
                    </div>
                    <div className={"Mysecurity_myname Mysecurity_mine"}>
                        <span>邮箱</span>
                        <span></span>
                    </div>
                    <div className={"Mysecurity_myname Mysecurity_mine"}>
                        <span>生日信息&nbsp;&nbsp;<i style={{color:"#cccccc",fontSize:"11px"}}>(只允许设置一次)</i></span>
                        <span style={{color:"#999999",fontSize:"0.256rem"}}>去完善<Icon type="right" style={{color:"#d8d8d8"}} /></span>
                    </div>
                    <div className={"Mysecurity_myname Mysecurity_mine"}>
                        <span>登录密码&nbsp;&nbsp;</span>
                        <NavLink to={"/Myjuooo/changeLoginPsw"} style={{color:"#999999",fontSize:"0.256rem"}} >修改<Icon type="right" style={{color:"#d8d8d8"}} /></NavLink>
                    </div>
                    <div className={"Mysecurity_myname Mysecurity_mine"}>
                        <span>支付密码&nbsp;&nbsp;</span>
                        <NavLink to={"/Myjuooo/payPsw/type/set"} style={{color:"#999999",fontSize:"0.256rem"}} >设置<Icon type="right"  style={{color:"#d8d8d8"}}/></NavLink>
                    </div>
                    <div className={"Mysecurity_myname Mysecurity_mine"}>
                        <span>实名认证&nbsp;&nbsp;</span>
                        <NavLink to={"/Myjuooo/myRealNameCertification"} style={{color:"#999999",fontSize:"0.256rem"}} >未认证<Icon type="right" style={{color:"#d8d8d8"}} /></NavLink>
                    </div>
                </div>
                {/*按钮*/}
                <div className={"Mysecuiity_btn"}>
                    <NavLink to={"/passport/login"}  >退出登录</NavLink>
                </div>

            </div>
        )
    }
}
export default withRouter(Mysecurity)

