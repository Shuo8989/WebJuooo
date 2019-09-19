//我的
import React from 'react'
import { Icon } from 'antd'
import {
    NavLink,
    withRouter
} from 'react-router-dom';
import '../../assets/myjuooo/css/myjuooo.css'
import MyjuoooMine from '../../components/Myjuooo/MyjuoooMine'
import MyjuoooMy from '../../components/Myjuooo/MyjuoooMy'
import myjuooovippic from '../../assets/myjuooo/img/myjuooo_vip.png'
import order from '../../assets/myjuooo/img/Myjuooo_order.png'
import ticketholder from '../../assets/myjuooo/img/Myjuooo_ticketholder.png'
import cardpackage from '../../assets/myjuooo/img/Myjuooo_cardpackage.png'
import people from '../../assets/myjuooo/img/Myjuooo_people.png'
import address from '../../assets/myjuooo/img/Myjuooo_address.png'
import feedback from '../../assets/myjuooo/img/Myjuooo_feedback.png'
import help from '../../assets/myjuooo/img/Myjuooo_help.png'

class Myjuooo extends React.Component{
    render(){
        return(
            <div className={'myjuooo'}>
                {/*头部*/}
                <div className={'myjuooo_top'}>
                    {/*设置*/}
                    <NavLink className={'myjuooo_set'} activeStyle={{color:"red"}} exact to={"/Myjuooo/mysecurity"}  ><Icon type="setting" /></NavLink>
                    {/*大白块*/}
                    <div className={'myjuooo_me'}>
                        {/*头像及信息部分*/}
                        <div className={"myjuooo_metop"}>
                            <div  className="myjuooo_mypic" ></div>
                            <span className="myjuooo_myname">橙子</span>
                            <span className="myjuooo_myid">ID:123</span>
                        </div>
                        {/*会员*/}
                        <span className={"myjuooo_myvip"}>普通会员</span>
                        {/*四小块*/}
                        <div className="myjuooo_bottom">
                            <MyjuoooMine  to={"/Myjuooo/mymoney"} msg={"账户余额"} ></MyjuoooMine>
                            <span className="myjuooo_btm_rline"></span>
                            <MyjuoooMine  to={"/Myjuooo/myintegral"} msg={"积分"} ></MyjuoooMine>
                            <span className="myjuooo_btm_rline"></span>
                            <MyjuoooMine  to={"/Myjuooo/couponExchange"} msg={"优惠券"} ></MyjuoooMine>
                            <span className="myjuooo_btm_rline"></span>
                            <div className="myjuooo_btm_msg">
                                <p className="myjuooo_btm_opennow">立即开通</p>
                                <p>橙PLUS卡</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/*VIP*/}
                <div className="myjuooo_vip">
                    <img src={myjuooovippic} />
                </div>
                {/*我的功能*/}
                <div className="myjuooo_mine_box">
                    <MyjuoooMy src={order} msg={"我的订单"} to={"/my/myOrderList"}></MyjuoooMy>
                    <MyjuoooMy src={ticketholder} msg={"我的票夹"} to={"/eticket/list"}></MyjuoooMy>
                    <MyjuoooMy src={cardpackage} msg={"我的卡包"} to={"/Cardproduct/index"} ></MyjuoooMy>
                    <div className="myjuooo_my"></div>
                </div>

                <div className="myjuooo_mine_box">
                    <MyjuoooMy src={people} msg={"实名购票人"} to={"/Myjuooo/myRealNameCertification"}></MyjuoooMy>
                    <MyjuoooMy src={address} msg={"收货地址"} to={"/myjuooo/myaddress"}></MyjuoooMy>
                    <MyjuoooMy src={feedback} msg={"意见反馈"} to={"/feedback/index"} ></MyjuoooMy>
                    <div className="myjuooo_my">
                        <img src={help}/>
                        <div className="myjuooo_my_msg">在线客服</div>
                    </div>
                </div>
            </div>
        )
    }
}
export default withRouter(Myjuooo)



