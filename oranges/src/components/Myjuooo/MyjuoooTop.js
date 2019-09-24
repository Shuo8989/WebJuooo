import React from 'react';
import { Icon } from 'antd';
import '../../assets/myjuooo/css/MyjuoooTop.css'
import {NavLink,withRouter} from "react-router-dom";
import { Popover, Button } from 'antd';
const content = (
    <div className={"MyjuoooTop_point_box"}>
        <p className={"MyjuoooTop_points"}><Icon type="home" />首页</p>
        <p className={"MyjuoooTop_points Myjuooo_points_a"}><Icon type="user" />我的聚橙</p>
    </div>
);

const buttonWidth = 70;
class MyjuoooTop extends React.Component{
    constructor(){
        super()
        this.state={
            bodysshow : "none",
            change : false
        }
    }
    render(){
        return(
            <div className={"MyjuoooTop"}>
                <Icon className={"MyjuoooTopIcon"} type="left" onClick={()=>{this.props.history.goBack()}} />
                {this.props.msg}
                <div style={{display:this.props.dis}}>
                    <Popover placement="bottomRight" content={content} trigger="click">
                        <Icon className={"MyjuoooTopIcon"}  type="ellipsis" />
                    </Popover>
                </div>
                <div  style={{display:this.props.dis === "block"? "none" : "block"}}></div>
            </div>
        )
    }
}
export default withRouter(MyjuoooTop)

