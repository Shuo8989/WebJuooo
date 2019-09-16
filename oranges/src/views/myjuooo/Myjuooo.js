//我的
import React from 'react'
import {
    NavLink,
    withRouter
} from 'react-router-dom';
import '../../assets/myjuooo/css/myjuooo.css'

import Mysecurity from '../../components/Myjuooo/Mysecurity'


class Myjuooo extends React.Component{
    render(){
        return(
            <div className={'myjuooo'}>
                <div className={'myjuooo_top'}>
                    <NavLink className={'myjuooo-set'} activeStyle={{color:"red"}} exact to={"/Myjuooo/mysecurity"}  >设置</NavLink>
                    <div className={'myjuooo-me'}>
                        <div className="myjuooo-mypic"></div>
                    </div>
                </div>

                <p><NavLink activeStyle={{color:"red"}} exact to={"/Myjuooo/mymoney"}  >账户余额</NavLink></p>
                <p><NavLink activeStyle={{color:"red"}} exact to={"/Myjuooo/myintegral"}  >积分</NavLink></p>
                <p><NavLink activeStyle={{color:"red"}} exact to={"/Myjuooo/couponExchange"}  >优惠券</NavLink></p>
                <p><NavLink activeStyle={{color:"red"}} exact to={"/my/myOrderList"}  >我的订单</NavLink></p>
                <p><NavLink activeStyle={{color:"red"}} exact to={"/eticket/list"}  >我的票夹</NavLink></p>
                <p><NavLink activeStyle={{color:"red"}} exact to={"/Cardproduct/index"}  >我的卡包</NavLink></p>
                <p><NavLink activeStyle={{color:"red"}} exact to={"/Myjuooo/myRealNameCertification"}  >实名购票人</NavLink></p>
                <p><NavLink activeStyle={{color:"red"}} exact to={"/myjuooo/myaddress"}  >收货地址</NavLink></p>
                <p><NavLink activeStyle={{color:"red"}} exact to={"/feedback/index"}  >意见反馈</NavLink></p>
                <p>在线客服</p>
            </div>
        )
    }
}
export default withRouter(Myjuooo)



