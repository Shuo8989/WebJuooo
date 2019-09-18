import React from 'react'
import {NavLink} from "react-router-dom";

export default class Navigation extends React.Component{
    constructor(props){
        super(props)
    }
    render() {
        return(
                <ul>
                    <li className={"one"}>
                        <NavLink to={"/show/showsLibrary"}>全部</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/show/showsLibrary"}>演唱会</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/show/showsLibrary"}>音乐会</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/show/showsLibrary"}>话剧歌剧</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/show/showsLibrary"}>儿童亲子</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/show/showsLibrary"}>音乐剧</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/show/showsLibrary"}>戏曲综艺</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/show/showsLibrary"}>展览</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/show/showsLibrary"}>舞蹈芭蕾</NavLink>
                    </li>
                </ul>
            )

    }
}