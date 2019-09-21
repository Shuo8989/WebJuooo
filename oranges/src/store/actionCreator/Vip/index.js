import axios from 'axios';
// import {CHANGE_CARD_LIST,CHANGE_DISCOUNT_LIST,CHANGE_FREE_LIST} from '../../actionType/Vip'
import datatype from '../../actionType/Vip'

const changeCardList =(payload)=>{//优先购票
    return {
        type:datatype.CHANGE_CARD_LIST,
        payload
    }
};
const changeDiscountList=(payload)=>{//专享折扣
    return{
        type:datatype.CHANGE_DISCOUNT_LIST,
        payload
    }
}
const changeFreeList=(payload)=>{//免费列表
    return{
        type:datatype.CHANGE_FREE_LIST,
        payload
    }
}
export default{
    getCardList(){
        return async (dispatch)=>{//优先购票接口数据
            const {data} = await axios.get('/Apijcw/vip/index/getPriorBuyList?page=1&limit=1000&version=6.0.5&referer=2');
            const newdata=data.list.slice(0, 2)
            dispatch(changeCardList(newdata))
        }
    },
    getDiscountList(){
        return async(dispatch)=>{//专享折扣数据
            const {data}=await axios.get('/Apijcw/vip/index/getDiscountList?page=1&limit=10&version=6.0.5&referer=2')
            const newdata=data.list.slice(0, 9);
            dispatch(changeDiscountList(newdata))
        }
    },
    getFreeList(){
        return async(dispatch)=>{//免费观影list
            const {data}=await axios.get('/Apijcw/vip/index/getWatchPerList?page=1&limit=6&version=6.0.5&referer=2')
            const newdata=data.list
            dispatch(changeFreeList(newdata))
        }
    }    
}