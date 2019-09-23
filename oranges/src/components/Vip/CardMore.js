import React from 'react'
import vipCardCreator from '../../store/actionCreator/Vip/vipCard.js'
import { NavLink, withRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';//高阶组件
import { bindActionCreators } from 'redux'//绑定并执行一次函数
import VipCardDesc from "../../views/VipCard/VipCardDesc.js"
class CardMore extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            myCardList: [] //处理后台数据格式,方便遍历
        }
    }
    render() {
        return (
            <React.Fragment>
                {
                    this.state.myCardList.map((v, i) => (
                        // console.log(v),
                        <div className="card" key={i}>
                            <div className="card-title">
                                {v.title}
                                {v.subTitle ? (<span className="save-desc">
                                    {v.subTitle}
                                </span>) : ""}
                            </div>
                            {
                                v.list.map((v, i) => (
                                    // console.log(v.goUrl),
                                    <React.Fragment key={v.id}>
                                        <NavLink to={v.goUrl === "/plus/index" ? "/plus/index" : `/Cardproduct/buyShow/card_id/` + v.id}>
                                            <div className="card-list" >
                                                <div className="orange-plus">
                                                    <div className="card-cell"><img src={v.card_image} alt="" /></div>
                                                    <div className="card-cell-desc">
                                                        <div className="card-cell-desc-top">{v.name}</div>
                                                        <div className="card-cell-desc-middle">有效期:{v.avail_mouth ? `${v.avail_mouth}个月` : (v.effect_end_time === "1970/01/01" ? "长期有效" : v.effect_end_time)}</div>
                                                        <div className="card-cell-desc-bottom">
                                                            <span className="card-price">￥{v.card_price}</span>
                                                            <span className="card-give">{v.use_limit ? `兑换券${v.use_limit}张` : "赠送VIP+"}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </NavLink>,
                                         <Route path="/Cardproduct/buyshow/card_id/:id" component={VipCardDesc}/>
                                    </React.Fragment>

                                ))
                            }

                        </div>
                    ))
                }
            </React.Fragment>

        )
    }




    async componentDidMount() {
        await this.props.getAdList();
        await this.props.getCardList();
        // console.log(this.props.cardList);
        let myCardList = [];
        let obj1 = {}; //空对象存要的数据
        let obj2 = {}; //空对象存要的数据
        let obj3 = {}; //空对象存要的数据
        obj1.title = "储值卡";
        obj2.title = "品类 • 次卡";
        obj3.title = "城市 • 次卡";

        obj1.subTitle = this.props.cardList.store_title;
        obj3.subTitle = this.props.cardList.city_title;

        obj1.list = this.props.cardList.store_card;
        obj2.list = this.props.cardList.cate_card;
        obj3.list = this.props.cardList.once_card;

        obj1.list.map(v => v.goUrl = "/plus/index")
        obj2.list.map(v => v.goUrl = "/Cardproduct/buyShow/card_id")
        obj3.list.map(v => v.goUrl = "/Cardproduct/buyShow/card_id")

        // obj1.list = [{...this.props.cardList.store_card},...{goUrl:"/plus/index"}];
        // obj2.list = [{...this.props.cardList.cate_card},...{goUrl:"/buyShow/card_id"}];
        // obj3.list =[ {...this.props.cardList.once_card},...{goUrl:"/buyShow/card_id"}];

        myCardList.push(obj1, obj2, obj3) //放到新数组中
        this.setState({
            myCardList
        })
        // console.log(this.state.myCardList);
    }
}
export default connect(state => ({
    cardList: state.vipCard.cardList,
}),
    dispatch =>
        bindActionCreators(vipCardCreator, dispatch)
)(withRouter(CardMore))

