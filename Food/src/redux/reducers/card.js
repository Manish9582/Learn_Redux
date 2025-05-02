import { useSelector } from "react-redux";
import { Addcard, removecarddata } from "../actions/condition";

const inilitionState = {
    card: []
}
export const cardReducer = (state = inilitionState, action) => {
    switch (action?.type) {
        case Addcard: {
            const { sendmove, sendId } = action.payload;
            const oldstate = { ...state };
            let filterData;
            const checkcardValue=oldstate.card.some((data) => data.id == sendId);
            if (checkcardValue) {
                return oldstate;
            }else{
                filterData=sendmove.filter((data) => data.id == sendId);
                return {
                    ...oldstate,
                    card: [...oldstate.card, ...filterData]
                }
            }
        }
        case removecarddata: {
            const oldstate = { ...state };
            const filtercard = oldstate.card.filter((data) => data.id != action.payload);
            return {
                ...oldstate,
                card: [...filtercard]
            }
        }
        default:
            return state
    }
}