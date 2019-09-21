import React from 'react';
import {NavLink,withRouter} from "react-router-dom";
import MyjuoooTop from './MyjuoooTop';
import '../../assets/myjuooo/css/MyjuoooScores.css'

class MyjuoooScores extends React.Component{
    render(){
        return(
            <div>
                <MyjuoooTop msg={"积分商城"} dis={"block"}></MyjuoooTop>
            </div>
        )
    }
}
export default withRouter(MyjuoooScores)
