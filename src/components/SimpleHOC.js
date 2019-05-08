import React from 'react';


// const SimpleHOC = (props) => {

//     return (
//         <div style={{border: "2px solid blue"}}>
//                 {props.children}
//         </div>
//     );
// }

const SimpleHOC = (WrappedComponent) => {
    
    // this is a component
    return (props) => {
        return (
            <div style={{border: "2px solid blue"}}>
                <WrappedComponent {...props}/>
            </div>
        );
    }
}


export default SimpleHOC;