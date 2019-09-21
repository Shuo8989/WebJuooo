import {
    combineReducers
}from 'redux'
import home from './Home'
import vip from './Vip'
import Theatre from './Theatre';
import TheatreList from './Theatre/TheatreList';

export default combineReducers({
    home,
    vip,
    Theatre,
    TheatreList
})