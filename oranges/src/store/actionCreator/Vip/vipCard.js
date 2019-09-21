import axios from 'axios'
import datatype from '../../actionType/Vip/vipCard'


const changeAdList = (payload) => { //轮播列表
    return {
        type: datatype.CHANGE_AD_LIST,
        payload
    }
}

const changeCardList = (payload) => { //卡片种类命令
    return {
        type: datatype.CHANGE_CARD_LIST,
        payload
    }
}

export default {
    getAdList() {
        return async (dispatch) => {
            const {
                data
            } = await axios.get("https://api.juooo.com/Card/index/hotBanner?version=6.0.5&referer=2 ")
            dispatch(changeAdList(data))
        }
    },
    getCardList() {
        return async (dispatch) => {
            const {
                data
            } = await axios.get("https://api.juooo.com/Card/index/getCardGroupList?version=6.0.5&referer=2")
            dispatch(changeCardList(data))
        }
    },







}