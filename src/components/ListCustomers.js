import React, {Component} from 'react'
import { Customer } from '../model/Customer';
import './ListCustomers.css';
import CustomerForm from './CustomerForm';

class ListCustomer extends Component {

    state = {
        customers: []
    }

    constructor(props){
        
        super(props);

        this.state.customers.push(new Customer(1, "Facebook", "Bangalore"));
        this.state.customers.push(new Customer(2, "Apple", "Hyderabad"));
        this.state.customers.push(new Customer(3, "Google", "Bangalore"));
        this.state.customers.push(new Customer(4, "Reliance", "Mumbai"));

        this.initCustomers = [...this.state.customers];
    }

    add = (customer) => {
        const updatedCustomers = [...this.state.customers];
        updatedCustomers.push(customer);

        this.setState({
            customers: updatedCustomers
        });
    }

    delete = (id) => {

        const updatedCustomers = [...this.state.customers];
        const index = updatedCustomers.findIndex((cust) => cust.id === id );
        updatedCustomers.splice(index, 1);
        this.setState({
            customers: updatedCustomers
        });

    }

    search = (evt) => {

        const searchText = evt.target.value;
        if(searchText){

            const customers = [...this.state.customers];
            const filteredCustomers =  customers.filter((cust) => {
                                            return cust.id.toString().includes(searchText) 
                                                        || cust.name.toLowerCase().includes(searchText.toLowerCase())
                                                        || cust.location.toLowerCase().includes(searchText.toLowerCase());
                                        });
            this.setState({customers: filteredCustomers});                            
        }
        else{
            this.setState({customers: this.initCustomers});  
        }

    }

     render(){

        const customersJSX = this.state.customers.map((cust, index) => {
            return (
                <div key={index} className="customer">
                    <p>Id: {cust.id}</p>
                    <p>Name: {cust.name}</p>
                    <p>Location: {cust.location}</p>
                    <div>
                        <button onClick={() => {this.delete(cust.id)}}>Delete</button>
                    </div>
                </div>
            );
        });

         return (
             <div>
                 <h3>Customers</h3>
                 <div>
                     <input type="search" placeholder="Search" onChange={this.search}/>
                 </div>
                 <div style={{display: 'flex', flexFlow: 'row wrap', justifyContent: 'center'}}>
                     {this.state.customers.length === 0? <p>No Records Found</p>: customersJSX}
                 </div>
                 <div>
                     <button>Add New</button>
                 </div>   
                 <div>
                    <CustomerForm saved={this.add}/>
                 </div> 
             </div>
         );
     }

}

export default ListCustomer;

