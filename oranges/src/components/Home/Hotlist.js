import React from 'react';
import Swiper from 'swiper';
import 'swiper/dist/css/swiper.min.css';
import {NavLink} from 'react-router-dom'
import "../../assets/Home/Hotlist.scss"
export default class Hotlist extends React.Component{
    componentDidMount(){
        new Swiper('.hot-block-swiper',{
            slidesPerView : "auto",
            centeredSlides : false,
            slidesPerView :3.2
            })
    }
    render(){
        const hotlist=this.props.hotlist.slice(0,10)
        return(
            <div className={"hot-block"}>
                <div className={'hot-block__lab'}>
                    <h3>热门演出</h3>
                    <NavLink to={""} className={'hot-block_lab-a'}>
                        <img src={require("../../assets/img/gt.png")} alt="" />
                    </NavLink>
                </div>
                <div className={"hot-block__list"}>
                    <div className="swiper-container hot-block-swiper">
                        <div className="swiper-wrapper swiper-wrapper-div">
                            {
                               hotlist.map((v,i)=>{
                                   const str = v.schedular_url.replace('https://m.juooo.com/ticket/',"")
                                    return (
                                        <NavLink key={i} className="swiper-slide swiper-slide-link" to={'/ticket/'+str}>
                                            <img src={v.pic} alt={''} />
                                            <h3>{v.show_name}</h3>
                                        </NavLink>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
 }