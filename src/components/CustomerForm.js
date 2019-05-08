import React, {Component} from 'react'
import { Customer } from '../model/Customer';
import PropTypes from 'prop-types'


class CustomerForm extends Component {

    state = {
        customer: new Customer(0, "", "")
    }

    constructor(props){
        super(props);

        this.initState = {...this.state};
        if(this.props.customer){
            this.state.customer = this.props.customer;
        }
    }
    componentWillReceiveProps(nextProps){
        
        //this.state.customer = nextProps.customer;
    }

    change = (evt) => {
        
        const value = evt.target.value;
        const customer = {...this.state.customer};
        const propName = evt.target.name;
        if(propName === "id"){
            customer[propName] = parseInt(value);
        }
        else{
            customer[propName] = value;
        }
        

        this.setState({
            customer: customer
        });
    }

    save = () => {
        this.props.saved(this.state.customer);

        // this.setState({
        //     customer: new Customer(0, "", "")
        // })
        this.setState(this.initState);
    }

     render(){
         return (
             <div>
                 <fieldset>
                     <p>ID</p>
                     <div>
                         <input name="id" type="number" value={this.state.customer.id} onChange={this.change}/>
                     </div>
                     <p>Name</p>
                     <div>
                         <input name="name" type="text" value={this.state.customer.name} onChange={this.change}/>
                     </div>
                     <p>Location</p>
                     <div>
                         <input name="location" type="text" value={this.state.customer.location} onChange={this.change}/>
                     </div>
                     <div>
                         <button onClick={this.save}>Save</button>
                         <button onClick={this.props.cancelled}>Cancel</button>
                     </div>

                 </fieldset>
             </div>
         );
     }

}

export default CustomerForm;

CustomerForm.propTypes = {
    customer: PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        location: PropTypes.string
    }),
    saved: PropTypes.func.isRequired,
    cancelled: PropTypes.func.isRequired
}