//路由守卫
import React from 'react';
import {
    withRouter
} from 'react-router-dom';
import Punlicnav from '../components/punlic/Punlicnav'
class GuaudRouter extends React.Component{
    render(){ 
        const propst=this.props;
        return(
            <>
                <propst.component/>
                {propst.meta.isButton?<Punlicnav/>:null}
            </>
        )
    }
}
export default withRouter(GuaudRouter)