//剧院
import React from "react";
import TheatreInfo from '../../components/Theatre';
import '../../assets/Theatre/theatre.css';
class Theatre extends React.Component{
    render(){
        return(
            <div>
                <header className="title-text-sigle">
                    <h3>剧院</h3>
                </header>
                <TheatreInfo></TheatreInfo>
            </div>
        )
    }
}
export default Theatre;