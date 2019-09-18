import React from 'react'
import {
    NavLink
} from "react-router-dom";
import '../../../assets/Show/Vocal_concert/index.css';
import Navigation from '../Navigation'
import axios from 'axios'

export default class Show extends React.Component{
    constructor(){
        super();
        this.state = {
            showList: []
        }
    }
    render() {
        return (
            <div className={"app"}>
                <div className={"page show_library"}>
                    <section className={"title library-title"}>
                        <i className={"iconfont iconfanhui1 title_back"}></i>
                        <span className={"title__text"}>演出</span>
                        <i className={"iconfont iconsangedian1 title__ellipsis"}></i>
                    </section>
                    <div className={"show_type_wrap"}>
                        <div className={"show_type js_li_type"}>
                            <ul>
                                <li onClick={this.setcategory.bind(this,0)}>
                                    <NavLink to={"/show/showsLibrary"}>全部</NavLink>
                                </li>
                                <li onClick={this.setcategory.bind(this,35)}>
                                    <NavLink to={"/show/showsLibrary"}>演唱会</NavLink>
                                </li>
                                <li  onClick={this.setcategory.bind(this,36)}>
                                    <NavLink to={"/show/showsLibrary"}>音乐会</NavLink>
                                </li>
                                <li  onClick={this.setcategory.bind(this,37)}>
                                    <NavLink to={"/show/showsLibrary"}>话剧歌剧</NavLink>
                                </li>
                                <li  onClick={this.setcategory.bind(this,38)}>
                                    <NavLink to={"/show/showsLibrary"}>儿童亲子</NavLink>
                                </li>
                                <li  onClick={this.setcategory.bind(this,79)}>
                                    <NavLink to={"/show/showsLibrary"}>音乐剧</NavLink>
                                </li>
                                <li  onClick={this.setcategory.bind(this,91)}>
                                    <NavLink to={"/show/showsLibrary"}>戏曲综艺</NavLink>
                                </li>
                                <li onClick={this.setcategory.bind(this,99)}>
                                    <NavLink to={"/show/showsLibrary"}>展览</NavLink>
                                </li>
                                <li onClick={this.setcategory.bind(this,86)}>
                                    <NavLink to={"/show/showsLibrary"}>舞蹈芭蕾</NavLink>
                                </li>
                            </ul>
                        </div>
                        <div className={"city_wrap"}>
                            <span className={"city"}>全国</span>
                            <span className={"city_icon iconfont icondibiao"}></span>
                        </div>
                    </div>
                    <div className={"library-wrap js_show_library"}>
                        <section className={"recommend-wrap"}>
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
                                                    <p className={"show-date"}>{v.show_time_top}</p>
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
                        </section>
                    </div>
                </div>
            </div>
        )
    }
    componentDidMount() {
        axios.get("https://api.juooo.com/Show/Search/getShowList?category=0&city_id=0&page=1&keywords=&version=6.0.5&referer=2")
            .then(({data})=>{
                this.setState({
                    showList : data.list
                })
            })
    }
    setcategory(category = 0){
        axios.get("https://api.juooo.com/Show/Search/getShowList?category="+category+"&city_id=0&page=1&keywords=&version=6.0.5&referer=2")
            .then(({data})=>{
                this.setState({
                    showList : data.list
                })
            })
    }
}