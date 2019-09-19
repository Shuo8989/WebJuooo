import React from "react";
import {NavLink} from 'react-router-dom'
export default class MyjuoooMy extends React.Component {
    constructor() {
        super()
    }
    render() {
        return (
            <div className="myjuooo_my">
                <img src={this.props.src}/>
                <div className="myjuooo_my_msg"><NavLink to={this.props.to}>{this.props.msg}</NavLink></div>
            </div>
        )
    }
}






