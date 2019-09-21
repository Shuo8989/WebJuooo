import React,{Component} from 'react';
import {NavLink}from 'react-router-dom';
import '../../assets/Home/recommendBlock.scss'  
class RecommendBlock extends Component{
    constructor(){
        super();
        this.listshow=[]
    }
    componentDidMount(){
          // 使用滚动时自动加载更多
          let loadMoreFn = this.props.Recommendlist.getRecommendList
          let page=1
          const homelist = this.refs.homelist
          let timeoutId
          function callback() {
              //获取到按钮离顶部的距离
              const top = homelist.getBoundingClientRect().top
              const windowHeight = window.screen.height
              if (top && top < windowHeight) {
                if(page>10){
                    page=10
                }else{
                    page++
                    loadMoreFn({
                        page
                    })
                }
                  // 证明 homelist 已经被滚动到暴露在页面可视范围之内了 
              }
          }
          window.addEventListener('scroll', function () {
              if (this.props.isLoadingMore) {
                  return
              }
              if (timeoutId) {
                  clearTimeout(timeoutId)
              }
              //如果在50ms 以内没有执行scroll 就会执行callBack，如果有下一次滚动，定时器就会被清空
              timeoutId = setTimeout(callback, 100)
          }.bind(this), false);
    }

    render(){ 
        const recommendlist=this.props.Recommendlist.recommendlist.recommend_show_list;
       this.listshow=this.listshow.concat(recommendlist)
        return (
            <div className={"recommend-block"}>
                <div className={'recommend-block__wrap '}>
                    <h3 className={'recommend-block__wrap__title'}>为你推荐</h3>
                </div>
                <div className={"recommend-block__list"}>
                    <ul className={'content'}>
                        {
                           this.listshow.map((v,i)=>(
                                <li key={i}>
                                    <div className={'show-icon'}>
                                        <NavLink to={'/ticket/'+v.sche_id} className={'show-icon-a'}>
                                            <img src={v.schePic} alt='' />
                                        </NavLink>
                                        <div  dangerouslySetInnerHTML={{__html: v.tag_icon}}></div>
                                    </div>
                                    <div className={"item-desc"}>
                                        <p className={'show-date'}>
                                            <strong>
                                                {
                                                    v.show_time
                                                }
                                            </strong>
                                            <span>
                                                {
                                                    v.week?v.week:null}
                                            </span>
                                        </p>
                                        <NavLink to={'/ticket/'+v.sche_id} className={'item-desc-a'} >
                                            <h3 className={'text-double'}>
                                                {v.show_name}
                                            </h3>
                                        </NavLink>
                                        <p className={'text-single'}>
                                            {v.c_name+' | '+v.v_name}
                                        </p>
                                        <p className={'price'}>
                                            <strong className={'c_ff6'}>
                                                ￥{v.low_price}
                                            </strong>
                                            <span>起</span>
                                        </p>
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                    <button className={"recommend-block__more"} ref={"homelist"}>

                        查看更多演出
                        <img  src={require("../../assets/Home/images/gt.png")} alt="" />
                    </button>
                </div>
            </div>
        )
    }
}
export default RecommendBlock