import React,{Component} from 'react';
import {NavLink} from 'react-router-dom';
export default class PerformanceDetails extends Component{
    render(){
        let sharedata=this.props.shareData;
        //演出详情下面时间渲染需要字符串截取 然后在以/分割
        //起始时间
        let str=sharedata.static_data.show_time_data.show_time_start_display||'0';
        let showTime=str.substring(5,10).split('.').join("/");
        //结束时间
         let str1=sharedata.static_data.show_time_data.show_time_end_display||'0';
         let showTime1=str1.substring(5,10).split('.').join("/");
        return(
            <>
                <div className="brief-primary">
                    <img className="bg-pic" src={sharedata.share_data.share_pic}/>
                    <div className="bg"></div>
                    <div className="show-detail-top">
                        <NavLink to="/theatre/theatreList" className="top-left iconfont iconfanhui1"></NavLink>
                        <span >演出详情</span>
                        <span className="top-right">
                            <i>...</i>
                            <i>???</i>
                        </span>
                </div>
                <div className="show-detail-top-info">
                        <img className="show-detail-top-info-pic" src={sharedata.share_data.share_pic}/>
                        <div className="brief-primary-content-info">
                            <p className="brief-primary-content-name">{sharedata.share_data.share_title}</p>
                            <p className="brief-primary-price">￥{sharedata.static_data.price_range}</p>
                        </div>
                    </div>
                </div>
                {/* 演出详情下面部分 */}
                <div className="brief-secondary">
                    <div className="brief-secondary-info">
                        <p className="brief-secondary-date">{showTime} - {showTime1} <i><img className="brief-secondary-date-icon" src={require("../../../assets/Theatre/img/icon-jiao.png")}/></i></p>
                        <p className="brief-secondary-address">{sharedata.static_data.city.city_name} | {sharedata.static_data.venue.venue_name}</p>
                    </div>
                    <div className="brief-secondary-pointer">
                    </div>
                </div>
            </>
        )
    }
}