import React from 'react';
import {withRouter} from "react-router-dom";
import Topscoll from '../punlic/Topscoll'
import { Icon } from 'antd';
import '../../assets/myjuooo/css/MyjuoooScores.css'

class MyjuoooScores extends React.Component{
    render(){
        return(
            <div>
                <Topscoll msg={"积分商城"} dis={"block"}></Topscoll>
                <div className={"Scores_top"}>
                    <Icon type="gold" />
                </div>
            </div>
        )
    }
}
export default withRouter(MyjuoooScores)
