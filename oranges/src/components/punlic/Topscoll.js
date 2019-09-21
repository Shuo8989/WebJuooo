import React from 'react';
import { Icon } from 'antd';
import '../../assets/Punlicnav/Topsc0ll.css';
import {Link,withRouter} from "react-router-dom";
import { Popover,Modal} from 'antd';
const content = (
    <div className={"MyjuoooTop_point_box"}>
        <p className={"MyjuoooTop_points"}><Icon type="home" /> 
            <Link id={"popoverLink"} style={{padding:"0",color:"#212121"}} to={"/"}>首页</Link>
        </p>
        <p className={"MyjuoooTop_points Myjuooo_points_a"}><Icon type="user" /> 
            <Link id={"popoverLink"} style={{padding:"0",color:"#212121"}} to={"/myjuooo/myjuooo"}>我的聚橙</Link>
        </p>
    </div>
);
class MyjuoooTop extends React.Component{
    state = { visible: false };
    showModal = () => {
        this.setState({
            visible: true,
        });
    };
    handleOk = e => {
        this.setState({
            visible: false,
        });
    };
    handleCancel = e => {
        this.setState({
            visible: false,
        });
    };
    render(){
        return(
            <div className={"MyjuoooTop"}>
                <Icon className={"MyjuoooTopIcon"} type="left" onClick={()=>{this.props.history.goBack()}} />
                {this.props.msg}
                <div style={{display:this.props.dis}}>
                    <Popover onClick={this.showModal} placement="bottomRight" content={content} trigger="click">
                        <Icon className={"MyjuoooTopIcon"}  type="ellipsis" />
                    </Popover>
                </div>
                <div   style={{display:this.props.dis === "block"? "none" : "block"}}></div>
                <Modal
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                    width={"0"}
                    footer={false}
                    closable={false}
                >
                </Modal>
            </div>
        )
    }
}
export default withRouter(MyjuoooTop)

