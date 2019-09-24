import React from 'react'
import '../../assets/VipCard/VipCard.scss'
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css'
import { NavLink, withRouter } from 'react-router-dom';
import vipCardCreator from '../../store/actionCreator/Vip/vipCard.js'
import CardMore from '../../components/Vip/CardMore.js'

import { connect } from 'react-redux';//高阶组件
import { bindActionCreators } from 'redux'//绑定并执行一次函数

class VipCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            myCardList: [] //改后台数据格式
        }

    }
    render() {
        return (
            <div className="plus-wrapper">
                <header className={"plus-title"}>
                    <div className={"title__text"}>
                        <i className={"iconfont iconfanhui1"} onClick={this.back.bind(this)}></i>
                        <span>购买新卡</span>
                        <i className={"iconfont iconsangedian1"}></i>
                    </div>
                </header>

                <section className="ad-wrapper">
                    <div className="ad">

                        <div className="swiper-container sw-swiper">
                            <div className="swiper-wrapper sw-swiper-wrapper">
                                {
                                    this.props.adList.map((v, i) => {
                                        const str = (v.mb_href).replace("https://m.juooo.com", "")
                                        return (
                                            <div className="swiper-slide sw-swiper-slide" key={i}>
                                                <img src={v.mb_image} alt="" className="adimg" />
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

                        <NavLink to={"/vip/index/1"}> 
                            <div className="init-title">
                                VIP+
                                 <span className="init-title-desc">
                                    开通VIP+，演出随心看
                                 </span>
                                <i className="iconfont iconsangedian1 more"></i>
                            </div>
                        </NavLink>

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
                    <CardMore  > </CardMore>
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
    goRouter() {

    }
    back() {
        // console.log(this.props);
        this.props.history.go(-1)
    }
    async componentDidMount() {
        // const { data } = await axios.get("https://api.juooo.com/Card/index/hotBanner?version=6.0.5&referer=2 ")
        // // console.log(data);
        // const cardata = await axios.get("https://api.juooo.com/Card/index/getCardGroupList?version=6.0.5&referer=2")
        // // console.log(cardata.data);
        // this.setState({
        //     adList: data,
        //     cardList: cardata.data
        // })
        await this.props.getAdList();
        await this.props.getCardList();

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
export default connect(state => ({
    adList: state.vipCard.adList,
    cardList: state.vipCard.cardList,
}),
    dispatch =>
        bindActionCreators(vipCardCreator, dispatch)
)(withRouter(VipCard))

