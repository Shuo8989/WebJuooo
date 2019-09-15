import homeType from '../../actionType/Home'
import inisState from '../../state/Home'
export default (state=inisState,{type,payload})=>{
    state = JSON.parse(JSON.stringify(state));
    switch(type){
        case homeType.UP_CLASSIFY_HOME:
            state.ClassifyHome = payload;
            break; 
        default:
            break;
    }
    return state
}