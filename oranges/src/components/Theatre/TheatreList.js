import React from 'react';
import "../../assets/Theatre/TheatreList.css";
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux';
import {withRouter}from 'react-router-dom';
import {bindActionCreators} from 'redux';
import changeTheatreList from '../../store/actionCreator/Theatre/TheatreList';
class TheatreList extends React.Component{
    render(){
        const {TheatreListInfo}=this.props.TheatreListInfo.TheatreList;
        console.log(this.props.location.state.id,TheatreListInfo);
        const theatreinfo=this.props.location.state.id
        const data=TheatreListInfo.find((v,i)=>v.id===theatreinfo);
        console.log(data);
        return(
             <div>
            {
                data?(
            <>
                <div className="navbar">
                    <NavLink to="/theatre/theatreList"><span className="icon-menu-left"> &lt;</span></NavLink> 
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
               <p className="title">热门演出</p>
               <div className="list-wrap">
                   {data.showList.map((v,i)=>(
                    <NavLink to="/ticket" key={i} className="show-item">
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
                    <NavLink className="link" to="/Theatre/showList">
                        查看全部演出
                    </NavLink>
                    <i>&gt;</i>
                </div>
            </div>
        ) 
    }
    componentWillMount(){
        this.props.getTheatreInfo();
    }
    componentDidMount(){
        // console.log(this.props.TheatreList.TheatreListInfo);
        this.props.getTheatreInfo();
    }
}
function mapStateToProps(state,props){
    console.log(state);
    return{
        TheatreListInfo:state
    }
}
export default connect(mapStateToProps,(dispatch)=>bindActionCreators(changeTheatreList,dispatch))(withRouter(TheatreList));