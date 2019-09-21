import React from 'react';
import {NavLink,withRouter} from "react-router-dom";
import Topscoll from '../punlic/Topscoll'
import '../../assets/myjuooo/css/MyjuoooScores.css'

class MyjuoooScores extends React.Component{
    render(){
        return(
            <div>
                <Topscoll msg={"积分商城"} dis={"block"}></Topscoll>
            </div>
        )
    }
}
export default withRouter(MyjuoooScores)
