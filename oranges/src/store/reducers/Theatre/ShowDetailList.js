import ShowDetailInfo from '../../state/Theatre/ShowDetail';
import GET_SHOW_DETAIL_LIST from '../../actionType/Theatre/ShowDetailList';
export default function(state=ShowDetailInfo,{type,payload}){
    state=JSON.parse(JSON.stringify(state));
      // console.log(333,type,GET_SHOW_DETAIL_LIST);
      if(type===GET_SHOW_DETAIL_LIST.GET_SHOW_DETAIL_LIST){
          state.ShowDetailInfo. item_list=payload. item_list
          state.ShowDetailInfo.share_data=payload.share_data
          state.ShowDetailInfo.static_data=payload.static_data
      }else if(type===GET_SHOW_DETAIL_LIST.GET_TOUR_CITY){
        state.TourCityList=payload
      }else if(type===GET_SHOW_DETAIL_LIST.GET_SHOW_RECOMMEND){
        state.ShowRecommend=payload
      }else if(type===GET_SHOW_DETAIL_LIST.GET_SEAT_CHASE){
        state.PriceList=payload
      }
    
    return state;
}