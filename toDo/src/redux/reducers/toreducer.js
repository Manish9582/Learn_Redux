import { addData, ClearAll, dataDelete, dataEdit } from "../actions/constants";

const inlition = {
    data: [],
    index: -1
}
export const toreducer = (state = inlition, action) => {
    switch (action?.type) {
        case addData: {
            const oldState = { ...state };
            let storeTodo = oldState.data = action.payload;
            let storeTodoid = oldState.index += action.indexVal;
            return {
                ...state,
                index: storeTodoid,
                data: [...state.data, { storeTodoid, storeTodo }]
            }
        }
        case dataDelete: {
            const oldState = { ...state };
            const filterData = oldState.data.filter((data) => data.storeTodoid !== action.payload);
            return {
                ...state,
                data: filterData
            }
        }
        case dataEdit: {
            const oldState = [...state.data];
            oldState[action.indexVall].storeTodo = action.payload;
            return {
                ...state,
                data: oldState
            }
        }
        case ClearAll: {
            let oldState = [...state.data];
            oldState =action.payload;
            return oldState;
        }

    }
    return state;
}
