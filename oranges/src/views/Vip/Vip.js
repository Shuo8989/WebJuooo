import React from 'react';
import '../../assets/Vip/Vip.scss'
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css'
import axios from 'axios'
import {
    NavLink
} from 'react-router-dom';
import { connect } from 'react-redux';//高阶组件
import {bindActionCreators} from 'redux'//绑定并执行一次函数
import vipCreator from '../../store/actionCreator/Vip';//首页的数据请求方法

import doubleimg from '../../assets/img/vip_plus_double_points.e9a6530.png'
import freepostimg from '../../assets/img/vip_plus_free_shipping.2edb583.png'
import vipimg from '../../assets/img/vip_plus_right.61e731b.png'//精灵图


class Vip extends React.Component {
    // constructor(props) {
    //     super(props)
    //     this.state = {
    //         cardList: [],
    //         discountList: [],
    //         freeList: []
    //     }
    // }
    render() {
        return (
            <div className={"vip-plus-wrapper"}>
                <header className={"vip-plus__title"}>
                    <div className={"title__text"}>
                        <i className={"iconfont iconfanhui1"}></i>
                        <span>VIP + 会员</span>
                        <i className={"iconfont iconsangedian1"}></i>
                    </div>
                </header>
                <section className="vip-plus__desc-wrapper">
                    <div className="vip-plus__desc">
                        <div className="vip-plus__desc__title"></div>
                        <div className="vip-plus__desc__content">
                            <div className="right-grid">
                                <div className="right-grid__row">
                                    <div className="right-grid__cell">
                                        <div className="right-cell__icon right-cell__icon--prior-buy"></div>
                                        <div className="right-cell__name">优先购票</div>
                                    </div>
                                    <div className="right-grid__cell">
                                        <div className="right-cell__icon "></div>
                                        <div className="right-cell__name">优先购票</div>
                                    </div>
                                    <div className="right-grid__cell">
                                        <div className="right-cell__icon "></div>
                                        <div className="right-cell__name">优先购票</div>
                                    </div>
                                    <div className="right-grid__cell">
                                        <div className="right-cell__icon "></div>
                                        <div className="right-cell__name">优先购票</div>
                                    </div>

                                </div>
                                <div className="right-grid__row">
                                    <div className="right-grid__cell">
                                        <div className="right-cell__icon right-cell__icon--prior-buy"></div>
                                        <div className="right-cell__name">优先购票</div>
                                    </div>
                                    <div className="right-grid__cell">
                                        <div className="right-cell__icon "></div>
                                        <div className="right-cell__name">优先购票</div>
                                    </div>
                                    <div className="right-grid__cell">
                                        <div className="right-cell__icon "></div>
                                        <div className="right-cell__name">优先购票</div>
                                    </div>
                                    <div className="right-grid__cell">
                                        <div className="right-cell__icon "></div>
                                        <div className="right-cell__name">优先购票</div>
                                    </div>
                                </div>
                                <div className="right-grid__row">
                                    <div className="right-grid__cell">
                                        <div className="right-cell__icon right-cell__icon--prior-buy"></div>
                                        <div className="right-cell__name">优先购票</div>
                                    </div>
                                    <div className="right-grid__cell">
                                        <div className="right-cell__icon "></div>
                                        <div className="right-cell__name">优先购票</div>
                                    </div>
                                    <div className="right-grid__cell">
                                        <div className="right-cell__icon "></div>
                                        <div className="right-cell__name">优先购票</div>
                                    </div>
                                    <div className="right-grid__cell">
                                        <div className="right-cell__icon_none "></div>
                                        <div className="right-cell__name_none"></div>
                                    </div>
                                </div>
                            </div>
                            <button className="ju-button">立即开通 ￥99/年</button>
                            <div className="vip-plus__desc__content__rule">权益解读</div>
                        </div>
                    </div>
                    <div className="vip-plus__desc_ad">
                        <img src="https://image.juooo.com/group1/M00/02/D0/rAoKmV0jYo-AFJm6AABjBMdPbE4256.png" className="ad-swipe__swipe__item__img" alt="" />
                    </div>
                    <div className="vip-plus__coupon">
                        <div className="entry-block__title">专享券</div>
                        <div className="swiper-container coupon-swiper-wrapper">
                            <div className="swiper-wrapper vip-plus-coupon-swipe">
                                <div className="swiper-slide">
                                    <div className="slide-left">
                                        <p>￥40 满60元可用</p>
                                        <p>V+中秋钜惠主办音乐剧40元券</p>
                                        <p>有效期：2019.09.10 - 2019.09.20</p>

                                    </div>
                                    <div className="slide-right">
                                        <div className="coupon__get">立即领取</div>
                                    </div>
                                </div>
                                <div className="swiper-slide">Slide 2</div>
                                <div className="swiper-slide">Slide 3</div>
                                <div className="swiper-slide">Slide 4</div>
                                <div className="swiper-slide">Slide 5</div>
                                <div className="swiper-slide">Slide 6</div>
                            </div>
                        </div>
                    </div>
                    {/* 优先购票 */}
                    <div className="vip-plus__prior-buy">
                        <div className="entry-block__title">优先购票</div>
                        <div className="vip-buy__content">
                            {/* 遍历渲染数据 */}
                            {
                                this.props.cardList.map(v => (
                                    <div className="prior-buy-card" key={v.schedular_id}>
                                        <div className="show-img" >
                                            <img src={v.pic} alt="" />
                                        </div>
                                        <div className="show-item">
                                            <div className="data-week">
                                                <span className="data-week__date">{v.date}</span>
                                                <span className="data-week__week">{v.week}</span>
                                            </div>
                                            <div className="item-info-name">
                                                <p className="item-info-name-content">{v.schedular_name}</p>
                                            </div>
                                            <div className="item-info-place">{v.venue_name}</div>

                                            <div className="item-info-extra">
                                                <span className="extra-price">￥{v.min_price}</span>
                                                <span className="extra-price-desc">起步</span>
                                                <span className="extra-date">{v.pre_time}</span>
                                                <span className="extra-date-desc">{v.status == 1 ? "开始" : "结束"}</span>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }

                        </div>
                    </div>
                    {/* 专享折扣 */}
                    <div className="vip-discount">
                        <div className="vip-discount-title">
                            专享折扣
                            <span className="vip-block"></span>
                            <i className="iconfont iconfaxian"></i>
                        </div>
                        <div className="vip-discount-grid">
                            {/* 遍历折扣数据 */}
                            {
                                this.props.discountList.map(v => (
                                    <div className="show-cell" key={v.schedular_id}>
                                        <img src={v.pic} className="show-cell-img" alt="" />
                                        <div className="show-cell-name">{v.schedular_name}</div>
                                        <div className="show-cell-discount">{v.min_discount}折起</div>
                                    </div>
                                ))
                            }

                        </div>
                        <button className="vip-findmore">查看更多演出 <i className="iconfont iconsangedian1"></i></button>
                    </div>
                    {/* 免费观影 */}
                    <div className="free-view">
                        <div className="free-title">
                            <div className="title-font">免费观影</div>
                            <div className="title-use">可用0张<i></i></div>
                        </div>
                        {
                            this.props.freeList.map(v => (
                                <div className="free-item" key={v.schedular_id}>
                                    <img className="free-img" src={v.pic} alt="" />
                                    <div className="free-item-name">{v.schedular_name}</div>
                                    <div className="free-price">￥{v.is_through_ticket}<span className="free-delete">￥{v.price}</span></div>
                                </div>
                            ))
                        }
                    </div>
                    {/* 双倍积分 */}
                    <div className="vip-double">
                        <div className="vip-double-title">双倍积分</div>
                        <img src={doubleimg} alt="" />
                    </div>
                    {/* 全场包邮 */}
                    <div className="vip-freepost">
                        <div className="vip-freepost-title">全场包邮</div>
                        <img src={freepostimg} alt="" />
                    </div>
                    <div className="vip-more">
                        更多VIP+尊享权益，敬请期待
                    </div>
                </section>
                <button className="vip-btn">
                    立即开通
                    <span  className="vip-btn-price">￥99</span>
                    <span  className="vip-btn-unit">/年</span>
                </button>
            </div>
        )
    }
    async componentDidMount() {
        let mySwiper = new Swiper('.coupon-swiper-wrapper', {
            direction: 'horizontal', // 垂直切换选项
            loop: false, // 循环模式选项
            slidesPerView: 1.118012,//滚动步长
        })
        this.props.getCardList();
        this.props.getDiscountList();
        this.props.getFreeList();
        //优先购票接口数据
        // const { data } = await axios.get("https://api.juooo.com/vip/index/getPriorBuyList?page=1&limit=1000&version=6.0.5&referer=2")
        // //专享折扣数据
        // const discountdata = await axios.get("https://api.juooo.com/vip/index/getDiscountList?page=1&limit=10&version=6.0.5&referer=2")
        // // console.log(discountdata.data.list);
        // //免费观影list
        // const freedata = await axios.get("https://api.juooo.com/vip/index/getWatchPerList?page=1&limit=6&version=6.0.5&referer=2")
        // this.setState({
        //     cardList: data.list.slice(0, 2),
        //     discountList: discountdata.data.list.slice(0, 9),
        //     freeList: freedata.data.list
        // })

    }
}
export default connect(state=>(console.log(state),{
    cardList:state.vip.cardList,
    discountList:state.vip.discountList,
    freeList:state.vip.freeList
}),
dispatch=>bindActionCreators(vipCreator,dispatch)
)(Vip)