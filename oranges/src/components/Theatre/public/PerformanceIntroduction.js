import React from "react";
export default class PerformanceIntroduction extends React.Component{
    render(){
        return(
            <div className="show-introduce">
                <p className="tour-cities-top">
                    <span className="tour-cities-top-name">演出介绍</span>
                </p>
                <div className="show-introduce-detail" dangerouslySetInnerHTML={{__html:this.props.showIntroduction}}>
                </div>
            </div>

        )
    }
}