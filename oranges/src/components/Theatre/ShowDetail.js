import React from 'react';
import '../../assets/Theatre/ShowDetail.css';
import {NavLink} from 'react-router-dom'
class ShowDetail extends React.Component{
    render(){
        return(
            <div>
               <div className="bg-warp"> 
                {/* 演出详情位置 */}
                <div className="brief-primary">
                    <img className="bg-pic" src='https://image.juooo.com/group1/M00/02/C7/rAoKmV0ZvraAK32GAAA65fDJuB8087.jpg'/>
                    <div className="bg"></div>
                    <div className="show-detail-top">
                        <NavLink to="theatre/theatreList" className="top-left">&lt;</NavLink>
                        <span >演出详情</span>
                        <span className="top-right">
                            <i>...</i>
                            <i>???</i>
                        </span>
                    </div>
                    <div className="show-detail-top-info">
                        <img className="show-detail-top-info-pic" src="https://image.juooo.com/group1/M00/02/C7/rAoKmV0ZvraAK32GAAA65fDJuB8087.jpg"/>
                        <div className="brief-primary-content-info">
                            <p className="brief-primary-content-name">法语音乐剧《摇滚红与黑》-石家庄</p>
                            <p className="brief-primary-price">￥180-890</p>
                        </div>
                    </div>
                </div>
                {/* 演出详情下面部分 */}
                <div className="brief-secondary">
                    <div className="brief-secondary-info">
                        <p className="brief-secondary-date">09/27 - 09/28 <i><img className="brief-secondary-date-icon" src={require("../../assets/Theatre/img/icon-jiao.png")}/></i></p>
                        <p className="brief-secondary-address"> 石家庄 | 石家庄大剧院-大剧场</p>
                    </div>
                    <div className="brief-secondary-pointer">
                        
                    </div>
                </div>
                {/* plus会员卡提示框 */}
                <div className="detail-plus-tips">
                    <span className="detail-plus-card">橙PLUS卡</span>
                    <span className="detail-plus-content">开通送￥100 最高省98元</span>
                    <span className="detail-plus-open-card">立即开卡<i>&gt;</i></span>
                </div>
                {/* 详情安排 */}
                <div className="brief-schedule">
                    <div className="benefit-item">
                        <span>领券：</span>
                        <span>
                            <i>满100减10</i>
                            <i>满300减30</i>
                        </span>
                        <span className="more"><img src={require("../../assets/Theatre/img/0.png")}/></span>
                    </div>
                    <div className="benefit-item-plus">
                        <span>VIP+：</span>
                        <span><i className="member">V+会员享</i><i className="integral">国内免邮+双倍积分</i></span>
                        <span><img src={require("../../assets/Theatre/img/icon-jiao.png")}/></span>
                    </div>
                    <div className="benefit-item-admission">
                        <span>入场：</span>
                        <span className="benefit-item-admission-content">1米以上或5周岁以上儿童凭票入场,其他儿童谢绝入场</span>
                    </div>
                    <div className="benefit-item-support">
                        <span>支持：</span>
                        <span className="seat">在线选座</span>|
                        <span className="seat">电子票</span>|
                        <span className="seat">同城满200免邮</span>
                    </div>
                </div>
                {/* 巡演城市 */}
                <div className="tour-cities">
                    <p className="tour-cities-top">
                        <span className="tour-cities-top-name">巡演城市</span>
                        <span className="tour-cities-top-number"><i>23</i>场<i><img className="brief-secondary-date-icon" src={require("../../assets/Theatre/img/icon-jiao.png")}/></i></span>
                    </p>
                    <div className="tour-cities-list">
                        <p className="tour-cities-list-name">石家庄</p>
                        <p className="tour-cities-list-date">09/27-09/28</p>
                    </div>
                </div>
                {/* 演出介绍*/}
                <div className="introduce">

                </div>
                {/*温馨提醒 */}
                <div className="remind">
                    <p className="tour-cities-top">
                        <span className="tour-cities-top-name">温馨提醒</span>
                        <span className="tour-cities-top-number"><img className="brief-secondary-date-icon" src={require("../../assets/Theatre/img/icon-jiao.png")}/></span>
                    </p>
                    <div className="remind-list">
                        <span className="remind-info">
                            <i></i>
                            <span>配送说明</span>
                        </span>
                    </div>
                </div>
                {/* 相关推荐 */}
                <div className="recommend">
                    <p className="tour-cities-top">
                        <span className="tour-cities-top-name">相关推荐</span>
                    </p>
                    <div className="recommend-list-wrap">
                        <a className="recommend-show-item">
                            <img src="https://image.juooo.com/group1/M00/03/A5/rAoKNV1dEZKAED6xAAB_-x8YGi8858.jpg" alt=""/>
                            <div className="recommend-show-right">
                                <p className="recommend-date">10/05-10/06</p>
                                <p className="recommend-name">音乐剧</p>
                                <p className="recommend-address">石家庄大剧院</p>
                                <p className="recommend-price">
                                    <span>￥</span>
                                    <span className="recommend-num">380</span>
                                    <span>起</span>
                                </p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}
export default ShowDetail;