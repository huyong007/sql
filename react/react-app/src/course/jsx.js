
import React from 'react';
import ReactDOM from 'react-dom';


function Clock(props) {
    return (
        <div>
            <h1>hello,world!</h1>
            <h2>It is {props.date.toLocaleTimeString()}.</h2>
        </div>
    )
}

function Tick() {
    ReactDOM.render(
        <Clock date={new Date()} />,
        document.getElementById('course')
    )
}

setInterval(Tick, 1000);
export default { Tick };