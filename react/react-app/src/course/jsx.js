
import React from 'react';
// import ReactDOM from 'react-dom';


function Welcome(props) {
    return <h1>hello,{props.name}</h1>;
}

const element = <Welcome name='Sara' />;

function BigWelcome() {
    return (
        <div>
            <Welcome name='Sara' />
            <Welcome name='Cahal' />
            <Welcome name='Sara' />
        </div>
    )
}

export default { element, BigWelcome };