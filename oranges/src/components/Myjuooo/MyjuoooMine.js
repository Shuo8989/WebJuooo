import React from "react";
import {NavLink} from 'react-router-dom'
export default class MyjuoooMine extends React.Component {
    constructor() {
        super()
    }


    render() {
        return (
            <div className="myjuooo_btm">
                <span className="myjuooo_btm_num">0</span>
                <div className="MyjuoooMine"><NavLink to={this.props.to}>{this.props.msg}</NavLink></div>
            </div>
        )
    }
}






