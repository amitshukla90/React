const redux = require('redux');

//state
const initState = {
    counter: 5,
    msg: "Hello Redux"
}

//reducer

const reducer = (state=initState, action) => {

    if(action.type === "INC_CTR"){
        return {
            ...state,
            counter : state.counter + 1
        }
    }
    if(action.type === "DECR_CTR"){
        return {
            ...state,
            counter : state.counter - 1
        }
    }
    if(action.type === "UPD_CTR_BY"){
        return {
            ...state,
            counter : state.counter + action.value
        }
    }

    return state;
}


//store
const store = redux.createStore(reducer);
console.log("State: ", store.getState());


//subscribe

store.subscribe(() => {
    console.log("In Subscribe: ", store.getState());
});

//dispatch actions

store.dispatch({
    type: "INC_CTR"
});
//console.log("State: ", store.getState());

store.dispatch({
    type: "DECR_CTR"
});
//console.log("State: ", store.getState());

store.dispatch({
    type: "UPD_CTR_BY",
    value: 10
});
//console.log("State: ", store.getState());


