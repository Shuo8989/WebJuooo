import React from 'react';
import '../../assets/Theatre/ShowDetail.css';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import showDetailList from '../../store/actionCreator/Theatre/ShowDetailList';
import RelatedRecommend from './public/RelatedRecommendations';
import PerformanceIntroduction from './public/PerformanceIntroduction';
import TourCity from './public/TourCity';
import Arrangement from './public/Arrangement';
import PerformanceDetails from './public/PerformanceDetails';
import SeatPurchase from './public/SeatPurchase';


class ShowDetail extends React.Component{
    constructor(props){
        super(props);
        this.state={
             showid:this.props.match.params.id,
        }
    }
    render(){
        //路由传过来的数据
        // console.log(this.props.ShowDetailInfo.item_list);
        let headeInfo=this.props.ShowDetailInfo||{};
        let static_data=headeInfo.static_data||{};
        let show_list=static_data.show_notice||{};
        //演出详情
        let shareData=this.props.ShowDetailInfo;
        //详情安排
        let admission=this.props.ShowDetailInfo.static_data;
        //巡演城市获取数据
        let TourCityList=this.props.TourCityList.tour_list;
        //演出介绍
        let  ShowIntroduction=this.props.ShowDetailInfo.static_data.show_desc;
        //相关推荐获取数据
        let ShowRecommend=this.props.ShowRecommend;
        //购买选座
        let date=this.props.ShowDetailInfo.item_list;
       return(
            <div>
               <div className="bg-warp"> 
                {/* 演出详情位置 */}
                {shareData.share_data.share_pic?<PerformanceDetails shareData={shareData}></PerformanceDetails>:null}
                {/* plus会员卡提示框 */}
                <div className="detail-plus-tips">
                    <span className="detail-plus-card">橙PLUS卡</span>
                    <span className="detail-plus-content">开通送￥100 最高省{static_data.discount_max_price}元</span>
                    <span className="detail-plus-open-card">立即开卡<i>&gt;</i></span>
                </div>
                {/* 详情安排 */}
                {admission.tips?<Arrangement Admission={admission.tips.desc} support={admission.support.list}></Arrangement>:null}
                {/* 巡演城市 */}
                {TourCityList?<TourCity tourCity={TourCityList}></TourCity>:null}
                {/* 演出介绍*/}
                {ShowIntroduction?<PerformanceIntroduction showIntroduction={ShowIntroduction.desc}></PerformanceIntroduction>:null}
                {/*温馨提醒 */}
                <div className="remind">
                    <p className="tour-cities-top">
                        <span className="tour-cities-top-name">温馨提醒</span>
                        <span className="tour-cities-top-number"><img className="brief-secondary-date-icon" src={require("../../assets/Theatre/img/icon-jiao.png")}/></span>
                    </p>
                    <div className="remind-list">
                        {show_list.list?show_list.list.map((v,i)=>(
                            <span key={i} className="remind-info">
                                <i></i>
                                <span>{v.title}</span>
                            </span>
                            )):null} 
                    </div>
                </div>
                {/* 相关推荐 */}
                {ShowRecommend.list?<RelatedRecommend showRecommend={ShowRecommend.list}></RelatedRecommend>:null}
                {/* 查看更多演出 */}
                {/* 底部栏 */}
                <SeatPurchase project_time={date}></SeatPurchase>
            </div>
        </div>
        )
    }
    componentDidMount(){
        this.props.getHeadeInfo({id:this.state.showid});
        this.props.getTourCity();
        this.props.getShowRecommend();
    }
}
function mapActionToState(state){
    return{
        ShowDetailInfo:state.ShowDetailList.ShowDetailInfo,
        TourCityList:state.ShowDetailList.TourCityList,
        ShowRecommend:state.ShowDetailList.ShowRecommend
    }
}
export default connect(mapActionToState,(dispatch)=>bindActionCreators(showDetailList,dispatch))(withRouter(ShowDetail));