import initState from '../../state/Vip/VipCard.js'
import datatype from '../../actionType/Vip/vipCard.js'

export default  (state=initState,{type,payload})=> {
    state=JSON.parse(JSON.stringify(state))
    
        switch (type) {
            case datatype.CHANGE_AD_LIST:
                state.adList=payload;
                break;
            case datatype.CHANGE_CARD_LIST:
                state.cardList=payload;
            default:
                break;
        }
    
        return state
}