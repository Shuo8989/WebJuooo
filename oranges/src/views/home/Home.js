//最大的首页组件
import React from 'react';
import { connect } from 'react-redux';//高阶组件
import {bindActionCreators} from 'redux'//绑定并执行一次函数
import Banner from '../../components/Home/Banner'//轮播图组件
import homeCreator from '../../store/actionCreator/Home';//首页的数据请求方法
class Home extends React.Component{
    componentDidMount(){
        this.props.getClassifyHome({
            city_id: localStorage.city_id || 0,
            city_abridge:localStorage.city_abridge||""
        })
    }
    render(){
        return(
            <div className={'home'}>
                <div className={'banner'}>
                    {//轮播图
                        this.props.classifyHome.slide_list?<Banner slide_list={this.props.classifyHome.slide_list} ></Banner>:null
                    }
                </div>
            </div>
        )
    }
}

export default connect(
    state=>({
        classifyHome:state.home.ClassifyHome,
    })
    ,dispatch=>bindActionCreators(homeCreator,dispatch)
    )(Home)
