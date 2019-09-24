import React from "react";
export default class TourCity extends React.Component{
    render(){
        return(
            <div className="tour-cities">
                    <p className="tour-cities-top">
                        <span className="tour-cities-top-name">巡演城市</span>
                        <span className="tour-cities-top-number"><i>23</i>场<i><img className="brief-secondary-date-icon" src={require("../../../assets/Theatre/img/icon-jiao.png")}/></i></span>
                    </p>
                    <div className="show-tour-cities-list">
                    {this.props.tourCity.map((v,i)=>(
                    <div key={i} className="tour-cities-list">
                        <p className="tour-cities-list-name">{v.city_name}</p>
                        <p className="tour-cities-list-date">{v.show_time}</p>
                    </div>
                     ))} 
                    </div>
                </div>
        )
    }
} 