import axios from 'axios';
import homeType from '../../actionType/Home'
const upClassifyHome =(payload)=>{//首页上部信息
    return {
        type:homeType.UP_CLASSIFY_HOME,
        payload
    }
};
const upVipSchedular=(payload)=>{//获取优先购票vip
    return{
        type:homeType.UP_VIP_SCHEDULAR,
        payload
    }
}
export default{
    getClassifyHome({city_id,city_abridge}){//获取上部信息
        return async (dispatch)=>{
            const {data} = await axios.get(`/Apijcw/home/index/getClassifyHome?city_id=${city_id}&abbreviation=${city_abridge}&version=6.0.3&referer=2`);
            dispatch(upClassifyHome(data))
        }
    },
    getVipHomeSchedular(){
        return async(dispatch)=>{//获取优先购票vip
            const {data}=await axios.get('https://api.juooo.com/vip/index/getVipHomeSchedular?version=6.0.5&referer=2')
            dispatch(upVipSchedular(data))
        }
    }    
}