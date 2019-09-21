import React from 'react'
import '../../assets/VipCard/VipCardDesc.scss'

import { NavLink, Link } from 'react-router-dom';
import vipCardCreator from '../../store/actionCreator/Vip/vipCard.js'
import { connect } from 'react-redux';//高阶组件
import { bindActionCreators } from 'redux'//绑定并执行一次函数


class VipCardDesc extends React.Component {

    render() {
        return (
            <div className="plus-wrapper">
                <header className={"plus-title"}>
                    <div className={"title__text"}>
                        <i className={"iconfont iconfanhui1"}></i>
                        <span>合肥99元次卡</span>
                        <i className={"iconfont iconsangedian1"}></i>
                    </div>
                </header>
                <section>
                    <div className="card-wrap">
                            <img src="" alt=""/>
                    </div>
                    <div className="btn-mid">
                        <button>
                            立即购卡
                        </button>
                    </div>
                    <div className="tips">
                        <span className="change-tip">10个斯大法</span>
                        <span className="tip-rules">使用规则</span>
                    </div>
                    <div className="entry-block">
                        <div className="en-title">演出兑换</div>
                        <div className="en-list">
                            <img src="" alt=""/>
                            <div className="item-info">
                                <div className="date"></div>
                                <div className="name"></div>
                                <div className="place"></div>
                                <div className="ratio"></div>
                            </div>
                        </div>
                    </div>
                </section>






                <footer className="tab">
                    <button className="ju-btn">
                        立即购卡
                    </button>
                    

                </footer>
            </div>


        )


    }




}

export default VipCardDesc