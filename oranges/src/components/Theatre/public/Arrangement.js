import React,{Component} from "react";
export default class Arrangement extends Component{
    render(){
        return(
            <div className="brief-schedule">
                    <div className="benefit-item">
                        <span>领券：</span>
                        <span>
                            <i>满100减10</i>
                            <i>满300减30</i>
                        </span>
                        <span className="more"><img src={require("../../../assets/Theatre/img/0.png")}/></span>
                    </div>
                    <div className="benefit-item-plus">
                        <span>VIP+：</span>
                        <span><i className="member">V+会员享</i><i className="integral">国内免邮+双倍积分</i></span>
                        <span><img src={require("../../../assets/Theatre/img/icon-jiao.png")}/></span>
                    </div>
                    <div className="benefit-item-admission">
                        <span>入场：</span>
                        <span className="benefit-item-admission-content">{this.props.Admission}</span>
                    </div>

                      <div  className="benefit-item-support"> 
                        <span>支持：</span>
                         {this.props.support.map((v,i)=>(
                        <span key={i} className="seat">{v}</span> 
                          ))}  
                     </div> 

                </div>
        )
    }
}