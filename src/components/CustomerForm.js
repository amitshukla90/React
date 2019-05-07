import React, {Component} from 'react'
import { Customer } from '../model/Customer';


class CustomerForm extends Component {

    state = {
        customer: new Customer(0, "", "")
    }

    change = (evt) => {
        
        const value = evt.target.value;
        const customer = {...this.state.customer};
        const propName = evt.target.name;
        customer[propName] = value;

        this.setState({
            customer: customer
        });
    }

    save = () => {
        this.props.saved(this.state.customer);
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
                         <button>Cancel</button>
                     </div>

                 </fieldset>
             </div>
         );
     }

}

export default CustomerForm;