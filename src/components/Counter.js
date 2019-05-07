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
        this.inc = this.inc.bind(this);
    }

    inc(){
        console.log("incr..");
        this.setState({
                count: this.state.count + 1
    	     });
    }

    // inc = (evt) => {
    //     console.log("incr..");
    //     //this.state.count++;
    //     this.setState({
    //         count: this.state.count + 1
    //     });
    // }
    decr = () => {
        console.log("decr...");
        this.setState({

            count: this.state.count - 1
        });
    }

    change = (evt) => {

        const value = evt.target.value;
        this.setState({
            count: parseInt(value)
        });
    }
    update = () => {

        this.setState({
            count:  parseInt(this.countRef.value)
        });
    }

    render(){
        return (
            <div>
                <p>{this.props.text}: {this.state.count}</p>

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

            </div>
        );
    }


}

export default Counter;