import React,{Component} from 'react';
import '../../assets/Home/Advertion-wrap.scss';
import {
    NavLink
} from 'react-router-dom';
export default class Advertion extends Component{
    render(){
        const classifyHome=this.props.classifyHome;
        console.log(classifyHome)
        return(
            <div className={'advertion-wrap'}>
                <div className={"lable-item"}>
                    {
                        classifyHome.classifyHome.classify_list.map((v,i)=>(
                            <div key={i} className={"label-item__block"}>
                                <NavLink   className={"label-item__block__column"} to={''}>
                                    <img src={v.pic} ait=""/>
                                    <span>{v.name}</span>
                                </NavLink>
                            </div>
                        ))
                    }
                </div>
                {
                    classifyHome.vipHomeSchedular.priorList.length>0?(
                        <div className={'vip-ahead'}>
                            <NavLink to={'/vip/index'}>
                                <div className={'vip-ahead__advert__left'}>
                                    <span style={{fontSize:'.3rem',marginRight:'.1rem',fontWeight:'900'}}>优先购票</span>
                                    <span>VIP+会员尊享权益</span>
                                </div>
                                <div>
                                    <span>开通会员99元/年</span>
                                    <span>&gt;</span>
                                </div>
                            </NavLink>
                            <div  className={'swiper-container home-banner-wrap'}>
                                <div className={"swiper-wrapper"}>
                                    <div className={"swiper-slide"}>
                                        <div className={"vip-ahead__list"}>
                                            <div className={'vip-ahead__list__item'}>
                                                <NavLink to={''} className={'vip-ahead__list__item__wrap'}>     
                                                    <img src={classifyHome.vipHomeSchedular.priorList[0].pic} alt='' />
                                                </NavLink>
                                            </div>
                                            <div className={'div-2'}>
                                                <h3>{classifyHome.vipHomeSchedular.priorList[0].schedular_name}</h3>
                                                <p className={'p-1'}>{classifyHome.vipHomeSchedular.priorList[0].city_name +' | '+ classifyHome.vipHomeSchedular.priorList[0].venue_name}}</p>
                                                <p className={'p-2'}>
                                                    <span className={'p-span-1'}>{classifyHome.vipHomeSchedular.priorList[0].end_time}</span>
                                                    <span className={'p-span-2'}>开始</span>
                                                </p>
                                            </div>
                                            <NavLink to={''}>
                                                <span className={'vip-ahead__list__lab'}>开售提醒</span>
                                            </NavLink>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ):null
                }
            </div>
        )
    }
}