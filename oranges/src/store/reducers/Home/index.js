import homeType from '../../actionType/Home'
import inisState from '../../state/Home'
export default (state=inisState,{type,payload})=>{
    state = JSON.parse(JSON.stringify(state));
    switch(type){
        case homeType.UP_CLASSIFY_HOME:
            state.ClassifyHome = payload;
            break; 
        case homeType.UP_VIP_SCHEDULAR:
            state.vipHomeSchedular = payload;
            break; 
        case homeType.UP_HOT_SRECOMMEND:
            state.HotsShowlist= payload;
            break; 
        case homeType.UP_TOUR_RECOMMEND:
            state.Tourshowlist= payload;
            break;    
        default:
            break;
    }
    return state
}