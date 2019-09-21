import React from  'react';
import { NavLink} from 'react-router-dom';
import '../../assets/Home/Vipblock.scss'
class Vipblock extends React.Component{
    render(){
         return (
             <div className={'vip-block'}>
                 <NavLink className={'vip-block__advert'} to={'/vip/index'}>
                     <div className={'vip-block__advert__left'}>
                         <span className={'vip-block__advert__left__logo'}></span>
                         <span className={'vip-block__advert__left__tip'}>VIP+会员尊享权益</span>
                     </div>
                     <div className={'vip-block__advert__right'}>
                         <span className={'vip-block__advert__right__lab'}>开通99元/年</span>
                         <span className={'icon'}>&gt;</span>
                     </div>
                 </NavLink>
                 <div className={'vip-block__conent'}>
                     <div className={'vip-block__conent__power'}>
                        <NavLink to={"/vip/discount"}> <h3 className={'vip-block__conent__power__title'}>专享折扣</h3></NavLink>
                         <ul className={"vip-block__conent__power__wrap wrap--ul"}>
                             <li className={'vip-block__conent__power__item item--list'}>
                                 <NavLink className={'vip-block__conent__power__click'} to={"/ticket/"+this.props.discountList[0].schedular_id}>
                                     <img style={{width: '2.1rem',height:'2.92rem'}}  src={this.props.discountList[0].pic} alt={''} />
                                     <p>
                                         <strong>{this.props.discountList[0].min_discount}</strong>
                                         <span>折</span>
                                     </p>
                                 </NavLink>
                             </li>
                             <li className={'vip-block__conent__power__item item--list'}>
                                 <NavLink  className={'vip-block__conent__power__click'} to={"/ticket/"+this.props.discountList[1].schedular_id}>
                                     <img style={{width: '2.1rem',height:'2.92rem'}} src={this.props.discountList[1].pic} alt={''} />
                                     <p>
                                         <strong>{this.props.discountList[1].min_discount}</strong>
                                         <span>折</span>
                                     </p>
                                 </NavLink>
                             </li>
                         </ul>
                     </div>
                     
 
                     {
                         this.props.watchList.lentgh>0?(
                             <div className={'vip-block__conent__power'}>
                                 <h3 className={'vip-block__conent__power__title title--right'}>优先购票</h3>
                                 <ul className={'vip-block__conent__power__wrap wrap-list--right'}>
                                     <li className={'vip-block__conent__power__item'}>
                                         <NavLink className={"vip-block__conent__power__click"} to={'/ticket/'+this.props.watchList[0].schedular_id}>
                                             <img style={{width: '2.1rem',height:'2.92rem'}} src={this.props.watchList[0].pic} alt={''} />
                                             <p>
                                                 <strong style={{fontSize:'.24rem'}}>{this.props.watchList[0].date}</strong>
                                                 <span>开始</span>
                                             </p>
                                         </NavLink>
                                     </li>
                                 </ul>
                             </div>
                         ):(
                             <div className={'vip-block__conent__power'}>
                                 <h3 className={'vip-block__conent__power__title title--right'}>优先购票</h3>
                                 <ul className={'vip-block__conent__power__wrap wrap-list--right'}>
                                     <li className={'vip-block__conent__power__item'}>
                                         <NavLink className={"vip-block__conent__power__click"} to={'/ticket/'+this.props.discountList[0].schedular_id}>
                                             <img style={{width: '2.1rem',height:'2.92rem'}} src={this.props.discountList[0].pic} alt={''} />
                                             <p>
                                                 <strong style={{fontSize:'.24rem'}}>{this.props.discountList[0].date}</strong>
                                                 <span>开始</span>
                                             </p>
                                         </NavLink>
                                     </li>
                                 </ul>
                             </div>
                         )
                     }
                     
 
                 </div>
             </div>
         )
     }
}
export default Vipblock