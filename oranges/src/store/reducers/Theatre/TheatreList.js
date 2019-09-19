import TheatreList from '../../state/Theatre/TheatreList';
import GET_THEATRE_LIST from '../../actionType/Theatre/TheatreList';
export default function(state=TheatreList,{type,payload}){
    state=JSON.parse(JSON.stringify(state));
    if(type===GET_THEATRE_LIST){
        state.TheatreListInfo=payload
    }
    return state;
}