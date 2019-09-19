import React from 'react';
import {
    NavLink
} from 'react-router-dom';
import '../../assets/Theatre/theatre.css';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Theatre from '../../store/actionCreator/Theatre';
class TheatreInfo extends React.Component{
    render(){
        console.log(this.props)
        const {TheatreList}=this.props.TheatreList
        console.log(TheatreList);
        return(
            <div>
                {TheatreList.map((v,i)=>(
                <div key={i} className="theater-body-main">
                    <div className="theater-info-shows">
                        <div className="theater-info">
                            <NavLink to={{
                                pathname:"/theatre/index",
                                state:{
                                    id:v.id
                                }
                                }} className="theater-pic-name-count">
                                <img className="theater-pic" src={v.pic} alt=""/>
                                <div>
                                    <p className="theater-name">{v.name}</p>
                                    <p className="theater-count">{v.count}场在售演出</p>
                                </div>
                            </NavLink>
                            <NavLink to={{
                                pathname:"/theatre/index",
                                state:{
                                    id:v.id
                                }
                                }}><img className="theater-more-btn" src={require("../../assets/Theatre/img/0.png")} alt=""/></NavLink>
                        </div>
                          {/* /**轮播图部分 */}
                        <div  className="theater-slide">
                        {v.showList.map((v,n)=>(
                            <div key={n} className="theater-slide-info">
                                <div className="theater-slide-date">
                                    <p>{v.show_time}</p>
                                    <span></span>
                                </div>
                                <a><img className="show-pic" src={v.pic} alt=""/></a>
                            </div>
                        ))}
                        </div>
                    </div>
                </div>
                ))}  
            </div>
        )
    }
    componentDidMount(){
       this.props.getTheatreInfo();
    }
}
    function mapStateToProps(state){
        console.log(state.Theatre);
        return{
            TheatreList:state.Theatre
        }
    }
export default connect(mapStateToProps,(dispatch)=>bindActionCreators(Theatre,dispatch))(TheatreInfo);
