import React from 'react';
import {
    NavLink
} from 'react-router-dom';
import '../../assets/Theatre/theatre.css';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Theatre from '../../store/actionCreator/Theatre';
import Swiper from 'swiper';
import 'swiper/dist/css/swiper.min.css';
class TheatreInfo extends React.Component{
    render(){
        const {TheatreList}=this.props.TheatreList
        
        return(
            <div>
                {TheatreList.map((v,i)=>(
                <div key={i} className="theater-body-main">
                    <div className="theater-info-shows">
                        <div className="theater-info">
                            <NavLink to={"/theatre/index/"+v.id} className="theater-pic-name-count">
                                <img className="theater-pic" src={v.pic} alt=""/>
                                <div>
                                    <p className="theater-name">{v.name}</p>
                                    <p className="theater-count">{v.count}场在售演出</p>
                                </div>
                            </NavLink>
                            <NavLink to={"/theatre/index/"+v.id}><img className="theater-more-btn" src={require("../../assets/Theatre/img/0.png")} alt=""/></NavLink>
                        </div>
                          {/* /**轮播图部分 */}
                        <div  className="swiper-container theater-slide">
                        <div className="swiper-wrapper">
                        {v.showList.map((v,n)=>(
                            <div key={n} className="swiper-slide theater-slide-info">
                                <div className="theater-slide-date">
                                    <p>{v.show_time}</p>
                                    <span></span>
                                </div>
                                <a><img className="show-pic " src={v.pic} alt=""/></a>
                            </div>
                        ))}
                         </div>
                        </div>
                    </div>
                </div>
                ))}  
            </div>
        )
    }
    componentDidUpdate(){
        new Swiper('.theater-slide',{
            slidesPerView:"auto",
            setWrapperSize :true,
            centeredSlides:false
        });
    }
    componentDidMount(){
       this.props.getTheatreInfo();
    //    setTimeout(function(){
    //     new Swiper('.theater-slide',{
    //             slidesPerView:"auto",
    //             setWrapperSize :true,
    //             centeredSlides:false
    //         });
    //    },500) 
    }
}
    function mapStateToProps(state){
        return{
            TheatreList:state.Theatre
        }
    }
export default connect(mapStateToProps,(dispatch)=>bindActionCreators(Theatre,dispatch))(TheatreInfo);
