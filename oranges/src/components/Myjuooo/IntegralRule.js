import React from 'react';
import {NavLink,withRouter} from "react-router-dom";
import Topscoll from '../punlic/Topscoll'
import '../../assets/myjuooo/css/Myintegral.css'

class IntegralRule extends React.Component{
    render(){
        return(
            <div>
                <Topscoll msg={"积分规则"} dis={"block"}></Topscoll>
                <div className={"IntegralRule_box"}>
                    <p>会员在聚橙网获得的积分，可用于积分换购，会员可通过以下几种渠道获取积分:</p>
                <div>
                    <p>1.消费积分</p>
                    <p>消费10元获得1个积分，每日无上限(配送费用不送积分)。</p>
                    <p>2.验证邮箱</p>
                    <p>采用邮箱验证可获得10个积分。</p>
                    <p>3.绑定手机</p>
                    <p>没有用手机注册的用户，绑定手机可获得50积分。</p>
                    <p>4.上传头像</p>
                    <p>用户首次.上传头像可获得5个积分(只有首次可赠送积分)。</p>
                    <p>5.完善资料</p>
                    <p>用户完善个人资料可获得50个积分(需填写真实姓名、性别、出生日期、演出爱好等信息)。</p>
                    <p>6.发表剧评</p>
                    <p>发表一条剧评可获得1个积分(每日上限50个积分)。</p>
                    <p>7.剧评加精</p>
                    <p>用户剧评加精可获得5个积分(按加精条数计算，一 条5分， 二条10分)。</p>
                    <p>8.橙友日消费</p>
                    <p>每月22号消费10元可获得2个积分，当日积分无上限(橙友日消费得双倍积分，以下单日期为准)。</p>
                    <p>9.新用户注册</p>
                    <p>注册可获得20个积分(若用手机注册， 默认绑定用户手机号)。</p>
                </div>
                    <p>注意事项:</p>
                    <p>1)购买欢聚橙卡符合消费积分，可获得积分;</p>
                    <p>2)欢聚橙卡支付的订单不能获得积分。</p>
                </div>
            </div>
        )
    }
}
export default withRouter(IntegralRule)


