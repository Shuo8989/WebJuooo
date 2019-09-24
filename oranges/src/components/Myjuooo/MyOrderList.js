import React from 'react';
import {withRouter} from "react-router-dom";
import '../../assets/myjuooo/css/MyOrderList.css'
import Topscoll from '../punlic/Topscoll'

class MyOrderList extends React.Component{
    render(){
        return(
            <div>
                <Topscoll msg={"我的订单"} dis={"block"}></Topscoll>
                <div className={"Myorder_noList"}>暂无订单记录</div>
            </div>
        )
    }
}
export default withRouter(MyOrderList)