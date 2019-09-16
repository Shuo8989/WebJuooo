import React from 'react';
import {NavLink,withRouter} from "react-router-dom";
// 如果使用createBrowserHistory
// // import {createBrowserHistory} from 'history'
// import creatHistory from 'history/createBrowserHistory'
// const history = creatHistory();
class Mysecurity extends React.Component{
    render(){


        return(
            <div>
                <p onClick={()=>{this.props.history.goBack()}}>{"<"}</p>
                <p>我是设置</p>

                <p><NavLink activeStyle={{color:"red"}} exact to={"/Myjuooo/changeLoginPsw"}  >修改密码</NavLink></p>
                <p><NavLink activeStyle={{color:"red"}} exact to={"/Myjuooo/payPsw/type/set"}  >支付密码</NavLink></p>
                <p><NavLink activeStyle={{color:"red"}} exact to={"/Myjuooo/myRealNameCertification"}  >实名认证</NavLink></p>
                <p><NavLink activeStyle={{color:"red"}} exact to={"/passport/login"}  >退出登录</NavLink></p>


            </div>
        )
    }
}
export default withRouter(Mysecurity)

