// import {CHANGE_CARD_LIST,CHANGE_DISCOUNT_LIST,CHANGE_FREE_LIST} from '../../actionType/Vip'
import datatype from '../../actionType/Vip'

import inisState from '../../state/Vip'
export default (state=inisState,{type,payload})=>{
    state = JSON.parse(JSON.stringify(state));
    switch(type){
        case datatype.CHANGE_CARD_LIST:
            state.cardList = payload;
            break; 
        case datatype.CHANGE_DISCOUNT_LIST:
            state.discountList = payload;
            break; 
        case datatype.CHANGE_FREE_LIST:
            state.freeList=payload;
        default:
            break;
    }
    return state
}