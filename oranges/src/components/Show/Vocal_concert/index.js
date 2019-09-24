import React from 'react'
import {
    NavLink,
    withRouter
} from "react-router-dom";
import '../../../assets/Show/Vocal_concert/index.css';
import { Drawer, Button, Radio } from 'antd';
import axios from 'axios';
import Topsscoll from '../../punlic/Topscoll'
const RadioGroup = Radio.Group;

class Show extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            visible: false,
            showList: [],
            list: [],
            city : [],
            page : 1
        }
    }
    render() {
        return (
            <div className={"app"}>
                <div className={"page show_library"}>
                    <section className={"title library-title"}>
                        <Topsscoll msg={"演出"} dis={"block"}></Topsscoll>
                    </section>
                    <div className={"show_type_wrap"}>
                        <div className={"show_type js_li_type"}>
                            <ul>
                                <li onClick={this.setcategory.bind(this,0)}>
                                    <NavLink activeStyle={{color:"#ff6743",borderBottom:"2px solid #ff6743"}} to={"/show/showsLibrary/"+(0)}>全部</NavLink>
                                </li>
                                {
                                    this.state.list.map((v,i)=>(
                                        <li onClick={this.setcategory.bind(this,v.category_id)} key={i}>
                                            <NavLink activeStyle={{color:"#ff6743",borderBottom:"2px solid #ff6743"}} to={"/show/showsLibrary/"+v.category_id}>{v.name}</NavLink>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                        <div className={"city_wrap"}>
                            <span className={"city"} onClick={this.showDrawer}>全国</span>
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
                        </section>
                        <div className={"more"}>
                            <a onClick={this.Loadmore.bind(this,this.props)}>加载更多</a>
                        </div>
                    </div>
                </div>
                <div>
                    <Drawer
                        title="城市"
                        placement="right"
                        closable={false}
                        onClose={this.onClose}
                        visible={this.state.visible}
                    >
                        <ul className={"list"}>
                            {
                                this.state.city.map((v,i)=>(
                                    <li key={i}>{v.name}</li>
                                ))
                            }
                        </ul>
                        <input type="button" value={"确定"}/>
                    </Drawer>
                </div>
            </div>
        )
    }
    componentDidMount() {
        axios.get("https://m.juooo.com/Search/getShowCategory?version=6.0.5&referer=2")
            .then(({data})=>{
                this.setState({
                    list : data.show_category_list
                })
            })
        axios.get("https://m.juooo.com/Search/getCity?version=6.0.5&referer=2")
            .then(({data})=>{
                this.setState({
                    city : data.city_list
                })
            })
        this.setcategory()
    }
    back(){
        this.props.history.push('/')
    }
    setcategory(category = 0){
        let page = this.state.page
        axios.get("https://api.juooo.com/Show/Search/getShowList?category="+category+"&city_id=0&page="+page+"&keywords=&version=6.0.5&referer=2")
            .then(({data})=>{
                this.setState({
                    showList : data.list
                })
            })
    }
    Loadmore({category} = 0){
        this.setState({
            page : this.state.page++
        })
        let page = this.state.page
        axios.get("https://api.juooo.com/Show/Search/getShowList?category="+category+"&city_id=0&page="+page+"&keywords=&version=6.0.5&referer=2")
            .then(({data})=>{
                this.setState({
                    showList : this.state.showList.concat(data.list)
                })
            })
    }
    showDrawer = () => {
        this.setState({
            visible: true,
        });
    };
    onClose = () => {
        this.setState({
            visible: false,
        });
    };
}
export default withRouter(Show)