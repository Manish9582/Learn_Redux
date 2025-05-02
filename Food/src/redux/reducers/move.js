import { addData, checkLoader } from "../actions/condition";

const inilitionState = {
    loader: true,
    move: []
}
export const moveReducer = (state = inilitionState, action) => {
    switch (action.type) {
        case checkLoader: {
            const oldState = { ...state };
            oldState.loader = action.payload
            return oldState;
        }
        case addData: {
            const oldState = { ...state };
            oldState.move = action.payload
            return oldState;
        }
        default:
            return state;
    }
}