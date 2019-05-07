import React from 'react';

var Hello = (props) => {
    return (
        <h4>
            <p>Hello World {props.message}!!</p>
            <p>Generated @ {new Date().toTimeString()}</p>
        </h4>
    );
}
export default Hello;