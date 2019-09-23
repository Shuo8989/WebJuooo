import React from 'react'
import '../../assets/VipCard/VipCardDesc.scss'
import MyjuoooTop from '../../components/punlic/Topscoll.js'
import axios from 'axios'
import { NavLink, Link, withRouter } from 'react-router-dom';
// import vipCardCreator from '../../store/actionCreator/Vip/vipCard.js'
import { connect } from 'react-redux';//高阶组件
import { bindActionCreators } from 'redux'//绑定并执行一次函数
import cardBg from '../../assets/img/card-bg.png'
import timesBg from '../../assets/img/times-card-bg.png'


class VipCardDesc extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cardInfo: {},
            cardExchangeList: []
        }
    }
    // async componentDidMount() {
    //     console.log(this.props.match.params.id);
    //      const {data}=await axios.get("https://api.juooo.com/Card/index/cardInfo?group_id=228&version=6.0.5&referer=2");
    //     // console.log(data);
    //    const arr1= Object.keys(data.card_group_info);
    //    const arr2= Object.values(data.card_group_info);
    //    const myTitle=[];
    //    const obj={}; 
    //    for(var i=0;i<arr1.length;i++){
    //         for(var j=0;i<arr2.length;j++){
    //             obj[arr1[i]]=arr2[j]
    //         }
    //    }
    //     console.log(obj);
    //     const cardExchangeList=await axios.get("https://api.juooo.com/Card/index/getCardExchangeList?group_id=228&version=6.0.5&referer=2")
    //     // console.log(cardExchangeList.data);


    //     this.setState({
    //         cardInfo:this.state.cardInfo.push(data),
    //         cardExchangeList:this.state.cardExchangeList.push(cardExchangeList.data),
    //         // cardInfo:[1,2,3],
    //         // cardExchangeList:[6,6,6]
    //     })
    //     console.log(this.state.cardInfo);
    //     console.log(this.state.cardExchangeList);

    // }
    render() {
        return (
            <div className="plus-wrapper">
                <MyjuoooTop msg={this.state.cardInfo.name} dis={"block"}></MyjuoooTop>
                <section>
                    <div className="card-wrap">
                        <img src={this.props.match.params.id === "228" ? cardBg : timesBg} alt="" />
                        <div className="card-name">
                            <span className="card-name-pri">{this.state.cardInfo.name}</span>
                            <span className="card-name-sec">次卡</span>
                        </div>
                        <div className="card-limit">
                            <span className="card-limit-price">￥{this.state.cardInfo.card_price}</span>
                            <span className="card-limit-date">有效期：{this.state.cardInfo.avail_mouth}个月</span>
                        </div>
                    </div>
                    <div className="btn-mid">
                        <button>
                            立即购卡
                        </button>
                    </div>
                    <div className="tips">
                        <span className="change-tip">{this.state.cardInfo.use_limit}张兑换券</span>
                        <span className="tip-rules">使用规则</span>
                    </div>
                    <div className="entry-block">
                        <div className="en-title">演出兑换</div>
                        {this.state.cardExchangeList.map(v => (
                            <div className="en-list">
                                <img src={v.pic} alt="" />
                                <div className="item-info">
                                    <div className="info-date">{v.month_day}</div>
                                    <div className="info-name">{v.schedular_name}</div>
                                    <div className="info-place">{ (v.venue_name).substr(0,2)+" | "+(v.venue_name).substr(2)}</div>
                                    <div className="info-ratio">{v.leastDiscount} <span>起</span> </div>
                                </div>
                            </div>
                        ))}


                        <div className="more">
                            <button>
                                查看更多演出
                                <i></i>
                            </button>

                        </div>
                    </div>
                </section>
                <footer className="tab">
                    <button className="ju-btn">
                        立即购卡
                    </button>
                </footer>
            </div>
        )
    }
    back() {
        this.props.history.go(-1)
    }

    async componentDidMount() {
        //获取表头数据
        const { data } = await axios.get(`https://api.juooo.com/Card/index/cardInfo?group_id=${this.props.match.params.id}&version=6.0.5&referer=2`);
        // let arr=[];//存放卡皮表头信息
        // for (const i in data.card_group_info) { //遍历存放
        //     if (data.card_group_info.hasOwnProperty(i)) {
        //         arr.push({[i]:data.card_group_info[i]})
        //     }
        // }
        const cardExchangeList = await axios.get(`https://api.juooo.com/Card/index/getCardExchangeList?group_id=${this.props.match.params.id}&version=6.0.5&referer=2`)
        // console.log();
        this.setState({
            cardInfo: data.card_group_info,
            cardExchangeList: cardExchangeList.data.data
        })
        console.log(this.state.cardInfo);
        console.log(this.state.cardExchangeList);
    }
}

export default withRouter(VipCardDesc) 