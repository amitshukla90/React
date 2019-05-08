import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';

//state
const initState = {
    counter: 5,
    msg: "Hello Redux",
    customers: []
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
    if(action.type === "FETCH_CUSTOMERS"){
        return {
            ...state,
            customers: action.payload
        }
    }

    return state;
}


//store
//export const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(reducer, compose(applyMiddleware(thunk)));