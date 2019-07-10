import React from 'react';
import {
    createStore,
    combineReducers,
    bindActionCreators
} from 'redux';

function run() {
    // 存储初始状态
    const initialState = { count: 0 };
    // reducer
    const counter = (state = initialState, action) => {
        switch (action.type) {
            case 'PLUS_ONE':
                return { count: state.count + 1 };
            case "MINUS_ONE":
                return { count: state.count - 1 };
            case "CUSTOM_COUNT":
                return {
                    count: state.count + action.payload.counter
                };
            default:
                break;
        }
        return state;
    };
    const todos = (state = {}) => state;

    // create store
    const store = createStore(
        combineReducers({
            todos,
            counter
        })
    );
    // Action creator
    function plusOne() {
        // action 
        return { type: "PLUS_ONE" };
    }
    function minusOne() {
        return { type: "MINUS_ONE" };
    }
    function customCount(count) {
        return { type: "CUSTOM_COUNT", payload: { count } };
    }
    plusOne = bindActionCreators(plusOne, store.dispatch);

    store.subscribe(() => console.log(store.getState()));
    // store.dispatch(plusOne());
    plusOne();
    store.dispatch(minusOne());
    store.dispatch(customCount(5));

}

export default () => (
    < div >
        <button onClick={run}>Run</button>
    </div >
)

