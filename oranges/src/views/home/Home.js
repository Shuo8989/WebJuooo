//最大的首页组件
import React from 'react';
import { connect } from 'react-redux';//高阶组件
import {bindActionCreators} from 'redux'//绑定并执行一次函数
import Banner from '../../components/Home/Banner'//轮播图组件
import Advertion from '../../components/Home/Advertion'//广告组件
import Hotlist from '../../components/Home/Hotlist'//热门演出组件
import Tourlist from '../../components/Home/Tourlist'  //巡回演出组件
import vipblock from '../../components/Home/Vipblock' //vipblock组件
import homeCreator from '../../store/actionCreator/Home';//首页的数据请求方法
import Vipblock from '../../components/Home/Vipblock';
class Home extends React.Component{
    componentDidMount(){
        this.props.getClassifyHome({
            city_id: localStorage.city_id || 0,
            city_abridge:localStorage.city_abridge||"",         
        })
         this.props.getVipHomeSchedular()
         this.props.getHotsRecommendList()
         this.props.getTourRecommendList()
    }
    render(){
        const propst=this.props
        return(
            <div className={'home'}>
                <div className={'banner'}>
                    {//轮播图
                        propst.classifyHome.slide_list?<Banner banner_list={propst.classifyHome.slide_list}></Banner>:null
                    }
                </div>
                    {
                        propst.classifyHome.classify_list?<Advertion classifyHome={propst}></Advertion>:null
                    }
                    {
                        propst.HotsShowlist.hots_show_list?<Hotlist hotlist={propst.HotsShowlist.hots_show_list} ></Hotlist>:null
                    }
                    {
                        propst.Tourshowlist.tour_show_list?<Tourlist tourlist={propst.Tourshowlist.tour_show_list}></Tourlist>:null
                    }
                    {
                        propst.vipHomeSchedular.discountList?<Vipblock {...this.props.vipHomeSchedular}></Vipblock>:null
                    }
            </div>
        )
    }
}

export default connect(
    state=>({
        classifyHome:state.home.ClassifyHome,
        vipHomeSchedular:state.home.vipHomeSchedular,
        HotsShowlist:state.home.HotsShowlist,
        Tourshowlist:state.home.Tourshowlist
    })
    ,dispatch=>bindActionCreators(homeCreator,dispatch)
    )(Home)

