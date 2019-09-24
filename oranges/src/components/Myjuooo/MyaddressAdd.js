import React from 'react';
import { Icon } from 'antd';
import {NavLink,withRouter} from "react-router-dom";
import address from "../../assets/myjuooo/img/Myjuooo_address.png";
import MyjuoooMy from "../../views/myjuooo/Myjuooo";

class Myaddress extends React.Component{
    constructor(){
        super();
        this.state={

        }
    }
    render(){
        console.log(this.props);
        return(
            <div className={"Myaddress_add"}>
                <div className={"Myaddress_add_top"} onClick={this.cha.bind(this)}>
                    <span>{"<"}</span>
                    <span>添加地址</span>
                    <span></span>
                </div>
                <div className={"Myaddress_center"}>
                    <div className={"Myaddress_cen"}>
                        <span>收货人</span>
                        <input placeholder="请输入收货人姓名"/>
                    </div>
                    <div className={"Myaddress_cen"}>
                        <span>手机号</span>
                        <input placeholder="请输入收货人手机号"/>
                    </div>
                    <div className={"Myaddress_cen"}>
                        <span>所在地区</span>
                        <input placeholder="请选择收货人所在地区"/>
                        <span className={"Myaddress_cen_list"}><Icon type="right"/></span>
                    </div>
                    <div className={"Myaddress_cen Myaddress_cen_last"}>
                        <span>详细地址</span>
                        <input placeholder="请输入街道、楼牌号等"/>
                    </div>
                </div>
                <div className={"Myaddress_btnbox"}>
                    <div className={"Myaddress_btn"}>保存</div>
                </div>
            </div>
        )
    }
    cha(){
        this.props.click();
    }
}
export default withRouter(Myaddress)