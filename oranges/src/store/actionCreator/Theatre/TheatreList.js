import GET_THEATRE_LIST from '../../actionType/Theatre/TheatreList';
import axios from 'axios';
export function changeState(payload){
    return{
        type:GET_THEATRE_LIST,
        payload
    }
}
export default{
    getTheatreInfo(){
        return async (dispatch)=>{
            const {data}=await axios.get('/Apijcw/theatre/index/getTheatreList?page=1&version=6.0.5&referer=2')
            console.log(data);
            dispatch(changeState(data.theatre_list))
        }
    }
}