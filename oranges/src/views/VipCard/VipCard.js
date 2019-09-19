import React from 'react'
import '../../assets/VipCard/VipCard.scss'
import axios from 'axios'
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css'
import { NavLink, Link } from 'react-router-dom';



import { connect } from 'react-redux';//高阶组件
import { bindActionCreators } from 'redux'//绑定并执行一次函数
import vipPlusCreator from '../../store/actionCreator/Vip';//首页的数据请求方法
import plusinfo from '../../assets/img/plus-card.jpg'
import viprights from '../../assets/img/vip-property.jpg'
import plussave from '../../assets/img/save-money.png'

class VipCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            adList: [],
            cardList: []
        }

    }
    render() {
        return (
            <div className="plus-wrapper">
                <header className={"plus-title"}>
                    <div className={"title__text"}>
                        <i className={"iconfont iconfanhui1"}></i>
                        <span>购买新卡</span>
                        <i className={"iconfont iconsangedian1"}></i>
                    </div>
                </header>

                <section className="ad-wrapper">
                    <div className="ad">

                        <div className="swiper-container sw-swiper">
                            <div className="swiper-wrapper sw-swiper-wrapper">
                                {
                                    this.state.adList.map((v, i) => {
                                        const str = (v.mb_href).replace("https://m.juooo.com", "")
                                        return (
                                            <div className="swiper-slide sw-swiper-slide" key={i}>
                                                <Link to={str}>
                                                    <img src={v.mb_image} alt="" className="adimg" />
                                                </Link>
                                            </div>
                                        )

                                    }

                                    )
                                }
                            </div>
                            {/* 分页器 */}
                            <div className="swiper-pagination sw-swiper-pagination"></div>
                        </div>
                    </div>
                    {/* 精灵图部分 */}
                    <div className="init-block">
                        <div className="init-title">
                            VIP+
                             <span className="init-title-desc">
                                开通VIP+，演出随心看
                             </span>
                            <i className="iconfont iconsangedian1 more"></i>
                        </div>
                        <div className="init-desc">
                            <div className="right-cell">
                                <div className="right-cell-icon"></div>
                                <div className="right-cell-name">优先购票</div>
                            </div>
                            <div className="right-cell">
                                <div className="right-cell-icon"></div>
                                <div className="right-cell-name">优先购票</div>
                            </div>
                            <div className="right-cell">
                                <div className="right-cell-icon"></div>
                                <div className="right-cell-name">优先购票</div>
                            </div>
                            <div className="right-cell">
                                <div className="right-cell-icon"></div>
                                <div className="right-cell-name">优先购票</div>
                            </div>
                            <div className="right-cell">
                                <div className="right-cell-icon"></div>
                                <div className="right-cell-name">优先购票</div>
                            </div>
                            <div className="right-cell">
                                <div className="right-cell-icon"></div>
                                <div className="right-cell-name">优先购票</div>
                            </div>
                            <div className="right-cell">
                                <div className="right-cell-icon"></div>
                                <div className="right-cell-name">优先购票</div>
                            </div>
                            <div className="right-cell">
                                <div className="right-cell-icon"></div>
                                <div className="right-cell-name">优先购票</div>
                            </div>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card-title">
                            储值卡
                                <span className="save-desc">
                                全国通用，购卡充值送100元
                                </span>
                        </div>
                        {
                            this.state.cardList.store_card ? (
                                this.state.cardList.store_card.map(v => (
                                    <div className="card-list" key={v.id}>
                                        <div className="orange-plus">
                                            <div className="card-cell"><img src={v.card_image} alt="" /></div>
                                            <div className="card-cell-desc">
                                                <div className="card-cell-desc-top">{v.name}</div>
                                                <div className="card-cell-desc-middle">有效期:{v.avail_mouth ? `${v.avail_mouth}个月` : (v.effect_end_time === "1970/01/01" ? "长期有效" : v.effect_end_time)}</div>
                                                <div className="card-cell-desc-bottom">
                                                    <span className="card-price">￥{v.card_price}</span>
                                                    <span className="card-give">{v.use_limit ? `兑换券${v.use_limit}张` : "赠送VIP+"}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            ) : null

                        }

                    </div>

                    <div className="card">
                        <div className="card-title">
                            品类 • 次卡
                        </div>
                        {
                            this.state.cardList.cate_card ? (
                                this.state.cardList.cate_card.map(v => (
                                    <div className="card-list" key={v.id}>
                                        <div className="orange-plus" >
                                            <div className="card-cell"><img src={v.card_image} alt="" /></div>
                                            <div className="card-cell-desc">
                                                <div className="card-cell-desc-top">{v.name}</div>
                                                <div className="card-cell-desc-middle">有效期:{v.avail_mouth ? `${v.avail_mouth}个月` : (v.effect_end_time === "1970/01/01" ? "长期有效" : v.effect_end_time)}</div>
                                                <div className="card-cell-desc-bottom">
                                                    <span className="card-price">￥{v.card_price}</span>
                                                    <span className="card-give">{v.use_limit ? `兑换券${v.use_limit}张` : "赠送VIP+"}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            ) : null

                        }
                    </div>

                    <div className="card">
                        <div className="card-title">
                            城市 • 次卡
                        </div>
                        {
                            this.state.cardList.once_card ? (
                                this.state.cardList.once_card.map(v => (
                                    <div className="card-list" key={v.id}>
                                        <div className="orange-plus" >
                                            <div className="card-cell"><img src={v.card_image} alt="" /></div>
                                            <div className="card-cell-desc">
                                                <div className="card-cell-desc-top">{v.name}</div>
                                                <div className="card-cell-desc-middle">有效期:{v.avail_mouth ? `${v.avail_mouth}个月` : (v.effect_end_time === "1970/01/01" ? "长期有效" : v.effect_end_time)}</div>
                                                <div className="card-cell-desc-bottom">
                                                    <span className="card-price">￥{v.card_price}</span>
                                                    <span className="card-give">{v.use_limit ? `兑换券${v.use_limit}张` : "赠送VIP+"}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            ) : null

                        }
                    </div>




                </section>


                <footer className="tab">
                    <div className="tab-item tab-item-active">购买新卡</div>
                    <div className="tab-divider"></div>
                    <div className="tab-item">绑定新卡</div>
                    <div className="tab-divider"></div>

                    <div className="tab-item">我的卡包</div>

                </footer>
            </div>
        )
    }
    async componentDidMount() {
        const { data } = await axios.get("https://api.juooo.com/Card/index/hotBanner?version=6.0.5&referer=2 ")
        // console.log(data);
        const cardata = await axios.get("https://api.juooo.com/Card/index/getCardGroupList?version=6.0.5&referer=2")
        // console.log(cardata.data);
        this.setState({
            adList: data,
            cardList: cardata.data
        })
        new Swiper('.sw-swiper', {
            direction: 'horizontal', // 垂直切换选项
            loop: true, // 循环模式选项
            speed: 300,//自动播放
            autoplay: {
                delay: 3000
            },
            // 如果需要分页器
            pagination: {
                el: '.swiper-pagination',
            }
        })
    }
}
export default VipCard



{/* <div className="orange-plus">
                                <div className="card-cell"><img src="https://gw.alicdn.com/tps/TB1W_X6OXXXXXcZXVXXXXXXXXXX-400-400.png" alt="" /></div>
                                <div className="card-cell-desc">
                                    <div className="card-cell-desc-top">城卡plus</div>
                                    <div className="card-cell-desc-middle">有效期12</div>
                                    <div className="card-cell-desc-bottom">
                                        <span className="card-price">￥999</span>
                                        <span className="card-give">{}</span>
                                    </div>
                                </div>
                            </div> */}