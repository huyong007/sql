import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// function Clock(props) {
//     return (
//         <div>
//             <h1>hello,world!</h1>
//             <h2>It is {props.date.toLocaleTimeString()}.</h2>
//         </div>
//     )
// }

class Clock extends React.Component {
    constructor(props){
        super(props);
        this.state = {date:new Date()};
    }
    render() {
        return (
            <div>
                <h1>hello,world!</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        )
    }
}

function tick() {

    ReactDOM.render(
        <Clock />,
        document.getElementById('stateAndlifeCycle'))
}

setInterval(tick, 1000)
// ReactDOM.render(<App />, document.getElementById('thinkingInReact'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
