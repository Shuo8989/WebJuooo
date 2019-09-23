import {
    combineReducers
}from 'redux'
import home from './Home'
import vip from './Vip'
import Theatre from './Theatre';
import TheatreList from './Theatre/TheatreList';
import ShowDetailList from './Theatre/ShowDetailList';

export default combineReducers({
    home,
    vip,
    Theatre,
    TheatreList,
    ShowDetailList
})