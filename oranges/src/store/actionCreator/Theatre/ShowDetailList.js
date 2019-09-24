import GET_SHOW_DETAIL_LIST from '../../../store/actionType/Theatre/ShowDetailList';
import axios from 'axios';
export function showdetail(payload){
    return{
        type:GET_SHOW_DETAIL_LIST.GET_SHOW_DETAIL_LIST,
        payload
    }
}
/**城市列表 */
export function getTourCity(payload){
    return{
        type:GET_SHOW_DETAIL_LIST.GET_TOUR_CITY,
        payload
    }
}
/** 相关推荐*/
export function getShowRecommend(payload){
    return{
        type:GET_SHOW_DETAIL_LIST.GET_SHOW_RECOMMEND,
        payload
    }
}
/** 购买选座*/
export function getSeatChase(payload){
    return{
        type:GET_SHOW_DETAIL_LIST.GET_SEAT_CHASE,
        payload
    }
}
export default{
    getHeadeInfo({id}){
        return async (dispatch)=>{
            const {data}=await axios.get(`/Apijcw/Schedule/Schedule/getScheduleInfo?schedular_id=${id}&version=6.0.5&referer=2`)
            dispatch(showdetail(data));
            this.getShowRecommend(data.static_data.cate_parent_id)
        }
    },
    getTourCity(){
        return async (dispatch)=>{
            const {data}=await axios.get('/Apijcw/Schedule/Schedule/getTour?show_id=36016&venue_id=2400&version=6.0.5&referer=2')
            dispatch(getTourCity(data));
        }
    },
    getShowRecommend(id){
        return async (dispatch)=>{
            const {data}=await axios.get(`/Apijcw/Show/Search/getShowList?category=${id}&city_id=1&version=6.0.5&referer=2`)
            dispatch(getShowRecommend(data))
        }
    },
    getSeatChase(){
        return async (dispatch)=>{
            const {data}=await axios.get('/Apijcw/Schedule/Schedule/getScheduleTicket?schedular_id=104836&version=6.0.5&referer=2')
            console.log(data);
            dispatch(getSeatChase(data))
        }
    }
}