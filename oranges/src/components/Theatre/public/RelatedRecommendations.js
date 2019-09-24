import React from "react";
export default class RelatedRecommend extends React.Component{
    render(){
        return(
        <div className="recommend">
        <p className="tour-cities-top">
            <span className="tour-cities-top-name">相关推荐</span>
        </p>
        <div className="recommend-list-wrap">
            {this.props.showRecommend.map((v,i)=>(
            <a className="recommend-show-item" key={i}>
                <img src={v.pic} alt=""/>
                <div className="recommend-show-right">
                    <p className="recommend-date">{v.show_time_top}</p>
                    <p className="recommend-name">{v.name}</p>
                    <p className="recommend-address">{v.venue_name}</p>
                    <p className="recommend-price">
                        <span>￥</span>
                        <span className="recommend-num">{v.min_price}</span>
                        <span>起</span>
                    </p>
                </div>
            </a>
            ))}
        </div>
        </div>
        )
    }
}
