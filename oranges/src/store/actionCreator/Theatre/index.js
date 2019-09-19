import ADD_THEATRE_INFO from '../../actionType/Theatre';
import axios from 'axios';

export function  addTheatreInfo(payload){
            return{
                type:ADD_THEATRE_INFO,
                 payload
            }
    }
export default{
     getTheatreInfo(){
       return async (dispatch)=>{
        console.log(this)
         const {data}=await  axios.get('/Apijcw/theatre/index/getTheatreList?page=1&version=6.0.5&referer=2')
         console.log(data.theatre_list);
         dispatch(addTheatreInfo(data.theatre_list));
        } 
    }
}