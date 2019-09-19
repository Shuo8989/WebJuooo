import React,{Component} from 'react';
import '../../assets/Home/Advertion-wrap.scss';
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css'
import {
    NavLink,
    withRouter
} from 'react-router-dom';
 class Advertion extends Component{
    componentDidMount(){
        new Swiper ('.home-banner-wrap', {
            direction: 'horizontal', 
            loop: true, 
            speed:300,
            autoplay : {
                delay:3000
                },
            pagination: {
                el: '.banner-swiper-pagination',
            },
        })  
    }
    render(){
        const classifyHome=this.props.classifyHome;
        return(
            <div className={'advertion-wrap'}>
                <div className={"lable-item"}>
                    {
                        classifyHome.classifyHome.classify_list.map((v,i)=>(
                            <div key={i} className={"label-item__block"}>

                                    <NavLink   className={"label-item__block__column"} to={'/show/showsLibrary'}>
                                        <img src={v.pic} ait=""/>
                                        <span>{v.name}</span>
                                    </NavLink>

                            </div>
                        ))
                    }
                </div>
                {
                    classifyHome.vipHomeSchedular.priorList?(
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
                            <div className="swiper-container home-banner-wrap swiper-container-horizontal swiper-container-android">
                                <div className="swiper-wrapper">
                                    {
                                        classifyHome.vipHomeSchedular.priorList.map((v,i)=>{
                                            return (
                                            <div className="swiper-slide banner-swiper-slide" key={i} >
                                                <NavLink to={''} className={'vip-ahead__list'}>
                                                    <img  src={v.pic} alt=""/>
                                                </NavLink>
                                                <span className={'vip-ahead__list__lab'}>开售提醒</span>
                                            </div> 
                                            )
                                        })
                                    }
                                </div>
                                <div className="swiper-pagination banner-swiper-pagination"></div>
                            </div>
                        </div> 
                    ):null
                }
                <div className={"operation"}>
                    <ul className={"operation__ul operation--top"}>
                        <li className={'operation__item'}>
                            <NavLink to={''} className={'operation__item__block1'}>
                                <div>
                                    <h3 className={'operation__item__block__title'}>{classifyHome.classifyHome.operation_list[0].name}</h3>
                                    <p dangerouslySetInnerHTML={{__html:classifyHome.classifyHome.operation_list[0].describe }}></p>
                                </div>
                                <div className={'operation__item__block__icon'}>
                                    <img src={classifyHome.classifyHome.operation_list[0].pic} alt=""/>
                                </div>
                            </NavLink>
                        </li>
                        <li className={'operation__item'}>
                            <NavLink to={''} className={'operation__item__block1'}>
                                <div>
                                    <h3 className={'operation__item__block__title'}>{classifyHome.classifyHome.operation_list[1].name}</h3>
                                    <p dangerouslySetInnerHTML={{__html:classifyHome.classifyHome.operation_list[1].describe }}></p>
                                </div>
                                <div className={'operation__item__block__icon'}>
                                    <img src={classifyHome.classifyHome.operation_list[1].pic} alt=""/>
                                </div>
                            </NavLink>
                        </li>
                    </ul>
                    <ul className={"operation__ul operation--bottom"}>
                        <li className={'operation__item'}>
                            <NavLink to={''} className={'operation__item__block2'}>
                                <div>
                                    <h3 className={'operation__item__block__title'}>{classifyHome.classifyHome.operation_list[2].name}</h3>
                                    <p dangerouslySetInnerHTML={{__html:classifyHome.classifyHome.operation_list[2].describe }}></p>
                                </div>
                                <div className={"operation__item__block__preferential"}>
                                    <img src={classifyHome.classifyHome.operation_list[2].pic} alt=""/>
                                </div>
                            </NavLink>
                        </li>
                        <li className={'operation__item'}>
                            <NavLink to={''} className={'operation__item__block2'}>
                                <div>
                                    <h3 className={'operation__item__block__title'}>{classifyHome.classifyHome.operation_list[3].name}</h3>
                                    <p dangerouslySetInnerHTML={{__html:classifyHome.classifyHome.operation_list[3].describe }}></p>
                                </div>
                                <div className={"operation__item__block__preferential"}>
                                    <img src={classifyHome.classifyHome.operation_list[3].pic} alt=""/>
                                </div>
                            </NavLink>
                        </li>
                        <li className={'operation__item'}>
                            <NavLink to={''} className={'operation__item__block2'}>
                                <div>
                                    <h3 className={'operation__item__block__title'}>{classifyHome.classifyHome.operation_list[4].name}</h3>
                                    <p dangerouslySetInnerHTML={{__html:classifyHome.classifyHome.operation_list[4].describe }}></p>
                                </div>
                                <div className={"operation__item__block__preferential"}>
                                    <img src={classifyHome.classifyHome.operation_list[4].pic} alt=""/>
                                </div>
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}
export default withRouter(Advertion)