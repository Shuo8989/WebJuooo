import React from "react";
import 'antd/dist/antd.css';
import { Drawer, Radio } from 'antd';
import ListBodyWrapper from "antd/lib/transfer/renderListBody";
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import showDetailList from '../../../store/actionCreator/Theatre/ShowDetailList'; 
const RadioGroup = Radio.Group;
 class SeatPurchase extends React.Component {
  state = { visible: false, placement: 'bottom' };
  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };

  onClose = () => {
    this.setState({
      visible: false,
    });
  };

  onChange = e => {
    this.setState({
      placement: e.target.value,
    });
  };

  render() {
    //   console.log(this.props);
      let pricelist=this.props.PriceList;
    return (
      <div>
        <div className="showDetail-footer">
            <span>
                <img src={require("../../../assets/Theatre/img/icon-listen.png")}/>
                <p>客服</p>
            </span>
        <RadioGroup
          style={{ marginRight: 8 }}
          defaultValue={this.state.placement}
          onChange={this.onChange}
        >
        </RadioGroup>
        <p className="selectbuy" type="primary" onClick={this.showDrawer}>
            选座购买
        </p>
        <Drawer
          placement={this.state.placement}
          closable={false}
          onClose={this.onClose}
          visible={this.state.visible}
          height={450}
        >
          <div >
              <p className="seat-chase-title">选择日期</p>
              {this.props.project_time.map((v,i)=>(
              <span key={i} onClick={this.Change.bind(this)} className="seat-chase-box" >
                  {v.project_time}
              </span>
              ))}
          </div>
          <div >
              <p className="seat-chase-title">选择场次</p>
              {this.props.project_time.map((v,i)=>(
              <span key={i} className="seat-chase-box" >
                  {v.session_time}
              </span>
               ))}
          </div>
          <div >
             <p className="seat-chase-title">选择价格</p>
             {pricelist.list?pricelist.list.map((v,i)=>(
                <span key={i} onClick={this.Change.bind(this)} className="seat-chase-box" >
                    {v.price}元
                </span>
             )):null}
          </div>
          <p className="selectBuy">选座购买</p>
        </Drawer>
        </div>
      </div>
    );
}
    Change(e){
        console.log(e.target);
        e.target.className="activeStyle";
    }
    componentDidMount(){
        this.props.getSeatChase();
    
    }
}
function mapActionToState(state){
    console.log(state.ShowDetailList.PriceList)
    return{
        PriceList:state.ShowDetailList.PriceList,
        
    }
}
export default connect(mapActionToState,(dispatch)=>bindActionCreators(showDetailList,dispatch))(SeatPurchase)
