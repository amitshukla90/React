import React, {Component} from 'react';
import {connect} from 'react-redux';
//import {createINCAction, createDECRAction} from '../redux/actionCreators';

import * as actionCreators from '../redux/actionCreators';

class ReduxCounter extends Component{

    //ES 7
    state = {
        count: 0
    };


    constructor(props){

        super(props);
        //ES 6
        //this.state = {}
        this.inc = this.inc.bind(this);
    }

    componentDidMount(){
        this.props.fetchCustomers();
    }

    inc(){
        console.log("incr..");
        this.props.inc();
    }


    decr = () => {
        console.log("decr...");
        this.props.decr();
    }

    change = (evt) => {

        const value = evt.target.value;
        this.setState({
            count: parseInt(value)
        });
    }
    update = () => {

        this.props.updateBy(parseInt(this.countRef.value));
        // this.setState({
        //     count:  parseInt(this.countRef.value)
        // });
    }

    render(){
        return (
            <div>
                <p>{this.props.text}: {this.props.ctr}</p>

                <div>
                    <button onClick={this.inc}>Increment</button>
                    <button onClick={this.decr}>Decrement</button>
                </div>
                <div>
                    {/* Controlled Input */}
                    {this.props.text}: <input type="number" 
                                            value={this.state.count} 
                                            onChange={this.change}/>
                </div>
                <div>
                    {/* Uncontrolled Input */}
                    {this.props.text}:<input type="number" 
                            ref={(inpRef) => { this.countRef = inpRef}}/>
                    <button onClick={this.update}>Update</button>
                </div>
                <div>
                    {this.props.customers.map((c) => {
                        return (
                            <div key={c.id}>
                                <p>{c.name}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    }


}

const mapPropsToState = (state) => {
    return {
        ctr: state.counter,
        customers: state.customers
    }
}
const mapPropsToDispatch = (dispatch) => {
    return {

        //inc: () => {dispatch({type: "INC_CTR"})},
        inc: () => {dispatch(actionCreators.createINCAction())},
        //decr: () => {dispatch({type: "DECR_CTR"})},
        decr: () => {dispatch(actionCreators.createDECRAction())},
        updateBy: (val) => {dispatch({type: "UPD_CTR_BY", value: val})},
        //fetchCustomers: () => {dispatch({type: "FETCH_CUSTOMERS"})}
        fetchCustomers: () => {dispatch(actionCreators.createFetchCustomers())}
    }
}

// connect -fn() -> hoc
export default connect(mapPropsToState, mapPropsToDispatch)(ReduxCounter);