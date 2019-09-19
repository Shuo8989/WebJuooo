import React from 'react';
import Swiper from 'swiper';
import 'swiper/dist/css/swiper.min.css';
import '../../assets/Home/Tourlist.scss'
import {NavLink} from 'react-router-dom';
class Tourlist extends React.Component{
    render(){
        const tourlist=this.props.tourlist.slice(0,6)
        return (
            <div className={'tour-block tour-wrap'}>
                <div className={'tour-block__wrap'}>
                    <h3>巡回演出</h3>
                    <NavLink to={'/Tour/moreTourShowList'} className={'tour-block__lab-a'}>
                        <img src={require("../../assets/img/gt.png")} alt={''} />
                    </NavLink>
                </div> 
                <div className={'tour-block__list'}>
                    <div className="swiper-container tour-swiper_list">
                        <div className="swiper-wrapper tour-swiper-wrapper">
                                {
                                    tourlist.map((v,i)=>{
                                        const str = v.tour_show_url.replace('https://m.juooo.com/tour/tourshowinfo?sid=',"")
                                        return (
                                            <div key={i} className="swiper-slide tour-swiper-slide">
                                                <NavLink to={'/ticket/'+str} className={'tour-block__list__wrap'}>
                                                    <div className={'tour-block__list__wrap__item '}>
                                                        <img src={v.pic} alt='' />
                                                    </div>
                                                    <h3 className={'tour-block__list__wrap__title '}>{v.show_name }</h3>
                                                    <p className={'tour-block__list__wrap__num'}>{v.schedular_num+'场巡演'}</p>
                                                </NavLink>
                                            </div>
                                        )
                                    })
                                }
                        </div>
                    </div>
                </div> 
            </div>
        )
    }
    componentDidMount(){
       new Swiper('.tour-swiper_list', {
        loop:true,
        slidesPerView:'auto',
        centeredSlides:true,
        spaceBetween: 30,
        slideActiveClass:'.tour-swiper-slide-active'
        });
    }
}
export default Tourlist