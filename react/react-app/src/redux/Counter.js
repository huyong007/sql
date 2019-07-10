import React from 'react';
import { bindActionCreator, createStore, bindActionCreators } from 'redux';
import { Provider, connect } from 'react-redux';

//store initial state 
const initialState = { count: 0 };

//reducer 
const counter = (state = initialState, action) => {
    switch (action.type) {
        case "PLUS_ONE":
            return { count: state.count + 1 };
        case 'MINUS_ONE':
            return { count: state.count - 1 };
        case 'CUSTOM_COUNt':
            return { count: state.count + action.payload.count };
        default:
            break;
    }
    return state;
};

//create store
const store = createStore(counter);

//action creator
function plusOne() {
    //action 
    return { type: 'PLUS_ONE' };
}

function minusOne() {
    return { type: 'MINUS_ONE' };

}

export class Counter extends React.Component {
    render() {
        const { count, plusOne, minusOne } = this.props;
        return (
            <div className='counter'>
                <button onClick={minusOne}>-</button>
                <span style={{ display: 'inline-block', margin: '0 10px' }}>
                    {count}
                </span>
                <button onClick={plusOne}>+</button>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        count: state.count
    };
}

function mapDispatchToprops(dispatch){
    return bindActionCreators({plusOne,minusOne},dispatch);
}

const ConnectedCounter = connect(mapDoprops,mapDispatchToprops)