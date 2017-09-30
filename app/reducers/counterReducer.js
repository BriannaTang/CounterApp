import * as types from '../constants/Counter.const';

export default function CounterApp(state = 0, action) {
    switch(action.type) {
        case types.INCREMENT:
            return state = state + 1;
        case types.DECREMENT:
            return state = state - 1;
    }
    return state;
}
