import React from 'react'
import '../../assets/Calendar/index.css'
import {
    NavLink,
    withRouter
}from 'react-router-dom'
import axios from 'axios'
import Topscoll from '../punlic/Topscoll'
import { Calendar } from 'antd';
class Calendars extends React.Component{
    constructor(){
        super();
        this.state = {
            showList : []
        }
    }
    render() {
        return(
            <div className={"app"}>
                <div className={"page calendar_wrap"}>
                    <Topscoll msg={"演出日历"} dis={"block"}></Topscoll>
                </div>
                <div className={"show_type_wrap"}>
                    <div className={"show_type js_li_type"}>
                        <ul>
                            <li onClick={this.setcategory.bind(this,0)}>
                                <NavLink activeStyle={{color:"#ff6743",borderBottom:"2px solid #ff6743"}} to={"/calendar/index/"+0}>全部</NavLink>
                            </li>
                            <li onClick={this.setcategory.bind(this,35)}>
                                <NavLink activeStyle={{color:"#ff6743",borderBottom:"2px solid #ff6743"}} to={"/calendar/index/"+35}>演唱会</NavLink>
                            </li>
                            <li onClick={this.setcategory.bind(this,79)}>
                                <NavLink activeStyle={{color:"#ff6743",borderBottom:"2px solid #ff6743"}} to={"/calendar/index/"+79}>音乐会</NavLink>
                            </li>
                            <li onClick={this.setcategory.bind(this,37)}>
                                <NavLink activeStyle={{color:"#ff6743",borderBottom:"2px solid #ff6743"}} to={"/calendar/index/"+37}>话剧歌剧</NavLink>
                            </li>
                            <li onClick={this.setcategory.bind(this,38)}>
                                <NavLink activeStyle={{color:"#ff6743",borderBottom:"2px solid #ff6743"}} to={"/calendar/index/"+38}>儿童亲子</NavLink>
                            </li>
                            <li onClick={this.setcategory.bind(this,36)}>
                                <NavLink activeStyle={{color:"#ff6743",borderBottom:"2px solid #ff6743"}} to={"/calendar/index/"+36}>音乐剧</NavLink>
                            </li>
                            <li onClick={this.setcategory.bind(this,91)}>
                                <NavLink activeStyle={{color:"#ff6743",borderBottom:"2px solid #ff6743"}} to={"/calendar/index/"+91}>戏曲综艺</NavLink>
                            </li>
                            <li onClick={this.setcategory.bind(this,99)}>
                                <NavLink activeStyle={{color:"#ff6743",borderBottom:"2px solid #ff6743"}} to={"/calendar/index/"+99}>展览</NavLink>
                            </li>
                            <li onClick={this.setcategory.bind(this,86)}>
                                <NavLink activeStyle={{color:"#ff6743",borderBottom:"2px solid #ff6743"}} to={"/calendar/index/"+86}>舞蹈芭蕾</NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className={"city_wrap"}>
                        <span className={"city"}>全国</span>
                        <span className={"city_icon iconfont icondibiao"}></span>
                    </div>
                </div>
                    <Calendar fullscreen={false} onPanelChange={this.onPanelChange} onChange={this.onSelect}/>
                <div className={"recommend-list"}>
                    {
                        this.state.showList.map((v,i)=>(
                            <ul key={i}>
                                <li>
                                    <div className={"show-icon"}>
                                        <a href="">
                                            <img src={v.pic} alt=""/>
                                        </a>
                                    </div>
                                    <div className={"item-desc"}>
                                        <p className={"show-date"}><strong>{v.show_time_top}</strong></p>
                                        <a href="">
                                            <h3 className={"text-double"}>{v.name}</h3>
                                        </a>
                                        <p className={"venue text-single"}>{v.city_name}|{v.venue_name}</p>
                                        <p className={"price"}><strong>￥{v.min_price}</strong> 起</p>
                                    </div>
                                </li>
                            </ul>
                        ))
                    }
                </div>
            </div>
        )
    }
    componentDidMount() {
        this.setcategory()
    }
    setcategory(category = 0){
        axios.get("https://api.juooo.com/Show/Search/getShowList?category="+category+"&city_id=0&start_time=2019%2F9%2F21&version=6.0.5&referer=2")
            .then(({data})=>{
                this.setState({
                    showList : data.list
                })
            })
    }

}
export default withRouter(Calendars)