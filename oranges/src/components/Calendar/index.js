import React from 'react'
import '../../assets/Calendar/index.css'
import {
    NavLink,
    withRouter
}from 'react-router-dom'
import { Calendar } from 'antd';

class  calendar extends React.Component{
    render() {
        return(
            <div className={"app"}>
                <div className={"page calendar_wrap"}>
                    <section className={"title library-title"}>
                        <i className={"iconfont iconfanhui1 title_back"} onClick={this.back.bind(this)}></i>
                        <span className={"title__text"}>演出日历</span>
                        <i className={"iconfont iconsangedian1 title__ellipsis"}></i>
                    </section>
                </div>
                <div className={"show_type_wrap"}>
                    <div className={"show_type js_li_type"}>
                        <ul>
                            <li>
                                <NavLink to={"/calendar/index"}>全部</NavLink>
                            </li>
                            <li>
                                <NavLink to={"/calendar/index"}>演唱会</NavLink>
                            </li>
                            <li>
                                <NavLink to={"/calendar/index"}>音乐会</NavLink>
                            </li>
                            <li>
                                <NavLink to={"/calendar/index"}>话剧歌剧</NavLink>
                            </li>
                            <li>
                                <NavLink to={"/calendar/index"}>儿童亲子</NavLink>
                            </li>
                            <li>
                                <NavLink to={"/calendar/index"}>音乐剧</NavLink>
                            </li>
                            <li>
                                <NavLink to={"/calendar/index"}>戏曲综艺</NavLink>
                            </li>
                            <li>
                                <NavLink to={"/calendar/index"}>展览</NavLink>
                            </li>
                            <li>
                                <NavLink to={"/calendar/index"}>舞蹈芭蕾</NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className={"city_wrap"}>
                        <span className={"city"}>全国</span>
                        <span className={"city_icon iconfont icondibiao"}></span>
                    </div>
                </div>
                    <Calendar fullscreen={false} onPanelChange={this.onPanelChange} onChange={this.onSelect}/>
            </div>
        )
    }
    onPanelChange(value, mode) {
        console.log(value, mode);
    }
    back(){
        this.props.history.push('/')
    }
    onSelect({_d}){
        console.log(_d)
        let _data = JSON.stringify(_d)
        console.log(_data)
        let _day = _data.split(7,2)
        console.log(_day)
        //console.log(this.onSelect)
        //console.log(this.moment)
    }
}
export default withRouter(calendar)