import React, {Component} from 'react';


class Counter extends Component{

    //ES 7
    state = {
        count: 0
    };

    constructor(props){

        super(props);
        //ES 6
        //this.state = {}
    }

    inc = (evt) => {
        console.log("incr..");
        //this.state.count++;
        this.setState({
            count: this.state.count + 1
        });
    }
    decr = () => {
        console.log("decr...");
        this.setState({

            count: this.state.count - 1
        });
    }
    
    render(){
        return (
            <h4>
                <p>{this.props.text}: {this.state.count}</p>

                <div>
                    <button onClick={this.inc}>Increment</button>
                    <button onClick={this.decr}>Decrement</button>
                </div>
            </h4>
        );
    }


}

export default Counter;