import { Decre, Incre, roleback } from "../actions/contants";

const iniliationState = {
    counter: 0,
    history: []
}

export const counterFun = (state = iniliationState, action) => {
    switch (action?.type) {
        case Incre: {
            let CounterUp = state.counter + action.payload;
            return {
                ...state,
                counter: CounterUp,
                history: [...state.history, CounterUp]
            }
        }
        case Decre: {
            let CounterUp = state.counter + action.payload;
            if (CounterUp < 0) CounterUp = 0;
            return {
                ...state,
                counter: CounterUp,
                history: [...state.history, CounterUp]
            }
        }
        case roleback: {
            const oldstate = { ...state };
            let storeLastVal = oldstate.history[oldstate.history.length - 1];
            return {
                ...state,
                counter: storeLastVal,
                history: state.history.slice(0, -1)
            }
        }
        default:
            return state;
    }

}