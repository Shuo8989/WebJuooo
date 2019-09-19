import TheatreList from '../../state/Theatre';
import ADD_THEATRE_INFO from '../../actionType/Theatre';
export default function(state=TheatreList,{type,payload}){
    state=JSON.parse(JSON.stringify(state));
    if(type===ADD_THEATRE_INFO){
        state.TheatreList=payload
    }
    return state;
}
