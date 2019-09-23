import React from 'react';
import "../../assets/Theatre/TheatreList.css";
import {NavLink,withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import changeTheatreList from '../../store/actionCreator/Theatre/TheatreList';
class TheatreList extends React.Component{
    render(){
        console.log(this.props);
        const {TheatreListInfo}=this.props.TheatreListInfo.TheatreList;
        console.log(this.props.match.params.id,TheatreListInfo);
        const theatreinfo=this.props.match.params.id;
        const data=TheatreListInfo.find((v,i)=>v.id==theatreinfo);
        console.log(data);
        return(
             <div className="theatreList-bg">
            {
                data?(
            <>
                <div className="navbar">
                    <NavLink to="/theatre/theatreList"><span className="icon-menu-left iconfont iconfanhui1" ></span></NavLink> 
                    <span className="center">{data.name}</span>
                    <NavLink to={"/"}><img className="icon-option-horizontal" src={require("../../assets/Theatre/img/0.png")} alt=""/></NavLink>
                </div>
                <a><img className="link-pic" src={data.pic} alt=""/></a>
                <div className="category">
                    <a href=""><img src={require("../../assets/Theatre/img/icon-show.png")}/><p>演出</p></a>
                    <a href=""><img src={require("../../assets/Theatre/img/icon-calendar.png")}/><p>日历</p></a>
                    <a href=""><img src={require("../../assets/Theatre/img/icon-theater.png")}/><p>剧院</p></a>
                    <a href=""><img src={require("../../assets/Theatre/img/icon-offer.png")}/><p>特惠</p></a>
                </div>
               <p className="theatreList-hot-title">热门演出</p>
               <div className="list-wrap">
                   {data.showList.map((v,i)=>(
                    <NavLink to={"/ticket/"+v.id} key={i} className="show-item">
                        <img src={v.pic} alt=""/>
                        <div className="show-right">
                            <p className="name">{v.schedular_name}</p>
                            <p className="date">{v.show_time}</p>
                            <p className="address">{data.name}</p>
                            <p className="price">
                                <span>￥</span>
                                <span className="num">380</span>
                                <span>起</span>
                            </p>
                        </div>
                    </NavLink>
                    ))}
               </div>
            </>
                ):null}
                <div className="load-more">
                    <NavLink className="link" to="/show/showsLibrary">
                        查看全部演出
                         <i>&gt;</i>
                    </NavLink>
                   
                </div>
            </div>
        ) 
    }
    componentDidMount(){
        this.props.getTheatreInfo();
    }
}
function mapStateToProps(state){
    console.log(state);
    return{
        TheatreListInfo:state
    }
}
export default connect(mapStateToProps,(dispatch)=>bindActionCreators(changeTheatreList,dispatch))(withRouter(TheatreList));