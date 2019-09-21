import React from 'react'
import '../../assets/VipPlus/VipPlus.scss'
import { connect } from 'react-redux';//高阶组件
import { bindActionCreators } from 'redux'//绑定并执行一次函数
import vipPlusCreator from '../../store/actionCreator/Vip';//首页的数据请求方法
import plusinfo from '../../assets/img/plus-card.jpg'
import viprights from '../../assets/img/vip-property.jpg'
import plussave from '../../assets/img/save-money.png'

class VipPlus extends React.Component {
    
    render() {
        return (
            <div className="plus-wrapper">
                <header className={"plus-title"}>
                    <div className={"title__text"}>
                        <i className={"iconfont iconfanhui1"}></i>
                        <span>橙PLUS卡</span>
                        <i className={"iconfont iconsangedian1"}></i>
                    </div>
                </header>
                <section className="plus-info-wrapper">
                    <div className="plus-info">
                        <img src={plusinfo} alt="" />
                        <div className="use-rule">
                            使用规则
                        </div>
                    </div>
                    <div className="plus-btn-wrapper">
                        <button className="plus-btn">立即开卡</button>
                    </div>
                    <div className="plus-rights">
                        <img src={viprights} alt="" />
                        <button className="plus-rights-btn">立即开通 ￥99/年</button>
                    </div>
                    <div className="plus-save">
                        <img src={plussave} alt="" />
                    </div>

                </section>
                <footer className="apply-wrapper">
                    <div className="apply-txt">
                        <span className="apply-txt-desc">开卡限时送</span>
                        <span className="apply-txt-amount">￥100</span>
                    </div>
                    <button className="apply-btn">
                        立即开卡
                        </button>
                </footer>
            </div>
        )
    }


}
export default VipPlus